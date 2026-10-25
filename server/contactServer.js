const express = require("express");

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_PURPOSES = new Set([
  "Mời phỏng vấn OJT",
  "Đề xuất dự án thử nghiệm",
  "Kết nối trao đổi kỹ thuật"
]);
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

function createContactApp({ transporter, recipient, allowedOrigins = [] }) {
  const app = express();
  const requestCounts = new Map();

  app.use((req, res, next) => {
    const origin = req.get("origin");
    if (origin && !allowedOrigins.includes(origin)) {
      return res.status(403).json({ error: "Origin is not allowed." });
    }
    if (origin) {
      res.set("Access-Control-Allow-Origin", origin);
      res.set("Vary", "Origin");
      res.set("Access-Control-Allow-Headers", "Content-Type");
      res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    }
    if (req.method === "OPTIONS") return res.sendStatus(204);
    return next();
  });
  app.use(express.json({ limit: "12kb" }));

  app.post("/api/contact", async (req, res) => {
    const { name, company, email, purpose, subject, content, lang } = req.body || {};
    const isVietnamese = lang !== "en";
    const ip = req.ip;
    const now = Date.now();
    const current = requestCounts.get(ip);
    if (current && now - current.startedAt < RATE_LIMIT_WINDOW_MS) {
      if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
        return res.status(429).json({
          error: isVietnamese
            ? "Bạn đã gửi quá nhiều thư. Vui lòng thử lại sau."
            : "Too many messages. Please try again later."
        });
      }
      current.count += 1;
    } else {
      requestCounts.set(ip, { startedAt: now, count: 1 });
    }

    const values = { name, company, email, purpose, subject, content };
    const limits = {
      name: 120,
      company: 120,
      email: 254,
      purpose: 80,
      subject: 150,
      content: 5000
    };
    for (const [field, maxLength] of Object.entries(limits)) {
      if (typeof values[field] !== "string" || !values[field].trim() || values[field].length > maxLength) {
        const fieldNames = isVietnamese
          ? { name: "họ tên", company: "công ty", email: "email", purpose: "mục đích liên hệ", subject: "tiêu đề", content: "nội dung" }
          : { name: "name", company: "company", email: "email", purpose: "contact purpose", subject: "subject", content: "message" };
        return res.status(400).json({
          error: isVietnamese
            ? `Vui lòng nhập ${fieldNames[field]} hợp lệ.`
            : `Please provide a valid ${fieldNames[field]}.`
        });
      }
    }
    if (!EMAIL_PATTERN.test(email.trim())) {
      return res.status(400).json({
        error: isVietnamese
          ? "Vui lòng nhập địa chỉ email hợp lệ."
          : "Please provide a valid email address."
      });
    }
    if (!ALLOWED_PURPOSES.has(purpose)) {
      return res.status(400).json({
        error: isVietnamese
          ? "Vui lòng chọn mục đích liên hệ hợp lệ."
          : "Please select a valid contact purpose."
      });
    }

    const safeSubject = subject.replace(/[\r\n]+/g, " ").trim();
    const purposeInEnglish = {
      "Mời phỏng vấn OJT": "OJT interview invitation",
      "Đề xuất dự án thử nghiệm": "Propose a trial project",
      "Kết nối trao đổi kỹ thuật": "Technical discussion"
    }[purpose];
    const message = [
      `Contact: ${name.trim()}`,
      `Company: ${company.trim()}`,
      `Reply email: ${email.trim()}`,
      `Purpose: ${isVietnamese ? purpose : purposeInEnglish}`,
      `Language: ${lang === "en" ? "English" : "Vietnamese"}`,
      "",
      content.trim()
    ].join("\n");

    try {
      await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: recipient,
        replyTo: email.trim(),
        subject: `[Portfolio Contact] ${safeSubject} - ${company.trim()}`,
        text: message
      });
      return res.status(200).json({ message: "Message sent successfully." });
    } catch (error) {
      console.error("Contact email delivery failed:", error.message);
      return res.status(502).json({
        error: isVietnamese
          ? "Gửi email thất bại. Vui lòng thử lại sau."
          : "Email delivery failed. Please try again later."
      });
    }
  });

  app.use((error, req, res, next) => {
    void next;
    if (error.type === "entity.too.large") {
      return res.status(413).json({ error: "The submitted message is too large." });
    }
    if (error instanceof SyntaxError && error.status === 400) {
      return res.status(400).json({ error: "The request body must be valid JSON." });
    }
    console.error("Contact API request failed:", error.message);
    return res.status(500).json({ error: "The request could not be processed." });
  });

  return app;
}

module.exports = { createContactApp };

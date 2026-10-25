require("dotenv").config();

const nodemailer = require("nodemailer");
const { createContactApp } = require("./contactServer");

const requiredSettings = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "SMTP_FROM"];
const missingSettings = requiredSettings.filter((key) => !process.env[key]);
if (missingSettings.length > 0) {
  throw new Error(`Missing required email configuration: ${missingSettings.join(", ")}`);
}

const smtpPort = Number(process.env.SMTP_PORT);
if (!Number.isInteger(smtpPort) || smtpPort < 1 || smtpPort > 65535) {
  throw new Error("SMTP_PORT must be a valid port number.");
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: smtpPort,
  secure: process.env.SMTP_SECURE === "true" || smtpPort === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

const allowedOrigins = [
  "http://localhost:3000",
  process.env.CONTACT_ALLOWED_ORIGIN
].filter(Boolean);
const app = createContactApp({
  transporter,
  recipient: process.env.CONTACT_TO_EMAIL || "anhlt.ce191756@gmail.com",
  allowedOrigins
});
const port = Number(process.env.CONTACT_PORT || 5001);

app.listen(port, () => {
  console.log(`Contact email API listening on port ${port}`);
});

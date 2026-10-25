import React from "react";
import { Send } from "lucide-react";
import { CANDIDATE_INFO, CV_FILES } from "../data/portfolioContent";

// PortfolioContactSection hiển thị riêng một khu vực của portfolio.
export function PortfolioContactSection(props) {
  const { activeTab, lang, setShowCVModal, contactForm, setContactForm, formErrors, mailSentBanner, mailSending, mailSendError, setMailSentBanner, handleSendContactForm, themeCard, themeElevated, themeSubtext, themePrimaryText, themeEmeraldText } = props;
  const publicUrl = process.env.PUBLIC_URL || "";
  const defaultSubjectVi = "Lời mời tham gia phỏng vấn thực tập OJT vị trí Software Engineer Intern";
  const defaultSubjectEn = "OJT Software Engineer Intern Interview Invitation";
  return (
    <>
        {/* ====================================================================
            MÀN HÌNH 7: LIÊN HỆ & GỬI EMAIL THỰC TẾ (CONTACT OJT)
           ==================================================================== */}
        {(activeTab === "contact" || activeTab === "home") && (
          <section className={`rounded-2xl p-6 sm:p-8 border shadow-xl ${themeCard}`}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Cột trái: Thông tin liên lạc & Tải CV Song ngữ */}
              <div className="lg:col-span-5 space-y-4">
                <div>
                  <span className={`font-mono text-xs font-bold uppercase ${themeEmeraldText}`}>
                    🟢 ACTIVE PIPELINE // OJT RECRUITMENT
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold mt-1">
                    {lang === "vi" ? "Liên hệ & Lời mời Phỏng vấn OJT" : "Contact & OJT Interview Invitation"}
                  </h2>
                  <p className={`text-xs sm:text-sm mt-1 ${themeSubtext}`}>
                    {lang === "vi"
                      ? "Nhập nội dung và gửi trực tiếp đến email; bạn không cần mở ứng dụng khác."
                      : "Enter your message and send it directly to my email without opening another app."}
                  </p>
                </div>

                <div className={`p-4 rounded-xl border space-y-2.5 font-mono text-xs ${themeElevated}`}>
                  <div>
                    📞 <strong>{lang === "vi" ? "SĐT / Zalo:" : "Phone / Zalo:"}</strong> {CANDIDATE_INFO.phone}
                  </div>
                  <div>
                    ✉️ <strong>{lang === "vi" ? "Email nhận thư:" : "Email:"}</strong>{" "}
                    <a href={`mailto:${CANDIDATE_INFO.email}`} className={themePrimaryText}>
                      {CANDIDATE_INFO.email}
                    </a>
                  </div>
                  <div>
                    🔗 <strong>LinkedIn:</strong> www.linkedin.com/in/le-anh
                  </div>
                  <div>
                    📍 <strong>{lang === "vi" ? "Địa chỉ:" : "Location:"}</strong> {lang === "vi" ? CANDIDATE_INFO.addressVi : CANDIDATE_INFO.addressEn}
                  </div>
                </div>

                <div className={`p-5 rounded-xl border space-y-3 ${themeElevated}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm mb-0">
                        {lang === "vi" ? "Hồ sơ CV Song ngữ (Việt + Anh)" : "Bilingual Resume (Vietnamese + English)"}
                      </h4>
                      <span className={`font-mono text-[11px] ${themeSubtext}`}>
                        CE191756_Kỹ thuật phần mềm_Lê Tuấn Anh.pdf
                      </span>
                    </div>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-bold">
                      ≤ 5MB
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setShowCVModal(true)}
                      className="flex-1 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs border-0 cursor-pointer"
                    >
                      {lang === "vi" ? "Xem CV" : "Preview CV"}
                    </button>
                    <a
                      href={`${publicUrl}${CV_FILES.vi.path}`}
                      download={CV_FILES.vi.fileName}
                      className={`px-4 py-2.5 rounded-xl border font-mono text-xs font-bold no-underline ${themeCard}`}
                    >
                      {lang === "vi" ? "Tải CV Việt" : "Download Vietnamese CV"}
                    </a>
                    <a
                      href={`${publicUrl}${CV_FILES.en.path}`}
                      download={CV_FILES.en.fileName}
                      className={`px-4 py-2.5 rounded-xl border font-mono text-xs font-bold no-underline ${themeCard}`}
                    >
                      {lang === "vi" ? "Tải CV Anh" : "Download English CV"}
                    </a>
                  </div>
                </div>
              </div>

              {/* Cột phải: Form gửi thư mời phỏng vấn tới anhlt.ce191756@gmail.com */}
              <div className="lg:col-span-7">
                {mailSentBanner && (
                  <div className="mb-4 p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-xs flex items-start justify-between gap-2">
                    <div>
                      <strong className="text-emerald-400 block text-sm">
                        ✓ {lang === "vi" ? "Email đã được gửi tới" : "Email sent to"} {CANDIDATE_INFO.email}.
                      </strong>
                      <span>
                        {lang === "vi"
                          ? "Nội dung liên hệ của bạn đã được gửi trực tiếp. Tôi sẽ phản hồi qua email bạn cung cấp."
                          : "Your message was delivered directly. I will reply to the email address you provided."}
                      </span>
                    </div>
                    <button
                      onClick={() => setMailSentBanner(false)}
                      className="bg-transparent border-0 text-slate-400 cursor-pointer"
                    >
                      ✕
                    </button>
                  </div>
                )}
                {mailSendError && (
                  <div role="alert" className="mb-4 rounded-xl border border-rose-500/40 bg-rose-500/10 p-4 text-sm text-rose-400">
                    {mailSendError}
                  </div>
                )}

                <form onSubmit={handleSendContactForm} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold mb-1">
                        {lang === "vi" ? "Họ và tên Nhà tuyển dụng *" : "Recruiter's full name *"}
                      </label>
                      <input
                        type="text"
                        value={contactForm.name}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, name: e.target.value })
                        }
                        placeholder={lang === "vi" ? "VD: Nguyễn Văn A (HR / Tech Lead)" : "e.g. Alex Nguyen (HR / Tech Lead)"}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs outline-none ${themeElevated}`}
                      />
                      {formErrors.name && (
                        <span className="text-rose-400 text-[11px]">
                          {formErrors.name}
                        </span>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1">
                        {lang === "vi" ? "Công ty / Doanh nghiệp *" : "Company *"}
                      </label>
                      <input
                        type="text"
                        value={contactForm.company}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, company: e.target.value })
                        }
                        placeholder={lang === "vi" ? "VD: FPT Software, TMA Solutions..." : "e.g. FPT Software, TMA Solutions..."}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs outline-none ${themeElevated}`}
                      />
                      {formErrors.company && (
                        <span className="text-rose-400 text-[11px]">
                          {formErrors.company}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold mb-1">
                        {lang === "vi" ? "Địa chỉ Email liên hệ *" : "Contact email address *"}
                      </label>
                      <input
                        type="email"
                        value={contactForm.email}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, email: e.target.value })
                        }
                        placeholder={lang === "vi" ? "hr@congty.com" : "hr@company.com"}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs outline-none ${themeElevated}`}
                      />
                      {formErrors.email && (
                        <span className="text-rose-400 text-[11px]">
                          {formErrors.email}
                        </span>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1">
                        {lang === "vi" ? "Mục đích liên hệ" : "Reason for contacting"}
                      </label>
                      <select
                        value={contactForm.purpose}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, purpose: e.target.value })
                        }
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs outline-none ${themeElevated}`}
                      >
                        <option value="Mời phỏng vấn OJT">
                          🎯 {lang === "vi" ? "Mời phỏng vấn OJT" : "OJT interview invitation"}
                        </option>
                        <option value="Đề xuất dự án thử nghiệm">
                          🚀 {lang === "vi" ? "Đề xuất dự án thử nghiệm" : "Propose a trial project"}
                        </option>
                        <option value="Kết nối trao đổi kỹ thuật">
                          🤝 {lang === "vi" ? "Kết nối trao đổi kỹ thuật" : "Technical discussion"}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1">
                      {lang === "vi" ? "Tiêu đề thông điệp" : "Message subject"}
                    </label>
                    <input
                      type="text"
                      value={contactForm.subject === defaultSubjectVi
                        ? lang === "vi" ? defaultSubjectVi : defaultSubjectEn
                        : contactForm.subject}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, subject: e.target.value })
                      }
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs outline-none ${themeElevated}`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1">
                      {lang === "vi" ? "Nội dung chi tiết & Yêu cầu công việc *" : "Message and role details *"}
                    </label>
                    <textarea
                      rows="4"
                      value={contactForm.content}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, content: e.target.value })
                      }
                      placeholder={lang === "vi"
                        ? "Vui lòng chia sẻ thêm về vị trí thực tập OJT, thời gian phỏng vấn dự kiến..."
                        : "Please share details about the OJT role and proposed interview time..."}
                      className={`w-full p-3.5 rounded-xl border text-xs outline-none ${themeElevated}`}
                    />
                    {formErrors.content && (
                      <span className="text-rose-400 text-[11px]">
                        {formErrors.content}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={mailSending}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-400 text-slate-950 font-extrabold text-xs border-0 cursor-pointer shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{mailSending
                      ? lang === "vi" ? "Đang gửi email..." : "Sending email..."
                      : lang === "vi" ? "Gửi liên hệ trực tiếp" : "Send message directly"}</span>
                  </button>
                </form>
              </div>
            </div>
          </section>
        )}
    </>
  );
}

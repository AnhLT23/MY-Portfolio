import React from "react";
import { X } from "lucide-react";
import { SKILL_ITEMS, CERTIFICATIONS } from "../data/portfolioContent";

// PortfolioSkillsSection hiển thị riêng một khu vực của portfolio.
export function PortfolioSkillsSection(props) {
  const { activeTab, lang, setSelectedCertModal, themeCard, themeElevated, themeSubtext, themePrimaryText, themeEmeraldText } = props;
  return (
    <>
        {/* ====================================================================
            MÀN HÌNH 3: KỸ NĂNG & CHỨNG CHỈ QUỐC TẾ (SKILLS & CERTIFICATIONS)
           ==================================================================== */}
        {(activeTab === "skills" || activeTab === "home") && (
          <section className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <span className={`font-mono text-xs ${themePrimaryText}`}>
                  CAPABILITY_INDEX // TECHNICAL_AND_SOFT_SKILLS
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold mt-1">
                  {lang === "vi" ? "Kỹ năng chuyên môn & 4 chứng chỉ quốc tế Coursera" : "Technical Skills & 4 Coursera Specializations"}
                </h2>
              </div>
              <span className={`font-mono text-xs ${themeEmeraldText}`}>
                ✓ {lang === "vi" ? "Chứng chỉ đã xác thực" : "Verified Credentials"}
              </span>
            </div>

            {/* Kỹ năng kỹ thuật */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SKILL_ITEMS.map((sk, idx) => (
                <div key={idx} className={`p-4 rounded-xl border ${themeCard}`}>
                  <div className="flex justify-between font-mono text-xs mb-1.5">
                    <span className="font-bold">{lang === "vi" ? sk.name : sk.nameEn || sk.name}</span>
                    <span className={themePrimaryText}>{sk.level}%</span>
                  </div>
                  <div className={`w-full h-2 rounded-full overflow-hidden ${themeElevated}`}>
                    <div
                      className="h-full bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full"
                      style={{ width: `${sk.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* 4 Kỹ năng mềm */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: lang === "vi" ? "Thuyết trình trước đám đông" : "Public Speaking",
                  desc: lang === "vi" ? "Đào tạo giao tiếp & thuyết trình cho 40+ thành viên CLB The Talk; tự tin bảo vệ đồ án." : "Trained 40+ members of The Talk Club in communication and presentation; confident in presenting project work."
                },
                {
                  title: lang === "vi" ? "Làm việc nhóm (Teamwork)" : "Teamwork",
                  desc: lang === "vi" ? "Trưởng nhóm điều phối phân chia task, code review trên GitHub cho nhóm 4–5 thành viên." : "Led a 4–5 member team, assigning tasks and coordinating code reviews on GitHub."
                },
                {
                  title: lang === "vi" ? "Tư duy giải quyết vấn đề" : "Problem Solving",
                  desc: lang === "vi" ? "Phân tích logic, xử lý lỗi kỹ thuật (debugging) và ứng biến tại 30+ sự kiện lớn." : "Applied logical analysis and debugging, adapting to challenges at 30+ large-scale events."
                },
                {
                  title: lang === "vi" ? "Tiếng Anh giao tiếp" : "English Communication",
                  desc: lang === "vi" ? "Đọc hiểu tốt tài liệu kỹ thuật quốc tế và hoàn thành 4 Specialization trên Coursera." : "Comfortable reading international technical documentation; completed four Coursera specializations."
                }
              ].map((sf, i) => (
                <div key={i} className={`p-5 rounded-xl border ${themeCard}`}>
                  <h3 className="font-bold text-sm mb-1.5">{sf.title}</h3>
                  <p className={`text-xs leading-relaxed mb-0 ${themeSubtext}`}>
                    {sf.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* 4 Chứng chỉ quốc tế Coursera */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  className={`p-6 rounded-2xl border flex flex-col justify-between hover:-translate-y-1 transition-all ${themeCard}`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className={`font-mono text-xs font-bold ${themePrimaryText}`}>
                        {cert.field}
                      </span>
                      <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 font-bold">
                        {cert.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-1.5">{lang === "vi" ? cert.titleVi || cert.title : cert.title}</h3>
                    <p className={`text-xs leading-relaxed mb-3 ${themeSubtext}`}>
                      {lang === "vi" ? cert.desc : cert.descEn || cert.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-700/20 flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                    <span className={themeSubtext}>{cert.issuer}</span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedCertModal(cert)}
                        className="px-3 py-1 rounded-lg bg-sky-500/15 text-sky-400 hover:bg-sky-500 hover:text-slate-950 font-bold border-0 cursor-pointer transition-colors"
                      >
                        {lang === "vi" ? "Chi tiết" : "Details"}
                      </button>
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1 rounded-lg bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 font-bold no-underline transition-colors"
                      >
                        {lang === "vi" ? "Xem chứng chỉ ↗" : "View certificate ↗"}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

    </>
  );
}

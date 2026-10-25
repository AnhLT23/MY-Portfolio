import React from "react";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { ASSETS, CANDIDATE_INFO } from "../data/portfolioContent";
import { publicAssetPath } from "../utils/publicAssetPath";

// PortfolioAboutSection hiển thị riêng một khu vực của portfolio.
export function PortfolioAboutSection(props) {
  const { activeTab, lang, themeCard, themeElevated, themeSubtext, themePrimaryText } = props;
  const avatarSuit = publicAssetPath(ASSETS.avatarSuit);
  return (
    <>
        {/* ====================================================================
            MÀN HÌNH 2: THÔNG TIN CÁ NHÂN & BẢN THÂN (ABOUT ME)
           ==================================================================== */}
        {(activeTab === "about" || activeTab === "home") && (
          <section className={`rounded-2xl p-6 sm:p-8 border shadow-lg ${themeCard}`}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Cột trái: Ảnh chân dung mặc vest đen, áo sơ mi trắng lịch sự */}
              <div className="lg:col-span-4 flex flex-col items-center">
                <div className="relative w-64 h-80 rounded-2xl overflow-hidden bg-slate-950 group border-2 border-sky-500/40 shadow-xl">
                  <img
                    src={avatarSuit}
                    alt={lang === "vi" ? "Lê Tuấn Anh mặc vest đen, áo sơ mi trắng lịch sự" : "Le Tuan Anh wearing a black suit and white shirt"}
                    className="w-full h-full object-contain"
                    onError={(event) => {
                      if (event.currentTarget.getAttribute("src") === avatarSuit) {
                        event.currentTarget.src = publicAssetPath(ASSETS.avatarSuitFallback);
                      }
                    }}
                  />
                  <div className="absolute bottom-2 left-2 right-2 p-2.5 rounded-xl bg-slate-950/85 text-white flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold">{CANDIDATE_INFO.fullName}</div>
                      <div className="font-mono text-[11px] text-sky-400">
                        {lang === "vi" ? "MSSV" : "Student ID"}: {CANDIDATE_INFO.studentId}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cột phải: Học vấn ĐH FPT Cần Thơ & Mục tiêu Ngắn hạn / Dài hạn */}
              <div className="lg:col-span-8 space-y-5">
                <div>
                  <span className={`font-mono text-xs uppercase ${themePrimaryText}`}>
                    &lt;developer_profile // FPTU_CAN_THO&gt;
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold mt-1">
                    {CANDIDATE_INFO.fullName} — {lang === "vi" ? "Thực tập sinh Kỹ thuật phần mềm" : "Software Engineering Intern"}
                  </h2>
                  <p className={`text-sm sm:text-base mt-1 font-medium ${themeSubtext}`}>
                    {lang === "vi" ? "Học vấn:" : "Education:"}{" "}
                    <strong>
                      {lang === "vi" ? CANDIDATE_INFO.schoolVi : CANDIDATE_INFO.schoolEn}
                    </strong>{" "}
                    (2023 – 2027) • {lang === "vi" ? "Chuyên ngành:" : "Specialization:"}{" "}
                    <strong className={themePrimaryText}>
                      {lang === "vi" ? CANDIDATE_INFO.specializationVi : CANDIDATE_INFO.specializationEn}
                    </strong>
                  </p>
                </div>

                {/* Mục tiêu nghề nghiệp Ngắn hạn (OJT) vs Dài hạn (2-3 năm) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className={`p-5 rounded-xl border border-t-4 border-t-sky-400 ${themeElevated}`}>
                    <span className={`font-mono text-xs font-bold ${themePrimaryText}`}>
                      {lang === "vi" ? "GIAI ĐOẠN 01 • KỲ THỰC TẬP OJT" : "PHASE 01 • OJT INTERNSHIP"}
                    </span>
                    <h3 className="font-bold text-base mt-1 mb-2">
                      🚀 {lang === "vi" ? "Mục tiêu ngắn hạn (OJT Internship)" : "Short-term goal (OJT internship)"}
                    </h3>
                    <p className={`text-xs sm:text-sm leading-relaxed mb-0 ${themeSubtext}`}>
                      {lang === "vi" ? CANDIDATE_INFO.shortGoalVi : CANDIDATE_INFO.shortGoalEn}
                    </p>
                  </div>

                  <div className={`p-5 rounded-xl border border-t-4 border-t-indigo-400 ${themeElevated}`}>
                    <span className="font-mono text-xs font-bold text-indigo-400">
                      {lang === "vi" ? "GIAI ĐOẠN 02 • TẦM NHÌN 2–3 NĂM" : "PHASE 02 • 2–3 YEAR VISION"}
                    </span>
                    <h3 className="font-bold text-base mt-1 mb-2">
                      ♾️ {lang === "vi" ? "Mục tiêu dài hạn (Full-stack / .NET)" : "Long-term goal (Full-stack / .NET)"}
                    </h3>
                    <p className={`text-xs sm:text-sm leading-relaxed mb-0 ${themeSubtext}`}>
                      {lang === "vi" ? CANDIDATE_INFO.longGoalVi : CANDIDATE_INFO.longGoalEn}
                    </p>
                  </div>
                </div>

                {/* 4 Thẻ Liên hệ Trực tiếp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1 font-mono text-xs">
                  <a
                    href="tel:0389747825"
                    className={`p-3 rounded-xl border no-underline flex items-center gap-2.5 ${themeElevated}`}
                  >
                    <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                    <div>
                      <span className={`block text-[10px] ${themeSubtext}`}>{lang === "vi" ? "ĐIỆN THOẠI" : "PHONE"}</span>
                      <strong>{CANDIDATE_INFO.phone}</strong>
                    </div>
                  </a>
                  <a
                    href={`mailto:${CANDIDATE_INFO.email}`}
                    className={`p-3 rounded-xl border no-underline flex items-center gap-2.5 truncate ${themeElevated}`}
                  >
                    <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div className="truncate">
                      <span className={`block text-[10px] ${themeSubtext}`}>EMAIL</span>
                      <strong className="truncate">{CANDIDATE_INFO.email}</strong>
                    </div>
                  </a>
                  <a
                    href={CANDIDATE_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-3 rounded-xl border no-underline flex items-center gap-2.5 truncate ${themeElevated}`}
                  >
                    <Globe className="w-4 h-4 text-indigo-400 shrink-0" />
                    <div className="truncate">
                      <span className={`block text-[10px] ${themeSubtext}`}>LINKEDIN</span>
                      <strong>linkedin.com/in/le-anh</strong>
                    </div>
                  </a>
                  <div className={`p-3 rounded-xl border flex items-center gap-2.5 ${themeElevated}`}>
                    <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                    <div>
                      <span className={`block text-[10px] ${themeSubtext}`}>{lang === "vi" ? "ĐỊA CHỈ" : "LOCATION"}</span>
                      <strong>{lang === "vi" ? "An Bình, TP. Cần Thơ" : CANDIDATE_INFO.addressEn}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

    </>
  );
}

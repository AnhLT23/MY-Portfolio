import React from "react";
import { ASSETS, CANDIDATE_INFO, SEVEN_PILLARS } from "../data/portfolioContent";
import { publicAssetPath } from "../utils/publicAssetPath";

export function PortfolioHomeSection(props) {
  const { activeTab, lang, projects, themeCard, themeSubtext, themePrimaryText, themeEmeraldText } = props;
  return (
    <>
        {/* ====================================================================
            MÀN HÌNH 1: TRANG CHỦ
           ==================================================================== */}
        {activeTab === "home" && (
          <div className="space-y-10">
            {/* Hero banner sử dụng ảnh cá nhân đã cung cấp */}
            <div className={`overflow-hidden rounded-2xl border shadow-xl ${themeCard}`}>
              <div className="grid grid-cols-1 items-center gap-6 p-4 sm:p-6 md:grid-cols-[minmax(220px,300px)_1fr]">
                <div className="h-[26rem] overflow-hidden rounded-xl bg-slate-950">
                  <img
                    src={publicAssetPath(ASSETS.divineTree)}
                    alt={lang === "vi" ? "Chân dung toàn thân Lê Tuấn Anh" : "Full-length portrait of Le Tuan Anh"}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="space-y-2 py-2">
                  <span className="font-mono text-xs text-sky-300">
                    SYSTEM CORE // SEVEN_TREASURES_ACTIVE • {CANDIDATE_INFO.studentId}
                  </span>
                  <h1 className="mt-1 text-2xl font-extrabold sm:text-4xl">
                    {CANDIDATE_INFO.fullName.toUpperCase()} — SOFTWARE ENGINEERING INTERN
                  </h1>
                  <p className={`mt-1 max-w-3xl text-xs leading-relaxed sm:text-sm ${themeSubtext}`}>
                    {lang === "vi" ? CANDIDATE_INFO.comboBioVi : CANDIDATE_INFO.comboBioEn}
                  </p>
                </div>
              </div>
            </div>

            {/* Portfolio highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  label: lang === "vi" ? "DỰ ÁN PHẦN MỀM" : "SOFTWARE PROJECTS",
                  val: lang === "vi" ? `${projects.length}+ Dự án` : `${projects.length}+ Projects`,
                  sub: "FER202 • PRJ • SCD • PRF • SQL"
                },
                {
                  label: lang === "vi" ? "CHỨNG CHỈ QUỐC TẾ" : "INTERNATIONAL CERTIFICATIONS",
                  val: lang === "vi" ? "4 Chứng chỉ" : "4 Specializations",
                  sub: "HKUST, Amazon, Univ. of Michigan"
                },
                {
                  label: lang === "vi" ? "SỰ KIỆN & PHONG TRÀO" : "EVENTS & ACTIVITIES",
                  val: lang === "vi" ? "30+ Sự kiện" : "30+ Events",
                  sub: lang === "vi" ? "Phó Chủ nhiệm CLB The Talk & CTSV" : "The Talk Vice President & Student Affairs"
                }
              ].map((m, i) => (
                <div
                  key={i}
                  className={`p-5 rounded-2xl border hover:-translate-y-1 transition-transform ${themeCard}`}
                >
                  <span className={`font-mono text-[11px] block ${themeSubtext}`}>
                    {m.label}
                  </span>
                  <div className={`text-2xl sm:text-3xl font-extrabold my-1 ${themePrimaryText}`}>
                    {m.val}
                  </div>
                  <span className={`text-xs font-medium ${themeEmeraldText}`}>
                    ✓ {m.sub}
                  </span>
                </div>
              ))}
            </div>

            {/* Core skills and strengths */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">
                  {lang === "vi" ? "7 Năng lực & Thế mạnh nổi bật" : "7 Core Skills & Strengths"}
                </h2>
                <span className={`font-mono text-xs ${themePrimaryText}`}>
                  // PROFESSIONAL STRENGTHS
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {SEVEN_PILLARS.map((pillar, idx) => (
                  <div
                    key={idx}
                    className={`p-5 rounded-2xl border flex flex-col justify-between hover:-translate-y-1 transition-all ${
                      idx === 6 ? "lg:col-span-3" : ""
                    } ${themeCard}`}
                  >
                    <div>
                      <span className={`font-mono text-xs font-bold ${themePrimaryText}`}>
                        {lang === "vi"
                          ? `NĂNG LỰC ${String(idx + 1).padStart(2, "0")}`
                          : `STRENGTH ${String(idx + 1).padStart(2, "0")}`}
                      </span>
                      <h3 className="text-base font-bold mt-1 mb-2">{lang === "vi" ? pillar.title : pillar.titleEn || pillar.title}</h3>
                      <p className={`text-xs leading-relaxed ${themeSubtext}`}>
                        {lang === "vi" ? pillar.desc : pillar.descEn || pillar.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-700/20 flex justify-between font-mono text-xs">
                      <span className={themeEmeraldText}>{lang === "vi" ? "Thế mạnh nổi bật" : "Key strength"}</span>
                      <strong>{pillar.metric}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

    </>
  );
}

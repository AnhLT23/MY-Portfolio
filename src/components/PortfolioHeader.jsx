import React from "react";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { ASSETS, CANDIDATE_INFO } from "../data/portfolioContent";

const navTabs = [
    { id: "home", labelVi: "Trang chủ", labelEn: "Home" },
    { id: "about", labelVi: "Thông tin cá nhân", labelEn: "About Me" },
    { id: "skills", labelVi: "Kỹ năng & Chứng chỉ", labelEn: "Skills & Certs" },
    { id: "activities", labelVi: "Hoạt động CLB", labelEn: "Club & Lifestyle" },
    { id: "events", labelVi: "Phong trào & Sự kiện", labelEn: "Events & Activities" },
    { id: "projects", labelVi: "Dự án & Việc làm", labelEn: "Projects & Work" },
    { id: "stories", labelVi: "Bản tin hành trình", labelEn: "Portfolio Journal" },
    { id: "contact", labelVi: "Liên hệ OJT", labelEn: "Contact OJT" }
  ];

export function PortfolioHeader(props) {
  const { activeTab, setActiveTab, mobileMenuOpen, setMobileMenuOpen, isDark, setIsDark, lang, setLang, setShowCVModal, themeCard, themeElevated, themeSubtext, themePrimaryText } = props;
  return (
    <>
      {/* ================= STICKY HEADER NAVIGATION ================= */}
      <header className={`sticky top-0 z-40 border-b backdrop-blur-xl bg-opacity-90 ${themeCard}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-2">
          {/* Brand Logo */}
          <button
            onClick={() => {
              setActiveTab("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2.5 text-left group bg-transparent border-0 cursor-pointer focus:outline-none"
          >
            <img
              src={ASSETS.logo}
              alt="Logo Lê Tuấn Anh"
              className="w-9 h-9 rounded-lg object-contain group-hover:scale-110 transition-transform"
            />
            <div>
              <span className="font-bold text-sm sm:text-base block leading-none">
                {CANDIDATE_INFO.fullName}
              </span>
              <span className={`font-mono text-[11px] block mt-0.5 ${themePrimaryText}`}>
                {CANDIDATE_INFO.studentId} • {lang === "vi" ? "KTPM @ ĐH FPT Cần Thơ" : "SE @ FPTU Can Tho"}
              </span>
            </div>
          </button>

          {/* Language, theme, and CV controls */}
          <div className="flex items-center gap-2">
            {/* Bilingual Switch VI / EN */}
            <button
              onClick={() => setLang((current) => current === "vi" ? "en" : "vi")}
              className={`px-2.5 py-1.5 rounded-lg border font-mono text-xs font-bold cursor-pointer ${themeElevated}`}
              title={lang === "vi" ? "Chuyển sang English" : "Switch to Vietnamese"}
            >
              {lang === "vi" ? "VI" : "EN"}
            </button>

            {/* Smooth Animated Theme Toggle Switch (Dark / Light Mode) */}
            <button
              onClick={() => setIsDark((dark) => !dark)}
              className={`relative w-14 h-8 rounded-full p-1 flex items-center border cursor-pointer transition-colors ${themeElevated}`}
              aria-label={lang === "vi" ? "Đổi giao diện sáng/tối" : "Toggle light/dark theme"}
              title={
                isDark
                  ? lang === "vi" ? "Chuyển sang chế độ sáng" : "Switch to light mode"
                  : lang === "vi" ? "Chuyển sang chế độ tối" : "Switch to dark mode"
              }
            >
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center shadow-md transition-transform duration-300"
                style={{
                  transform: isDark ? "translateX(22px)" : "translateX(0px)",
                  backgroundColor: isDark ? "#38bdf8" : "#f59e0b",
                  color: "#0f172a"
                }}
              >
                {isDark ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
              </div>
            </button>

            {/* Open Bilingual CV Modal */}
            <button
              onClick={() => setShowCVModal(true)}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs border-0 cursor-pointer shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{lang === "vi" ? "CV 2 trang" : "2-page CV"}</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`xl:hidden p-1.5 rounded-lg border cursor-pointer ${themeElevated}`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Desktop navigation uses its own row to keep the header from overflowing. */}
        <nav className="hidden xl:flex max-w-7xl mx-auto px-4 sm:px-6 py-2 border-t border-slate-700/30 flex-wrap items-center justify-center gap-1">
          {navTabs.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setActiveTab(t.id);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer border-0 ${
                activeTab === t.id
                  ? "bg-sky-500 text-slate-950 font-bold shadow-sm"
                  : `${themeSubtext} hover:opacity-100 bg-transparent`
              }`}
            >
              {lang === "vi" ? t.labelVi : t.labelEn}
            </button>
          ))}
        </nav>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className={`xl:hidden px-4 py-3 border-t flex flex-wrap gap-1.5 ${themeCard}`}>
            {navTabs.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setActiveTab(t.id);
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border-0 cursor-pointer ${
                  activeTab === t.id
                    ? "bg-sky-500 text-slate-950 font-bold"
                    : `${themeElevated}`
                }`}
              >
                {lang === "vi" ? t.labelVi : t.labelEn}
              </button>
            ))}
          </div>
        )}
      </header>
    </>
  );
}

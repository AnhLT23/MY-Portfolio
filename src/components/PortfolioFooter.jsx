import React from "react";
import { CANDIDATE_INFO } from "../data/portfolioContent";

// PortfolioFooter hiển thị riêng một khu vực của portfolio.
export function PortfolioFooter(props) {
  const { themeCard, themeSubtext, themePrimaryText, lang } = props;
  return (
      <footer className={`border-t py-6 mt-auto ${themeCard}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs">
          <div className={themeSubtext}>
            © 2026 <strong className={themePrimaryText}>{CANDIDATE_INFO.fullName}</strong> (
            {CANDIDATE_INFO.studentId}) • {lang === "vi"
              ? "Thực tập sinh Kỹ thuật Phần mềm • Đại học FPT Cần Thơ"
              : "Software Engineering Intern • FPT University Can Tho"}
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={CANDIDATE_INFO.github}
              target="_blank"
              rel="noreferrer"
              className={`no-underline hover:underline ${themePrimaryText}`}
            >
              GitHub
            </a>
            <a
              href={CANDIDATE_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className={`no-underline hover:underline ${themePrimaryText}`}
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${CANDIDATE_INFO.email}`}
              className={`no-underline hover:underline ${themePrimaryText}`}
            >
              {CANDIDATE_INFO.email}
            </a>
            <a
              href="tel:0389747825"
              className={`no-underline hover:underline ${themePrimaryText}`}
            >
              {CANDIDATE_INFO.phone}
            </a>
          </div>
        </div>
      </footer>
  );
}

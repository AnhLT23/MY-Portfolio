import React from "react";
import { Download, X } from "lucide-react";
import { CANDIDATE_INFO, CV_FILES } from "../data/portfolioContent";

// PortfolioModals hiển thị riêng một khu vực của portfolio.
export function PortfolioModals(props) {
  const { selectedProjectModal, setSelectedProjectModal, selectedCertModal, setSelectedCertModal, showCVModal, setShowCVModal, lang, themeCard, themeElevated, themeSubtext, themePrimaryText, themeEmeraldText } = props;
  const publicUrl = process.env.PUBLIC_URL || "";
  return (
    <>
      {/* ================= MODAL 1: XEM CHI TIẾT DỰ ÁN & LƯỢC ĐỒ ERD ================= */}
      {selectedProjectModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
          onClick={() => setSelectedProjectModal(null)}
        >
          <div
            className={`rounded-2xl max-w-xl w-full p-6 border shadow-2xl space-y-4 ${themeCard}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className={`font-mono text-xs font-bold ${themePrimaryText}`}>
                {selectedProjectModal.code}
              </span>
              <button
                onClick={() => setSelectedProjectModal(null)}
                className="bg-transparent border-0 text-slate-400 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <h3 className="text-xl font-bold">{selectedProjectModal.title}</h3>
            <p className={`text-xs leading-relaxed ${themeSubtext}`}>
              {selectedProjectModal.reportDetails ||
                selectedProjectModal.erdDetails ||
                selectedProjectModal.description}
            </p>
            <div className={`p-4 rounded-xl border font-mono text-xs space-y-1 ${themeElevated}`}>
              <div className={themeEmeraldText}>
                // {lang === "vi" ? "Thông số Kiến trúc & Cơ sở dữ liệu:" : "Architecture & Database Details:"}
              </div>
              <div>• {lang === "vi" ? "Vai trò:" : "Role:"} {selectedProjectModal.roleBadge}</div>
              <div>• {lang === "vi" ? "Quy mô nhóm:" : "Team size:"} {selectedProjectModal.teamSize}</div>
              <div>• {lang === "vi" ? "Quy trình:" : "Workflow:"} {selectedProjectModal.workflow}</div>
              <div>• {lang === "vi" ? "Công nghệ:" : "Technologies:"} {selectedProjectModal.tags.join(", ")}</div>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setSelectedProjectModal(null)}
                className={`px-4 py-2 rounded-xl border text-xs font-semibold cursor-pointer ${themeElevated}`}
              >
                {lang === "vi" ? "Đóng" : "Close"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL 2: XÁC THỰC CHỨNG CHỈ COURSERA ================= */}
      {selectedCertModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
          onClick={() => setSelectedCertModal(null)}
        >
          <div
            className={`rounded-2xl max-w-md w-full p-6 border shadow-2xl space-y-4 ${themeCard}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className={`font-mono text-xs font-bold ${themeEmeraldText}`}>
                ✓ {lang === "vi" ? "CHỨNG CHỈ COURSERA ĐÃ XÁC THỰC" : "COURSERA VERIFIED CREDENTIAL"}
              </span>
              <button
                onClick={() => setSelectedCertModal(null)}
                className="bg-transparent border-0 text-slate-400 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <h3 className="text-lg font-bold">{selectedCertModal.title}</h3>
            <div className={`p-4 rounded-xl border font-mono text-xs space-y-1.5 ${themeElevated}`}>
              <div>
                <strong>{lang === "vi" ? "Ứng viên:" : "Candidate:"}</strong> {CANDIDATE_INFO.fullName} ({CANDIDATE_INFO.studentId})
              </div>
              <div>
                <strong>{lang === "vi" ? "Đơn vị cấp:" : "Issuer:"}</strong> {selectedCertModal.issuer}
              </div>
              <div>
                <strong>{lang === "vi" ? "Thời gian:" : "Date:"}</strong> {selectedCertModal.date}
              </div>
              <div>
                <strong>{lang === "vi" ? "Mã xác thực:" : "Credential ID:"}</strong>{" "}
                <a href={selectedCertModal.credentialUrl} target="_blank" rel="noreferrer" className={themePrimaryText}>
                  {selectedCertModal.credentialId}
                </a>
              </div>
            </div>
            <p className={`text-xs ${themeSubtext}`}>{lang === "vi" ? selectedCertModal.desc : selectedCertModal.descEn || selectedCertModal.desc}</p>
            <div className="flex justify-end">
              <button
                onClick={() => setSelectedCertModal(null)}
                className="px-4 py-2 rounded-xl bg-sky-500 text-slate-950 font-bold text-xs border-0 cursor-pointer"
              >
                {lang === "vi" ? "Hoàn tất" : "Done"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL 3: XEM TRƯỚC & TẢI CV SONG NGỮ 2 TRANG ================= */}
      {showCVModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
          onClick={() => setShowCVModal(false)}
        >
          <div
            className={`rounded-2xl max-w-2xl w-full p-6 border shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto ${themeCard}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-700/20 pb-3">
              <div>
                <h3 className="text-lg font-bold mb-0">
                  {lang === "vi" ? "Hồ sơ CV Song ngữ Chuẩn OJT (Trang 1: Việt • Trang 2: Anh)" : "OJT Bilingual Resume (Page 1: Vietnamese • Page 2: English)"}
                </h3>
                <span className={`font-mono text-xs ${themePrimaryText}`}>
                  {lang === "vi" ? "Tên file chuẩn:" : "Suggested filename:"} CE191756_Software_Engineering_Le_Tuan_Anh.pdf
                </span>
              </div>
              <button
                onClick={() => setShowCVModal(false)}
                className="bg-transparent border-0 text-slate-400 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className={`p-4 rounded-xl border text-xs space-y-2 ${themeElevated}`}>
              <div className="font-bold text-sm text-sky-400">
                {lang === "vi" ? "TRANG 1: BẢN TIẾNG VIỆT (Đã đưa Kinh nghiệm Phòng CTSV & CLB The Talk lên đầu)" : "PAGE 1: VIETNAMESE RESUME (Student Affairs and The Talk Club experience featured first)"}
              </div>
              <div>
                • <strong>{lang === "vi" ? "Họ và tên:" : "Full name:"}</strong> Lê Tuấn Anh — {lang === "vi" ? "Thực tập sinh Kỹ thuật phần mềm" : "Software Engineering Intern"}
              </div>
              <div>
                • <strong>{lang === "vi" ? "Kinh nghiệm & Hoạt động:" : "Experience & Activities:"}</strong> {lang === "vi" ? "CTV Tuyển sinh & Sự kiện ĐH FPT Cần Thơ (09/2023 – Nay, vận hành 30+ sự kiện 200–1.000+ người); Phó Chủ nhiệm CLB Kỹ năng mềm The Talk - FTT (đào tạo 40+ thành viên, Battle of Minds); CTV Kinh doanh Vinalink Group (20–30+ khách hàng/tuần)." : "Admissions & Events Volunteer at FPT University Can Tho (since 09/2023; operations for 30+ events with 200–1,000+ attendees); Vice President of The Talk Soft Skills Club - FTT (trained 40+ members; Battle of Minds); Vinalink Group Sales Volunteer (20–30+ customers/week)."}
              </div>
              <div>
                • <strong>{lang === "vi" ? "Dự án nổi bật:" : "Selected projects:"}</strong> {lang === "vi" ? "Dự án Web ReactJS (FER202), hệ thống kinh doanh (PRJ), game Sudoku (SCD), quản lý xe ô tô (PRF) và quản lý bãi đỗ xe khu dân cư (SQL)." : "ReactJS Web Project (FER202), Business System (PRJ), Sudoku Game (SCD), Car Management (PRF), and Residential Parking Management (SQL)."}
              </div>
            </div>

            <div className={`p-4 rounded-xl border text-xs space-y-2 ${themeElevated}`}>
              <div className="font-bold text-sm text-emerald-400">
                {lang === "vi" ? "TRANG 2: CV TIẾNG ANH (1 trang, tập trung vào thành tựu)" : "PAGE 2: ENGLISH RESUME (1 page, action-focused)"}
              </div>
              <div>
                • <strong>{lang === "vi" ? "Họ và tên:" : "Full Name:"}</strong> LE TUAN ANH — Software Engineer Intern
              </div>
              <div>
                • <strong>{lang === "vi" ? "Dự án:" : "Projects:"}</strong> ReactJS Web (FER202), Business System (PRJ), Sudoku Game (SCD), Car Management System (PRF), and Residential Parking Management System (SQL).
              </div>
              <div>
                • <strong>{lang === "vi" ? "Chứng chỉ:" : "Certifications:"}</strong> 4 Coursera Specializations (Software Engineering, UX Research & Design, GenAI in Software Development, Web Design for Everybody).
              </div>
            </div>

            <div className="flex flex-wrap justify-end gap-2 pt-2">
              <button
                onClick={() => setShowCVModal(false)}
                className={`px-4 py-2 rounded-xl border text-xs font-semibold cursor-pointer ${themeElevated}`}
              >
                {lang === "vi" ? "Đóng" : "Close"}
              </button>
              <a
                href={`${publicUrl}${CV_FILES.vi.path}`}
                download={CV_FILES.vi.fileName}
                className="px-5 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs no-underline flex items-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                <span>{lang === "vi" ? "Tải CV Tiếng Việt" : "Download Vietnamese CV"}</span>
              </a>
              <a
                href={`${publicUrl}${CV_FILES.en.path}`}
                download={CV_FILES.en.fileName}
                className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs no-underline flex items-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                <span>Download English CV</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </>
  );
}

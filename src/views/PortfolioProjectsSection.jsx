import React from "react";
import { publicAssetPath } from "../utils/publicAssetPath";
import {
  Car,
  Code2,
  Database,
  Grid3X3,
  Search,
  ShoppingBag
} from "lucide-react";
const PROJECT_ICONS = {
  code: Code2,
  business: ShoppingBag,
  sudoku: Grid3X3,
  cars: Car,
  parking: Database
};

// PortfolioProjectsSection hiển thị riêng một khu vực của portfolio.
export function PortfolioProjectsSection(props) {
  const { activeTab, lang, techFilter, setTechFilter, searchQuery, setSearchQuery, setSelectedProjectModal, filteredProjects, themeCard, themeElevated, themeSubtext, themePrimaryText, themeEmeraldText } = props;
  return (
    <>
        {/* ====================================================================
            MÀN HÌNH 6: DỰ ÁN TIÊU BIỂU & VIỆC LÀM (PROJECTS & WORK)
           ==================================================================== */}
        {(activeTab === "projects" || activeTab === "home") && (
          <section className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className={`font-mono text-xs ${themePrimaryText}`}>
                  SYS/PORTFOLIO // SOFTWARE_PROJECTS
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold mt-1">
                  {lang === "vi" ? "Dự án theo môn học" : "Course Projects"}
                </h2>
              </div>

              {/* Bộ lọc Công nghệ & Tìm kiếm */}
              <div className="flex flex-wrap items-center gap-2">
                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border ${themeElevated}`}>
                  <Search className="w-3.5 h-3.5 text-sky-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={lang === "vi" ? "Tìm tên dự án, công nghệ..." : "Search projects or technologies..."}
                    className="bg-transparent outline-none text-xs font-mono w-40"
                  />
                </div>
                {["all", "React", "PRJ", "SCD", "PRF", "SQL"].map((stack) => (
                  <button
                    key={stack}
                    onClick={() => setTechFilter(stack)}
                    className={`px-3 py-1.5 rounded-xl font-mono text-xs cursor-pointer border-0 transition-all ${
                      techFilter === stack
                        ? "bg-sky-500 text-slate-950 font-bold shadow-sm"
                        : themeElevated
                    }`}
                  >
                    {stack === "all" ? lang === "vi" ? "Tất cả" : "All" : stack}
                  </button>
                ))}
              </div>
            </div>

            {/* Lưới Thẻ Dự án */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {filteredProjects.map((proj) => (
                <article
                  key={proj.id}
                  className={`rounded-2xl overflow-hidden border flex flex-col justify-between group hover:-translate-y-1 transition-all shadow-lg ${themeCard}`}
                >
                  <div>
                    <div className={`px-4 py-2.5 border-b flex items-center justify-between font-mono text-xs ${themeElevated}`}>
                      <span className={`font-bold ${themePrimaryText}`}>{proj.code}</span>
                      <span className={themeEmeraldText}>{lang === "vi" ? proj.roleBadge : proj.roleBadgeEn || proj.roleBadge}</span>
                    </div>
                    <div className="relative h-48 overflow-hidden bg-slate-950">
                      {typeof proj.image === "string" &&
                      (proj.image.startsWith("/images/") || proj.image.startsWith("blob:")) ? (
                        <img
                          src={proj.image.startsWith("/images/") ? publicAssetPath(proj.image) : proj.image}
                          alt={lang === "vi" ? proj.title : proj.titleEn || proj.title}
                          className="h-full w-full bg-slate-950 object-contain p-2"
                        />
                      ) : (
                        <div
                          role="img"
                          aria-label={lang === "vi"
                            ? `Ảnh minh họa ${proj.title}`
                            : `Illustration for ${proj.titleEn || proj.title}`}
                          className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-900 to-slate-950 text-sky-300"
                        >
                          {(() => {
                            const ProjectIcon = PROJECT_ICONS[proj.projectIcon] || Code2;
                            return <ProjectIcon className="h-12 w-12" aria-hidden="true" />;
                          })()}
                          <span className="font-mono text-xs text-slate-300">
                            {proj.code}
                          </span>
                        </div>
                      )}
                      <span className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-slate-950/85 text-white font-mono text-[11px]">
                        {lang === "vi" ? proj.categoryBadge : proj.categoryBadgeEn || proj.categoryBadge}
                      </span>
                      <span className="absolute bottom-2 right-2 px-2.5 py-1 rounded bg-emerald-500/90 text-slate-950 font-mono text-[11px] font-bold">
                        {proj.gradeBadge}
                      </span>
                    </div>
                    <div className="p-5 space-y-3">
                      <h3 className="text-lg font-bold group-hover:text-sky-400 transition-colors">
                        {lang === "vi" ? proj.title : proj.titleEn || proj.title}
                      </h3>
                      <div className={`font-mono text-xs ${themeSubtext}`}>
                        👥 {lang === "vi" ? proj.teamSize : proj.teamSizeEn || proj.teamSize} • ⚙️ {lang === "vi" ? proj.workflow : proj.workflowEn || proj.workflow}
                      </div>
                      <p className={`text-xs leading-relaxed ${themeSubtext}`}>
                        {lang === "vi" ? proj.description : proj.descriptionEn || proj.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {(lang === "vi" ? proj.tags : proj.tagsEn || proj.tags).map((t, idx) => (
                          <span
                            key={idx}
                            className={`px-2.5 py-0.5 rounded font-mono text-[11px] border ${themeElevated}`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-3 border-t border-slate-700/20 grid grid-cols-2 gap-2 font-mono text-xs">
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`py-2 rounded-lg border text-center no-underline font-semibold ${themeElevated}`}
                    >
                      GitHub ↗
                    </a>
                    <button
                      onClick={() => setSelectedProjectModal(lang === "vi" ? proj : {
                        ...proj,
                        title: proj.titleEn || proj.title,
                        description: proj.descriptionEn || proj.description,
                        categoryBadge: proj.categoryBadgeEn || proj.categoryBadge,
                        roleBadge: proj.roleBadgeEn || proj.roleBadge,
                        teamSize: proj.teamSizeEn || proj.teamSize,
                        workflow: proj.workflowEn || proj.workflow,
                        tags: proj.tagsEn || proj.tags,
                        reportDetails: proj.reportDetailsEn || proj.reportDetails,
                        erdDetails: proj.erdDetailsEn || proj.erdDetails
                      })}
                      className="py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold border-0 cursor-pointer"
                    >
                      {lang === "vi" ? "Chi tiết / ERD" : "Details / ERD"}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

    </>
  );
}

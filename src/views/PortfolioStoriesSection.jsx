import React from "react";
import { PORTFOLIO_CHAPTERS, PORTFOLIO_JOURNEY } from "../data/portfolioNarrative";
import { PORTFOLIO_STORIES } from "../data/portfolioStories";
import { publicAssetPath } from "../utils/publicAssetPath";

// PortfolioStoriesSection trình bày các dấu mốc hồ sơ theo dạng bản tin ảnh.
export function PortfolioStoriesSection({ activeTab, lang, themeCard, themeSubtext, themePrimaryText }) {
  if (activeTab !== "stories") return null;

  return (
    <section className="space-y-8" aria-labelledby="portfolio-stories-title">
      <header className="space-y-2">
        <span className={`font-mono text-xs ${themePrimaryText}`}>
          {PORTFOLIO_JOURNEY.eyebrow}
        </span>
        <h1 id="portfolio-stories-title" className="text-2xl sm:text-3xl font-extrabold">
          {lang === "vi" ? PORTFOLIO_JOURNEY.title : PORTFOLIO_JOURNEY.titleEn}
        </h1>
        <h2 className="text-lg font-semibold">{lang === "vi" ? PORTFOLIO_JOURNEY.subtitle : PORTFOLIO_JOURNEY.subtitleEn}</h2>
        <p className={`max-w-3xl text-sm leading-relaxed ${themeSubtext}`}>
          {lang === "vi" ? PORTFOLIO_JOURNEY.introduction : PORTFOLIO_JOURNEY.introductionEn}
        </p>
      </header>

      <div className="space-y-6">
        {PORTFOLIO_STORIES.map((story) => (
          <article
            key={story.id}
            className={`overflow-hidden rounded-2xl border ${themeCard}`}
          >
            <div className="p-5 sm:p-6 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`font-mono text-xs font-bold ${themePrimaryText}`}>
                  {lang === "vi" ? story.number : story.numberEn}
                </span>
                <span className={`font-mono text-[11px] ${themeSubtext}`}>
                  // {lang === "vi" ? story.category : story.categoryEn}
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold">{lang === "vi" ? story.title : story.titleEn}</h2>
              <p className={`max-w-5xl text-sm leading-relaxed ${themeSubtext}`}>
                {lang === "vi" ? story.description : story.descriptionEn}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 px-3 pb-3 sm:grid-cols-3 sm:gap-3 sm:px-5 sm:pb-5 lg:grid-cols-5">
              {story.images.map((image) => (
                <figure key={image.src} className="overflow-hidden rounded-xl">
                  <img
                    src={publicAssetPath(image.src)}
                    alt={lang === "vi" ? image.alt : image.altEn || image.alt}
                    loading="lazy"
                    className={`h-32 w-full transition-transform duration-300 sm:h-40 ${
                      story.id === "profile"
                        ? "bg-slate-950 object-contain"
                        : "object-cover hover:scale-105"
                    }`}
                  />
                </figure>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="space-y-5">
        {PORTFOLIO_CHAPTERS.map((chapter) => (
          <article key={chapter.title} className={`rounded-2xl border p-5 sm:p-6 ${themeCard}`}>
            <h2 className="mb-3 text-lg font-bold">{lang === "vi" ? chapter.title : chapter.titleEn}</h2>
            {(lang === "vi" ? chapter.paragraphs : chapter.paragraphsEn).map((paragraph) => (
              <p key={paragraph} className={`max-w-5xl text-sm leading-relaxed ${themeSubtext}`}>
                {paragraph}
              </p>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}

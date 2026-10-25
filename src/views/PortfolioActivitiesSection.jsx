import React from "react";
import { Waves } from "lucide-react";
import { CAMPUS_EVENTS, CLUB_ACTIVITIES } from "../data/portfolioActivities";
import { ASSETS } from "../data/portfolioContent";
import { publicAssetPath } from "../utils/publicAssetPath";

function ActivityCards({ items, lang, themeCard, themeSubtext, themePrimaryText }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <article key={item.id} className={`overflow-hidden rounded-2xl border ${themeCard}`}>
          <div className="h-48 overflow-hidden">
            <img
              src={publicAssetPath(item.image)}
              alt={lang === "vi" ? item.imageAlt : item.imageAltEn || item.imageAlt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="space-y-2 p-5">
            <span className={`font-mono text-xs ${themePrimaryText}`}>{lang === "vi" ? item.period : item.periodEn || item.period}</span>
            <h3 className="text-base font-bold">{lang === "vi" ? item.title : item.titleEn || item.title}</h3>
            <p className={`text-sm leading-relaxed ${themeSubtext}`}>{lang === "vi" ? item.description : item.descriptionEn || item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

// Tách hoạt động câu lạc bộ khỏi phong trào, sự kiện và trải nghiệm thực tế.
export function PortfolioActivitiesSection(props) {
  const {
    activeTab,
    lang,
    themeCard,
    themeSubtext,
    themePrimaryText
  } = props;

  const showClubPage = activeTab === "activities" || activeTab === "home";
  const showEventsPage = activeTab === "events";

  if (!showClubPage && !showEventsPage) return null;

  const title = showEventsPage
    ? lang === "vi" ? "Hoạt động phong trào & trải nghiệm thực tế" : "Campus Events & Real-World Experiences"
    : lang === "vi" ? "Hoạt động câu lạc bộ & sở thích cá nhân" : "Clubs & Personal Interests";
  const subtitle = showEventsPage
    ? lang === "vi" ? "SỰ KIỆN // ĐỜI SỐNG SINH VIÊN // KINH NGHIỆM" : "CAMPUS EVENTS // STUDENT LIFE // WORK EXPERIENCE"
    : lang === "vi" ? "CÂU LẠC BỘ // LÃNH ĐẠO // SỞ THÍCH CÁ NHÂN" : "CLUBS // LEADERSHIP // PERSONAL INTERESTS";

  return (
    <section className="space-y-8" aria-labelledby="activities-title">
      <header>
        <span className={`font-mono text-xs ${themePrimaryText}`}>{subtitle}</span>
        <h1 id="activities-title" className="mt-1 text-2xl font-extrabold sm:text-3xl">
          {title}
        </h1>
      </header>

      {showClubPage ? (
        <>
          <ActivityCards
            items={CLUB_ACTIVITIES}
            lang={lang}
            themeCard={themeCard}
            themeSubtext={themeSubtext}
            themePrimaryText={themePrimaryText}
          />

          <div className="grid grid-cols-1 gap-5">
            <article className={`overflow-hidden rounded-2xl border ${themeCard}`}>
              <div className="relative h-48 sm:h-56">
                <img
                  src={publicAssetPath(ASSETS.swimmingPool)}
                  alt={lang === "vi" ? "Trải nghiệm biển và khám phá" : "Ocean exploration experience"}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-slate-950/80 px-3 py-1 font-mono text-xs text-white">
                  {lang === "vi" ? "Bơi lội • khám phá • tái tạo năng lượng" : "Swimming • exploration • recharging"}
                </span>
              </div>
              <div className="space-y-2 p-5">
                <div className="flex items-center gap-2 text-emerald-400">
                  <Waves className="h-5 w-5" />
                  <h2 className="font-bold">{lang === "vi" ? "Thể thao & khám phá" : "Sports & Exploration"}</h2>
                </div>
                <p className={`text-sm leading-relaxed ${themeSubtext}`}>
                  {lang === "vi"
                    ? "Bơi lội và những chuyến đi giúp tái tạo năng lượng, rèn luyện sự bền bỉ và giữ cân bằng với nhịp học tập, làm dự án và hoạt động câu lạc bộ."
                    : "Swimming and travel help recharge, build resilience, and balance study, project work, and club activities."}
                </p>
              </div>
            </article>
          </div>
        </>
      ) : (
        <ActivityCards
          items={CAMPUS_EVENTS}
          lang={lang}
          themeCard={themeCard}
          themeSubtext={themeSubtext}
          themePrimaryText={themePrimaryText}
        />
      )}
    </section>
  );
}

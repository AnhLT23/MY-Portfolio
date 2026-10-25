import React from "react";
import { PortfolioHomeSection } from "./views/PortfolioHomeSection";
import { PortfolioAboutSection } from "./views/PortfolioAboutSection";
import { PortfolioSkillsSection } from "./views/PortfolioSkillsSection";
import { PortfolioActivitiesSection } from "./views/PortfolioActivitiesSection";
import { PortfolioProjectsSection } from "./views/PortfolioProjectsSection";
import { PortfolioContactSection } from "./views/PortfolioContactSection";
import { PortfolioStoriesSection } from "./views/PortfolioStoriesSection";
import { PortfolioModals } from "./components/PortfolioModals";
import { PortfolioFooter } from "./components/PortfolioFooter";
import { PortfolioHeader } from "./components/PortfolioHeader";
import { usePortfolioController } from "./hooks/usePortfolioController";

export default function App() {
  const viewProps = usePortfolioController();
  const { themeCanvas } = viewProps;

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${themeCanvas}`}>
      <PortfolioHeader {...viewProps} />

      {/* ================= MAIN CONTENT AREA ================= */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8 space-y-12">
        <PortfolioHomeSection {...viewProps} />

        <PortfolioAboutSection {...viewProps} />

        <PortfolioSkillsSection {...viewProps} />

        <PortfolioActivitiesSection {...viewProps} />

        <PortfolioProjectsSection {...viewProps} />

        <PortfolioStoriesSection {...viewProps} />

        <PortfolioContactSection {...viewProps} />

      </main>

      <PortfolioModals {...viewProps} />

      {/* ================= FOOTER ================= */}
      <PortfolioFooter {...viewProps} />
    </div>
  );
}

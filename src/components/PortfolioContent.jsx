import DeveloperIllustration from "./DeveloperIllustration";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";

function PortfolioContent() {
  return (
    <>
      <section className="flex min-h-screen items-center justify-center">
        <DeveloperIllustration />
      </section>

      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
    </>
  );
}

export default PortfolioContent;
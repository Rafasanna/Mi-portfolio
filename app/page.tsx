import { ContactCTA } from "@/components/ContactCTA";
import { DifferenceSection } from "@/components/DifferenceSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { PositioningSection } from "@/components/PositioningSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SplashScreen } from "@/components/SplashScreen";
import { TechnicalProfileSection } from "@/components/TechnicalProfileSection";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <ScrollReveal />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <PositioningSection />
        <ProjectsSection />
        <TechnicalProfileSection />
        <ProcessSection />
        <DifferenceSection />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}

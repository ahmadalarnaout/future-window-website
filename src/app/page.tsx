import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  HeroSection,
  WhoWeAreSection,
  VisionMissionSection,
  CoreValuesSection,
  SolutionsSection,
  AdvantageSection,
  OrgStructureSection,
  StatsSection,
  PartnerCTASection,
  ContactSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhoWeAreSection />
        <VisionMissionSection />
        <CoreValuesSection />
        <SolutionsSection />
        <AdvantageSection />
        <OrgStructureSection />
        <StatsSection />
        <PartnerCTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

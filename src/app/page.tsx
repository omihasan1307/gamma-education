import BottomInvitationSection from "@/components/Home/BottomInvitationSection";
import CollaborateSection from "@/components/Home/CollaborateSection";
import HeroSection from "@/components/Home/HeroSection";
import SecondarySection from "@/components/Home/SecondarySection";
import TechnologySection from "@/components/Home/TechnologySection";
import ServicesSection from "@/components/Home/ServicesSection";

export default function Home() {
  return (
    <div className="bg-Section ">
      <HeroSection />
      <SecondarySection />
      <TechnologySection/>
      <CollaborateSection />
      <BottomInvitationSection />
      <ServicesSection />
    </div>
  );
}

import BottomInvitationSection from "@/components/Home/BottomInvitationSection";
import CollaborateSection from "@/components/Home/CollaborateSection";
import HeroSection from "@/components/Home/HeroSection";
import SecondarySection from "@/components/Home/SecondarySection";
import TechnologySection from "@/components/Home/TechnologySection";
import ServicesSection from "@/components/Home/ServicesSection";
import PortfolioSection from "@/components/Home/PortfolioSection";
import { getWebsite } from "@/actions/get/get.action";
import BlogSection from "@/components/Home/BlogSection";
import { Suspense } from "react";
import { BeatLoader } from "react-spinners";

export default async function Home() {
  const { data: websiteData } = await getWebsite();

  const { HomeSection1, HomeSection2, HomeSection3 } = websiteData?.generics?.home_page || {};
  const { services, projects, blogs } = websiteData || {};

  return (
    <div className="bg-Section overflow-hidden">
      <Suspense fallback={<BeatLoader color="#0291FA" loading={true} size={5} speedMultiplier={2} className="max-w-screen-2xl mx-auto" />}>
        <HeroSection HomeSection1={HomeSection1} />
        <SecondarySection HomeSection2={HomeSection2} />
        <TechnologySection HomeSection3={HomeSection3} />
        <CollaborateSection />
        <ServicesSection services={services} />
        <BottomInvitationSection />
        <PortfolioSection projects={projects} />
        <BlogSection blogs={blogs} />
      </Suspense>
    </div>
  );
}

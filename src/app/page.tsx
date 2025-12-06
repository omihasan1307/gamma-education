/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import BottomInvitationSection from "@/components/Home/BottomInvitationSection";
import HeroSection from "@/components/Home/HeroSection";
import ServicesSection from "@/components/Home/ServicesSection";
import TechnologySection from "@/components/Home/TechnologySection";
import { useWebsiteInfo } from "@/providers/websites.providers";
import LoadingComponent from "@/shared/components/LoadingComponent";
import TeamMemberPage from "./about/TeamMember";
import { Suspense } from "react";
import { BeatLoader } from "react-spinners";
import WhoWeAre from "@/components/Home/WhoWeAre";

export default function Home() {
  const { websiteInfo, loading } = useWebsiteInfo();

  const { services, featured_guidelines } = websiteInfo || {};

  const aboutPage = websiteInfo?.pages?.find((page: any) => page?.slug === "about");
  const homePage = websiteInfo?.pages?.find((page: any) => page?.slug === "home");
  // const { sections } = aboutPage || {};
  const { sections: homeSection } = homePage || {};
  const heroSection = homeSection?.find((page: any) => page?.name === "main_hero");
  // const featuresSection = homeSection?.find((page: any) => page?.name === "features_section");
  const learningPath = homeSection?.find((page: any) => page?.name === "Learning Path");
  const teamMemberItems = aboutPage?.sections?.find((page: any) => page?.section_type?.name === "Instructors");

  if (loading) return <LoadingComponent />;

  // console.log(websiteInfo, "websiteInfo");

  return (
    <div className="bg-Section overflow-hidden">
      <Suspense fallback={<BeatLoader color="#0291FA" loading={true} size={5} speedMultiplier={2} className="max-w-screen-2xl mx-auto" />}>
        <HeroSection HomeSection1={heroSection?.items} />
        <TechnologySection HomeSection3={featured_guidelines} />
        {/* <CollaborateSection HomeSection4={HomeSection4} /> */}
        <WhoWeAre learningPath={learningPath} />
        <BottomInvitationSection />
        <ServicesSection services={services} />
        {/* <SecondarySection HomeSection2={featuresSection?.items} /> */}
        {/* <PortfolioSection projects={projects} HomeSection6={HomeSection6} /> */}
        {/* <BlogSection blogs={blogs} HomeSection7={HomeSection7} /> */}
        <div className="max-w-screen-xl mx-auto pb-28 ">
          <TeamMemberPage items={teamMemberItems} />
        </div>
      </Suspense>
    </div>
  );
}

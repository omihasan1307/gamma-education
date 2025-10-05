/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Suspense } from "react";
import { BeatLoader } from "react-spinners";

import BottomInvitationSection from "@/components/Home/BottomInvitationSection";
import HeroSection from "@/components/Home/HeroSection";
import SecondarySection from "@/components/Home/SecondarySection";
import TechnologySection from "@/components/Home/TechnologySection";
import ServicesSection from "@/components/Home/ServicesSection";
import { useWebsiteInfo } from "@/providers/websites.providers";
import TeamMemberPage from "./about/TeamMember";
import LoadingComponent from "@/shared/components/LoadingComponent";

export default function Home() {
  const { websiteInfo, loading } = useWebsiteInfo();

  const { services, featured_guidelines } = websiteInfo || {};

  const aboutPage = websiteInfo?.pages?.find((page: any) => page?.slug === "about");
  const homePage = websiteInfo?.pages?.find((page: any) => page?.slug === "home");
  const { sections } = aboutPage || {};
  const { sections: homeSection } = homePage || {};
  const heroSection = homeSection?.find((page: any) => page?.name === "main_hero");
  const featuresSection = homeSection?.find((page: any) => page?.name === "features_section");



  if (loading) return <LoadingComponent />;

  return (
    <div className="bg-Section overflow-hidden">
      <Suspense fallback={<BeatLoader color="#0291FA" loading={true} size={5} speedMultiplier={2} className="max-w-screen-2xl mx-auto" />}>
        <HeroSection HomeSection1={heroSection?.items} />
        <TechnologySection HomeSection3={featured_guidelines} />
        {/* <CollaborateSection HomeSection4={HomeSection4} /> */}
        <BottomInvitationSection />
        <ServicesSection services={services} />
        <SecondarySection HomeSection2={featuresSection?.items} />
        {/* <PortfolioSection projects={projects} HomeSection6={HomeSection6} /> */}
        {/* <BlogSection blogs={blogs} HomeSection7={HomeSection7} /> */}
        <div className="max-w-screen-xl mx-auto pb-28 ">
          <TeamMemberPage items={sections} />
        </div>
      </Suspense>
    </div>
  );
}

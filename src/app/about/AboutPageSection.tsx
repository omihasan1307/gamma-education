/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import TeamMemberPage from "./TeamMember";
import { useWebsiteInfo } from "@/providers/websites.providers";
import LoadingComponent from "@/shared/components/LoadingComponent";
import AboutSection from "./About";

const AboutPageSection = () => {
  const { websiteInfo, loading } = useWebsiteInfo();

  const aboutPage = websiteInfo?.pages?.find((page: any) => page?.slug === "about");
  const aboutSectionData = aboutPage?.sections?.find((page: any) => page?.section_type?.name === "Hero");
  const teamMemberItems = aboutPage?.sections?.find((page: any) => page?.section_type?.name === "Instructors");

  if (loading) return <LoadingComponent />;

  return (
    <div className="max-w-screen-xl mx-auto py-28" data-aos="zoom-in">
      <AboutSection description={aboutSectionData?.description} />
      <div>
        <TeamMemberPage items={teamMemberItems} />
      </div>
    </div>
  );
};

export default AboutPageSection;

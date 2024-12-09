/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { IoIosPeople } from "react-icons/io";

import SectionHeader from "@/shared/components/SectionHeader";
import { useWebsiteInfo } from "@/providers/websites.providers";
import LoadingComponent from "@/shared/components/LoadingComponent";
import TeamMemberPage from "./TeamMember";
import AboutSection from "./About";

const AboutPageSection = () => {
  const { websiteInfo, loading }: any = useWebsiteInfo();

  if (loading) {
    return <LoadingComponent />;
  }

  const { AboutSection1, AboutSection2 } = websiteInfo?.generics?.about_page || {};
  const { title, subtitle, image, description } = AboutSection1 || {};
  const { items } = AboutSection2 || {};

  return (
    <div className="max-w-screen-xl mx-auto py-28 ">
      <AboutSection title={title} image={image} subtitle={subtitle} description={description} />

      <div className="flex items-center justify-center flex-col space-y-5 mt-28">
        <SectionHeader text="MEET OUR TEAM" icon={IoIosPeople} />
        <p className="text-5xl font-bold leading-tight">Team Member</p>
        <p className="text-gray-500">We are ready to build you a strong, innovative, and creative website for your business.</p>
      </div>
      <TeamMemberPage items={items} />
    </div>
  );
};

export default AboutPageSection;

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import TeamMemberPage from "./TeamMember";
import { useWebsiteInfo } from "@/providers/websites.providers";
import LoadingComponent from "@/shared/components/LoadingComponent";

const AboutPageSection = () => {
  const { websiteInfo, loading }: any = useWebsiteInfo();

  if (loading) {
    return <LoadingComponent />;
  }

  const { AboutSection1, AboutSection2 } = websiteInfo?.generics?.about_page || {};
  // const { title, subtitle, image, description } = AboutSection1 || {};
  const { description } = AboutSection1 || {};
  const { items } = AboutSection2 || {};

  return (
    <div className="max-w-screen-xl mx-auto py-28 ">
      {/* <AboutSection title={title} image={image} subtitle={subtitle} description={description} /> */}
      <div className="text-gray-400 " dangerouslySetInnerHTML={{ __html: description || "No Data" }}></div>
      <div>
       
        <TeamMemberPage items={items} />
      </div>
    </div>
  );
};

export default AboutPageSection;

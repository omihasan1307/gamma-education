/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import TeamMemberPage from "./TeamMember";
import { useWebsiteInfo } from "@/providers/websites.providers";
import LoadingComponent from "@/shared/components/LoadingComponent";
import { ENV_CONFIG } from "@/shared/constant/app.constant";
import { useMemo } from "react";

const AboutPageSection = () => {
  const { websiteInfo, loading } = useWebsiteInfo();

  const aboutPage = websiteInfo?.pages?.find((page: any) => page?.slug === "about");
  const { description , sections} = aboutPage || {};

  // ✅ Memoize and replace paths deterministically
  const fixedDescription = useMemo(() => {
    if (!description) return "No Data";
    return description.replace(/src="\/media/g, `src="${ENV_CONFIG.baseApi}/media`);
  }, [description]);

  if (loading) return <LoadingComponent />;

  return (
    <div className="max-w-screen-xl mx-auto py-28">
      <div className="mx-auto prose prose-lg" dangerouslySetInnerHTML={{ __html: fixedDescription }} />
      <div>
        <TeamMemberPage items={sections} />
      </div>
    </div>
  );
};

export default AboutPageSection;

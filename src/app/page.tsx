/* eslint-disable @typescript-eslint/no-explicit-any */
import { Suspense } from "react";
import { BeatLoader } from "react-spinners";

import BottomInvitationSection from "@/components/Home/BottomInvitationSection";
import CollaborateSection from "@/components/Home/CollaborateSection";
import HeroSection from "@/components/Home/HeroSection";
import SecondarySection from "@/components/Home/SecondarySection";
import TechnologySection from "@/components/Home/TechnologySection";
import ServicesSection from "@/components/Home/ServicesSection";

import { getWebsite } from "@/actions/get/get.action";

export default async function Home() {
  const { data: websiteData } = await getWebsite();
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const {HomeSection1, HomeSection2, HomeSection3, HomeSection4, HomeSection5 } = websiteData?.generics?.home_page || {};
  const { services } = websiteData || {};

  return (
    <div className="bg-Section overflow-hidden">
      <Suspense fallback={<BeatLoader color="#0291FA" loading={true} size={5} speedMultiplier={2} className="max-w-screen-2xl mx-auto" />}>

        <HeroSection HomeSection1={HomeSection1} />
        <TechnologySection HomeSection3={HomeSection3} />
        <CollaborateSection HomeSection4={HomeSection4} />
        <BottomInvitationSection />
        <ServicesSection services={services} HomeSection5={HomeSection5} />
        <SecondarySection HomeSection2={HomeSection2} />
        {/* <PortfolioSection projects={projects} HomeSection6={HomeSection6} /> */}
        {/* <BlogSection blogs={blogs} HomeSection7={HomeSection7} /> */}
        {/* <TeamMemberPage items="items" /> */}
      </Suspense>
    </div>
  );
}

import { Metadata } from "next";
import AboutSection from "./About";
import TeamMemberPage from "./TeamMember";
import SectionHeader from "@/shared/common/SectionHeader";
import { IoIosPeople } from "react-icons/io";

export const metadata: Metadata = {
  title: "About | Binary Hooks",
  description: "About | Binary Hooks",
};

const AboutPage = () => {
  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto py-28 ">
        <AboutSection />

        <div className="flex items-center justify-center flex-col space-y-5 mt-28">
          <SectionHeader text="MEET OUR TEAM" icon={IoIosPeople} />
          <p className="text-5xl font-bold leading-tight">Team Member</p>
          <p className="text-gray-500">We are ready to build you a strong, innovative, and creative website for your business.</p>
        </div>
        <TeamMemberPage />
      </div>
    </div>
  );
};

export default AboutPage;

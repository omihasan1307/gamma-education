import { Metadata } from "next";
import AboutSection from "./About";
import TeamMemberPage from "./TeamMember";
import SectionHeader from "@/shared/common/SectionHeader";
import { IoIosPeople } from "react-icons/io";
import { getWebsite } from "@/actions/get/get.action";
import { RiServiceFill } from "react-icons/ri";

export const metadata: Metadata = {
  title: "About | Binary Hooks",
  description: "About | Binary Hooks",
};

const AboutPage = async () => {
  const { data: websiteData } = await getWebsite();

  const { AboutSection1, AboutSection2 } = websiteData?.generics?.about_page || {};

  const { title, subtitle, image, description } = AboutSection1 || {};
  const { items } = AboutSection2 || {};

  return (
    <div>
      <div className="bg-gradient-custom-light dark:bg-gradient-custom-dark flex items-center text-center justify-center py-10 px-5 flex-col space-y-5">
        <SectionHeader text="Abot Us" icon={RiServiceFill} />
        <div className="text-5xl leading-tight">
          About <span className="font-bold hover:text-sk"> BinaryHooks </span>
        </div>
        <p className="text-gray-500">Get your dream come true by our excellent need</p>
      </div>
      <div className="max-w-screen-xl mx-auto py-28 ">
        <AboutSection title={title} image={image} subtitle={subtitle} description={description} />

        <div className="flex items-center justify-center flex-col space-y-5 mt-28">
          <SectionHeader text="MEET OUR TEAM" icon={IoIosPeople} />
          <p className="text-5xl font-bold leading-tight">Team Member</p>
          <p className="text-gray-500">We are ready to build you a strong, innovative, and creative website for your business.</p>
        </div>
        <TeamMemberPage items={items} />
      </div>
    </div>
  );
};

export default AboutPage;

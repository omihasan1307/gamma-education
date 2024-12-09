import { Metadata } from "next";
import { RiServiceFill } from "react-icons/ri";

import SectionHeader from "@/shared/components/SectionHeader";
import AboutPageSection from "./AboutPageSection";

export const metadata: Metadata = {
  title: "About | Binary Hooks",
  description: "About | Binary Hooks",
};

const AboutPage = () => {
  return (
    <div>
      <div className="bg-gradient-custom-light dark:bg-gradient-custom-dark flex items-center text-center justify-center py-10 px-5 flex-col space-y-5">
        <SectionHeader text="About Us" icon={RiServiceFill} />
        <div className="text-5xl leading-tight">
          About <span className="font-bold hover:text-sk">BinaryHooks</span>
        </div>
        <p className="text-gray-500">Empowering your ideas with innovative and tailored software solutions.</p>
      </div>

      <AboutPageSection />
    </div>
  );
};

export default AboutPage;

import { Metadata } from "next";
import { RiServiceFill } from "react-icons/ri";

import SectionHeader from "@/shared/components/SectionHeader";
import AboutPageSection from "./AboutPageSection";

export const metadata: Metadata = {
  title: "About | Gamma Education",
  description: "About | Gamma Education",
};

const AboutPage = () => {
  return (
    <div>
      <SectionHeader text="About Us" icon={RiServiceFill} description="Empowering your ideas with innovative and tailored software solutions." />
      <AboutPageSection />
    </div>
  );
};

export default AboutPage;

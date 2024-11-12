import SectionHeader from "@/shared/common/SectionHeader";
import { FaBoltLightning } from "react-icons/fa6";
import Link from "next/link";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const HeroSection = () => {
  return (
    <div className="bg-gradient-custom-light dark:bg-gradient-custom-dark">
      <div className="max-w-screen-xl mx-auto mb-10 py-28 px-1 text-center">
        <div className="flex items-center justify-center flex-col space-y-5">
          <SectionHeader text="Your Partner in SaaS Design Solutions" icon={FaBoltLightning} />
          <p className="text-5xl font-bold  leading-tight">
          Bringing Your Vision  <br /> to Life with Dedication
          </p>
          <p className="text-gray-500">Making your vision awesome since forever</p>
        </div>

        <Link
          href={"/inquiry"}
          className="md:w-auto m-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-gradient-custom shadow-xs opacity-85 hover:opacity-100 transition-all duration-500">
          Let&apos;s Collaborate
          <MdOutlineArrowForwardIos />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;

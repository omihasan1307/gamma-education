/* eslint-disable @typescript-eslint/no-explicit-any */
import SectionHeader from "@/shared/common/SectionHeader";
import { FaBoltLightning } from "react-icons/fa6";
import Link from "next/link";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Skeleton from "react-loading-skeleton";

const HeroSection = ({ HomeSection1 }: { HomeSection1: any }) => {
  const { subtitle, title, description } = HomeSection1 || {};

  return (
    <div className=" dark:bg-gradient-custom-dark">
      <div className="max-w-screen-xl mx-auto py-28 px-1 text-center">
        <div className="flex items-center justify-center flex-col space-y-5">
          <SectionHeader text={subtitle} icon={FaBoltLightning} />
          <p className="text-5xl font-bold  leading-tight  lg:w-[40%]">{title || <Skeleton />}</p>
          <div className="text-gray-500" dangerouslySetInnerHTML={{ __html: description }}></div>
        </div>

        <Link
          href={"/inquiry"}
          className="md:w-auto mt-6 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-gradient-custom shadow-xs opacity-85 hover:opacity-100 transition-all duration-500">
          Let&apos;s Collaborate
          <MdOutlineArrowForwardIos />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;

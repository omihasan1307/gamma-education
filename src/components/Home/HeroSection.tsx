import SectionHeader from "@/shared/common/SectionHeader";
import { FaBoltLightning } from "react-icons/fa6";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto mb-10 py-28 text-center">
        <div className="flex items-center justify-center flex-col space-y-5">
          <SectionHeader text="Your Partner in SaaS Design Solutions" icon={FaBoltLightning} />
          <p className="text-5xl font-bold  leading-tight">
            Designing Your <br /> Vision with Passion
          </p>
          <p className="text-gray-500">Making your vision awesome since forever</p>
        </div>

        <Link href={"/inquiry"}>
          <button className="px-6 py-1 rounded-full bg-gradient-custom text-white font-semibold mt-14">Let&apos;s Collaborate</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;

/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { img } from "@/shared/constant/imgExport";

const AboutSection = ({ title, image, subtitle, description }: any) => {
  return (
    <div className=" px-2 lg:grid grid-cols-2 items-center gap-8 ">
      <Image src={image || img?.noImage} alt={title} height={200} width={700} className="rounded-lg" data-aos="fade-right" />
      <div className=" lg:py-10 lg:px-5 space-y-5 w-full " data-aos="fade-left">
        <p className="tracking-widest font-bold text-baseColor uppercase ">{title}</p>
        <p className="text-2xl lg:text-4xl font-semibold ">{subtitle}</p>
        <div className="text-gray-400 " dangerouslySetInnerHTML={{ __html: description || "No Data" }}></div>
      </div>
    </div>
  );
};

export default AboutSection;

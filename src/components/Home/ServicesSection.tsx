/* eslint-disable @typescript-eslint/no-explicit-any */
import { RiServiceFill } from "react-icons/ri";

import SectionHeader from "@/shared/components/SectionHeader";
import Skeleton from "react-loading-skeleton";

const ServicesSection = ({ services, HomeSection5 }: any) => {
  const { subtitle, title, description } = HomeSection5 || {};

  return (
    <>
      <div className="max-w-screen-xl mx-auto text-center py-28  px-2 ">
        <div className="flex items-center justify-center flex-col space-y-5">
          <SectionHeader text={subtitle} icon={RiServiceFill} />
          <p className="text-5xl font-bold  leading-tight  lg:w-[60%]">{title || <Skeleton />}</p>
          <div className="text-gray-500 lg:w-[50%]" dangerouslySetInnerHTML={{ __html: description }}></div>
        </div>

        {/* Service cards */}
        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {/* card */}
          {services?.map((service: any) => (
            <div key={service.id} className=" duration-500 rounded-[18px] shadow-lg hover:scale-105 hover:shadow-2xl cursor-pointer">
              <div className="group h-full w-full px-5 py-10 bg-white dark:bg-black opacity-80 hover:opacity-100 duration-300 rounded-[16px]">
                <div className="flex justify-center">
                  <div
                    className="border text-6xl flex justify-center align-middle rounded-full bg-gradient-custom w-24 h-24 p-4 text-white group-hover:-rotate-12 duration-300"
                    dangerouslySetInnerHTML={{ __html: service?.icon }}></div>
                </div>
                <h2 className="text-2xl font-semibold pt-5 pb-2 ">{service.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesSection;

/* eslint-disable @typescript-eslint/no-explicit-any */
import SectionHeader from "@/shared/common/SectionHeader";

import { RiServiceFill } from "react-icons/ri";

const ServicesSection = ({ services }: any) => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto text-center py-28  px-2 ">
        <div className="flex items-center justify-center flex-col space-y-5">
          <SectionHeader text="Our Services" icon={RiServiceFill} />
          <div className="text-5xl leading-tight">
            Explore Our <span className="font-bold hover:text-sk"> Services</span>
          </div>
          <p className="text-gray-500">Get your dream come true by our excellent team members</p>
        </div>
        {/* Service cards */}
        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {/* card */}
          {services?.map((service: any) => (
            <div key={service.id} className=" duration-500 rounded-[18px] shadow-lg hover:scale-105 hover:shadow-2xl cursor-pointer">
              <div className="group h-full w-full px-5 py-10 bg-white dark:bg-black opacity-80 hover:opacity-100 duration-300 rounded-[16px]">
                <div className="flex justify-center">
                  <span dangerouslySetInnerHTML={{ __html: service?.icon }}></span>
                  {/* <div className="group-hover:-rotate-12 duration-300 text-6xl flex justify-center align-middle rounded-full bg-gradient-custom w-24 h-24 p-4 text-white">
                    {service.icon}
                  </div> */}
                </div>
                <h2 className="text-2xl font-semibold pt-5 pb-2">{service.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesSection;

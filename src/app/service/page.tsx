/* eslint-disable @typescript-eslint/no-explicit-any */
import { getServiceList } from "@/actions/get/get.action";
import SectionHeader from "@/shared/common/SectionHeader";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { RiServiceFill } from "react-icons/ri";

export const metadata: Metadata = {
  title: "Services | Binary Hooks",
  description: "Services | Binary Hooks",
};

const ServicesPage = async () => {
  const { data: serviceList } = await getServiceList();

  return (
    <div className="">
      {/* Header */}
      <div className="bg-gradient-custom-light dark:bg-gradient-custom-dark flex items-center text-center justify-center py-10 px-5 flex-col space-y-5">
        <SectionHeader text="Our Services" icon={RiServiceFill} />
        <div className="text-5xl leading-tight">
          Explore <span className="font-bold hover:text-sk"> BinaryHooks Services</span>
        </div>
        <p className="text-gray-500">Get your dream come true by our excellent team members</p>
      </div>
      {/* Section */}
      <div className="max-w-screen-xl mx-auto mt-20 pb-20 grid gap-10 md:grid-cols-3 text-center px-2">
        {serviceList?.map((service: any) => (
          <div key={service.id} className="group duration-500 rounded-[18px] shadow-lg hover:scale-105 hover:shadow-2xl cursor-pointer">
            <div className="h-full w-full px-5 py-10 bg-white dark:bg-black rounded-[16px] group-hover:shadow-lg opacity-80 group-hover:opacity-100 duration-300">
              <div className="flex justify-center">
                <div className="text-6xl flex justify-center align-middle rounded-full bg-gradient-custom w-24 h-24 p-4 text-white group-hover:-rotate-12 duration-300">
                  {service.icon}
                </div>
              </div>
              <h2 className="text-2xl font-semibold pt-5 pb-2">{service.title}</h2>

              <Link href={`/service/${service?.id}`} className="text-basicColor flex justify-center font-semibold p-2 me-2 hover:text- duration-300">
                Read more about this <MdArrowOutward />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;

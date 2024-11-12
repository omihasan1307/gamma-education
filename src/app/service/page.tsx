import SectionHeader from "@/shared/common/SectionHeader";
import Link from "next/link";
import React from "react";
import { CgWebsite } from "react-icons/cg";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdArrowOutward, MdDesignServices, MdOutlineRocketLaunch } from "react-icons/md";
import { RiLayout3Line, RiServiceFill } from "react-icons/ri";
import { TbDeviceDesktopCode } from "react-icons/tb";

const page = () => {
  const services = [
    {
      id: 1,
      icon: <TbDeviceDesktopCode />,
      title: "Web Development",
      description: "We are committed to providing outstanding website development services.",
    },
    {
      id: 2,
      icon: <MdOutlineRocketLaunch />,
      title: "Website Optimization",
      description: "Elevate Your Website's Performance with BinaryHooks. Improve Speed and Ensure Comprehensive Website Optimization.",
    },
    {
      id: 3,
      icon: <LuLayoutDashboard />,
      title: "Website Customization",
      description: "Experience uniqueness with BinaryHooks's website customization solutions.",
    },
    {
      id: 4,
      icon: <MdDesignServices />,
      title: "Web Design",
      description: "Revitalize your online presence with our affordable white label web design solutions.",
    },
    {
      id: 5,
      icon: <RiLayout3Line />,
      title: "e-Commerce Solutions",
      description: "BinaryHooks skillfully combines traditional methods with innovative approaches, providing exceptional e-Commerce solutions.",
    },
    {
      id: 6,
      icon: <CgWebsite />,
      title: "Website Care",
      description: "We Offer More Than Website Development - We Prioritize Security and Excellence in Our Website Care.",
    },
  ];
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
        {services.map((service) => (
          <div key={service.id} className="group duration-500 rounded-[18px] shadow-lg hover:scale-105 hover:shadow-2xl cursor-pointer">
            <div className="h-full w-full px-5 py-10 bg-white dark:bg-black rounded-[16px] group-hover:shadow-lg opacity-80 group-hover:opacity-100 duration-300">
              <div className="flex justify-center">
                <div className="text-6xl flex justify-center align-middle rounded-full bg-gradient-custom w-24 h-24 p-4 text-white group-hover:-rotate-12 duration-300">
                  {service.icon}
                </div>
              </div>
              <h2 className="text-2xl font-semibold pt-5 pb-2">{service.title}</h2>
              {/* <p className="">{service.description.length > 123 ? service.description.slice(0, 123) + "..." : service.description}</p> */}

              <Link href={`/service/${service.id}`} className="text-basicColor flex justify-center font-semibold p-2 me-2 hover:text- duration-300">
                Read more about this <MdArrowOutward />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;

{
  /* <>
  <div className="bg-white text-gray-900 mx-5">
    <div className="container grid grid-cols-12 mx-auto bg-gray-50">
      <div className="bg-no-repeat bg-cover bg-gray-700 col-span-full lg:col-span-4"></div>
      <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10 shadow-lg rounded-lg">
        <div className="flex justify-start">
          <span className="my-2 px-4 py-1 text-xs rounded-full bg-gradient-custom text-gray-50">Label</span>
        </div>
        <h1 className="text-3xl font-semibold">{service.title}</h1>
        <p className="flex-1 pt-2">{service.description}</p>
        <a rel="noopener noreferrer" href="#" className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm text-violet-600">
          <span>Read more</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"></path>
          </svg>
        </a>
        <div className="flex items-center justify-between pt-2">
          <div className="flex space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-600">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"></path>
            </svg>
            <span className="self-center text-sm">by Leroy Jenkins</span>
          </div>
          <span className="text-xs">3 min read</span>
        </div>
      </div>
    </div>
  </div>
</>; */
}

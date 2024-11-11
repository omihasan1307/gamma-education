import SectionHeader from "@/shared/common/SectionHeader";
import { CgWebsite } from "react-icons/cg";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdDesignServices, MdOutlineRocketLaunch } from "react-icons/md";
import { RiLayout3Line, RiServiceFill } from "react-icons/ri";
import { TbDeviceDesktopCode } from "react-icons/tb";

const ServicesSection = () => {
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
    <>
      <div className="max-w-screen-xl mx-auto text-center py-28  px-2">
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
          {services?.map((service) => (
            <div key={service.id} className=" duration-500 rounded-[18px] shadow-lg hover:scale-105 hover:shadow-2xl cursor-pointer">
              <div className="group h-full w-full px-5 py-10 bg-white dark:bg-black opacity-80 hover:opacity-100 duration-300 rounded-[16px]">
                <div className="flex justify-center">
                  <div className="group-hover:-rotate-12 duration-300 text-6xl flex justify-center align-middle rounded-full bg-gradient-custom w-24 h-24 p-4 text-white">
                    {service.icon}
                  </div>
                </div>
                <h2 className="text-2xl font-semibold pt-5 pb-2">{service.title}</h2>
                <p className="">{service.description.length > 123 ? service.description.slice(0, 123) + "..." : service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesSection;

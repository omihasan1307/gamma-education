import Image from "next/image";
import Link from "next/link";
import { RiServiceFill } from "react-icons/ri";

import { img } from "@/shared/constant/imgExport";
import SectionHeader from "@/shared/common/SectionHeader";

const page = () => {
  const projects = [
    {
      id: 1,
      thumbnail: img.p1,
      title: "Burgry",
      description:
        "Indulge in a delightful online food shopping experience! Explore a wide range of delectable food items across various categories, seamlessly adding favorites to your cart. Our user-friendly interface and secure SSLCommerz payment system ensure a smooth checkout process. Savor the convenience of ordering your cravings at your fingertips",
      technology: [
        { name: "React", icon: "react" },
        { name: "Node.js", icon: "nodejs" },
        { name: "MongoDB", icon: "mongodb" },
      ],
    },
    {
      id: 2,
      thumbnail: img.p2,
      title: "RedLight Wedding",
      description: "Elevate Your Website's Performance with BinaryHooks. Improve Speed and Ensure Comprehensive Website Optimization.",
      technology: [
        { name: "React", icon: "react" },
        { name: "Node.js", icon: "nodejs" },
        { name: "MongoDB", icon: "mongodb" },
      ],
    },
    {
      id: 3,
      thumbnail: img.p3,
      title: "Celmmerce",
      description: "This is a multi-vendor e-commerce project using the MERN stack method with a user-friendly high-quality design..",
    },
  ];

  return (
    <div className="">
      {/* Header */}
      <div className="bg-gradient-custom-light flex items-center justify-center mb-10 py-10 px-5 flex-col space-y-5">
        <SectionHeader text="Our Portfolio" icon={RiServiceFill} />
        <div className="text-5xl text-gray-800 leading-tight">
          Explore Our<span className="font-bold hover:text-sk"> Portfolios</span>
        </div>
        <p className="text-gray-500">Get your dream come true by our excellent team members</p>
      </div>
      <div className="max-w-screen-xl  mx-auto py-28 px-2 bg-white dark:bg-gray-800 h-full sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 xl:gap-8">
            {projects.map((project) => (
              <Link
                href={`/portfolio/${project.id}`}
                key={project.id}
                className="group my-5 relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <Image
                  src={project.thumbnail}
                  alt={""}
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">{project.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

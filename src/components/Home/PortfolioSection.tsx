import SectionHeader from "@/shared/common/SectionHeader";
import { img } from "@/shared/constant/imgExport";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiServiceFill } from "react-icons/ri";

const PortfolioSection = () => {
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
    <div className="max-w-screen-xl mx-auto py-28  px-2">
      <div className="flex items-center justify-center flex-col text-center space-y-5">
        <SectionHeader text="Checkout Out Portfolio" icon={RiServiceFill} />
        <div className="text-5xl leading-tight">
          Explore Our <span className="font-bold hover:text-sk"> Projects</span>
        </div>
        <p className="text-gray-500">Get your dream come true by our excellent team members</p>
      </div>
      <div className="mt-20 grid gap-10 md:grid-cols-3">
        {projects.map((project) => (
          <section key={project.id} className="w-full ">
            <div className="rounded-xl bg-white dark:bg-black opacity-80 hover:opacity-100 p-3 shadow-lg duration-300 hover:scale-105 hover:transform hover:shadow-xl">
              <Link href={"/portfolio"} aria-label="link to project">
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  <Image src={project.thumbnail} alt="{alt}" width={400} height={400} loading="eager" />
                </div>
                <div className="mt-1 p-2">
                  <h3 className="text-xl font-semibold px-2 my-2 lg:text-2xl">{project.title}</h3>
                  <p className="text-s px-2">{project.description.slice(0, 100) + "..."}</p>
                  {/* <Tags tags={tags} /> */}
                </div>
              </Link>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;

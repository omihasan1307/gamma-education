/* eslint-disable @typescript-eslint/no-explicit-any */
import { img } from "@/shared/constant/imgExport";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Skeleton from "react-loading-skeleton";

const PortfolioSection = ({ projects, HomeSection6 }: any) => {
  const {  title, description } = HomeSection6 || {};

  return (
    <div className="max-w-screen-xl mx-auto  px-2 ">
      <div className="flex items-center justify-center flex-col space-y-5">
        <p className="text-5xl font-bold  leading-tight ">{title || <Skeleton />}</p>
        <div className="text-gray-500 lg:w-[50%] text-center" dangerouslySetInnerHTML={{ __html: description }}></div>
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-3">
        {projects?.map((project: any) => (
          <section key={project.id} className="w-full ">
            <div className="rounded-xl bg-white dark:bg-black opacity-80 hover:opacity-100 p-3 shadow-lg duration-300 hover:scale-105 hover:transform hover:shadow-xl">
              <Link href={`/portfolio/${project.id}`} aria-label="link to project">
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  <Image src={project?.featured_image || img?.noImage} alt="{alt}" width={400} height={400} loading="eager" />
                </div>
                <div className="mt-1 p-2">
                  <h3 className="text-xl font-semibold px-2 my-2 lg:text-2xl">{project.title}</h3>
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

/* eslint-disable @typescript-eslint/no-explicit-any */
import SectionHeader from "@/shared/components/SectionHeader";
import { img } from "@/shared/constant/imgExport";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiServiceFill } from "react-icons/ri";
import Skeleton from "react-loading-skeleton";

const BlogSection = async ({ blogs, HomeSection7 }: { blogs: any; HomeSection7: any }) => {
  const { subtitle, title, description } = HomeSection7 || {};

  return (
    <div className="max-w-screen-xl mx-auto py-28 px-2 ">
      <div className="flex items-center justify-center flex-col space-y-5">
        <SectionHeader text={subtitle} icon={RiServiceFill} />
        <p className="text-5xl font-bold  leading-tight">{title || <Skeleton />}</p>
        <div className="text-gray-500 lg:w-[50%] text-center" dangerouslySetInnerHTML={{ __html: description }}></div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3 ">
        {blogs?.map((project: any) => (
          <section key={project?.id} className="w-full h-full">
            <div className="rounded-xl bg-white dark:bg-black opacity-80 hover:opacity-100 p-3 shadow-lg duration-300 hover:scale-105 hover:transform hover:shadow-xl">
              <Link href={`/blog/${project?.id}`} aria-label="link to project">
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  <Image src={project?.featured_image || img.noImage} alt="{alt}" width={400} height={400} loading="eager" />
                </div>
                <div className="space-y-3 py-4 px-2">
                  <h3 className="text-xl font-semibold lg:text-2xl">
                    {project.title?.length > 50 ? project.title?.slice(0, 50) + "..." : project.title}
                  </h3>

                  <p>{project?.subtitle?.length > 100 ? project.subtitle.slice(0, 100) + "..." : project?.subtitle}</p>
                </div>
              </Link>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;

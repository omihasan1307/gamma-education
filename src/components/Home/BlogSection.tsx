/* eslint-disable @typescript-eslint/no-explicit-any */
import { img } from "@/shared/constant/imgExport";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Skeleton from "react-loading-skeleton";

const BlogSection = async ({ blogs, HomeSection7 }: { blogs: any; HomeSection7: any }) => {
  const {title, description } = HomeSection7 || {};

  return (
    <div className="max-w-screen-xl mx-auto py-28 px-2 ">
      <div className="flex items-center justify-center flex-col space-y-5">
       
        <p className="text-5xl font-bold  leading-tight">{title || <Skeleton />}</p>
        <div className="text-gray-500 lg:w-[50%] text-center" dangerouslySetInnerHTML={{ __html: description }}></div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3 ">
        {blogs?.map((project: any) => (
          <section key={project?.id} className="w-full h-full">
            <div className="rounded-xl h-full bg-white dark:bg-black opacity-80 hover:opacity-100 p-3 shadow-lg duration-300 hover:scale-105 hover:transform hover:shadow-xl">
              <Link href={`/blog/${project?.id}`} aria-label="link to project">
                <div className="relative flex items-end overflow-hidden rounded-xl ">
                  <Image src={project?.featured_image || img?.noImage} alt="{alt}" width={400} height={400} loading="eager" className="h-full" />
                </div>
                <div className="space-y-3 py-4 px-2">
                  <h3 className="text-xl font-semibold lg:text-2xl text-ellipsis overflow-hidden ">{project.title}</h3>
                  <p className="text-ellipsis overflow-hidden ">{project?.subtitle}</p>
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

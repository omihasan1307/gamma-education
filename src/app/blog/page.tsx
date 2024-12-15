/* eslint-disable @typescript-eslint/no-explicit-any */
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { RiServiceFill } from "react-icons/ri";

import { getBlogList } from "@/actions/get/get.action";
import SectionHeader from "@/shared/components/SectionHeader";
import { img } from "@/shared/constant/imgExport";

export const metadata: Metadata = {
  title: "Blog | Binary Hooks",
  description: "Blog | Binary Hooks",
};

const BlogSection = async () => {
  const { data: blogData } = await getBlogList();

  const [firstBlog, ...remainingBlogs] = blogData;
  return (
    <div className="bg-grayColor ">
      <div className="bg-gradient-custom-light dark:bg-gradient-custom-dark flex items-center text-center justify-center py-10 px-5 flex-col space-y-5">
        <SectionHeader text="Our Blog" icon={RiServiceFill} />
        <div className="text-5xl leading-tight">
          Explore <span className="font-bold hover:text-sk"> BinaryHooks Blog</span>
        </div>
        <p className="text-gray-500">Get your dream come true by our excellent Blog</p>
      </div>
      <div className="max-w-screen-xl py-16 mx-auto ">
        <div className="lg:grid grid-cols-3 gap-10">
          {/* Featured Blog */}
          <div className="col-span-3">
            <div className="space-y-5">
              <Link href={`/blog/${firstBlog?.id}`} legacyBehavior>
                <a>
                  <Image
                    src={firstBlog?.featured_image || img?.noImage}
                    alt={firstBlog?.title}
                    height={450}
                    width={800}
                    className="w-full max-h-[450px] object-cover mx-auto"
                  />
                  <div className="bg-slate-100 px-5 py-5 space-y-2">
                    <div className="flex items-center gap-2 text-basicColor">
                      <p>{firstBlog?.category?.name}</p>
                    </div>
                    <h3 className="text-2xl font-semibold">{firstBlog?.title}</h3>
                    <p className="text-gray-500">{firstBlog?.subtitle}</p>
                  </div>
                </a>
              </Link>

              {/* Remaining Blogs */}
              <div className="grid gap-5 md:grid-cols-3">
                {remainingBlogs?.map((blog: any) => (
                  <section key={blog.id} className="w-full">
                    <div className="h-full dark:bg-black opacity-80 hover:opacity-100 shadow-lg duration-300 hover:scale-105 hover:transform hover:shadow-xl">
                      <Link href={`/blog/${blog.id}`} aria-label={`Link to blog ${blog.title}`} legacyBehavior>
                        <div>
                          <div>
                            <Image
                              src={blog.featured_image || img.noImage}
                              alt={blog.title}
                              width={400}
                              height={300}
                              loading="eager"
                              className="mx-auto"
                            />
                          </div>
                          <div className="space-y-2 py-5 px-5 bg-slate-100">
                            <div className="flex items-center gap-2 text-basicColor">
                              <p>{blog.category.name}</p>
                            </div>
                            <h3 className="text-xl font-semibold lg:text-2xl text-ellipsis overflow-hidden">{blog.title}</h3>
                            <p className="text-gray-500 text-ellipsis overflow-hidden">{blog.subtitle}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;

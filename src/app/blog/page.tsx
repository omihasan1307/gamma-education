/* eslint-disable @typescript-eslint/no-explicit-any */
export const dynamic = "force-dynamic";
import { getBlogList } from "@/actions/get/get.action";
import BlogSearch from "@/components/BlogSearch";
import SectionHeader from "@/shared/components/SectionHeader";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

// metadata
export const metadata: Metadata = {
  title: "Blog | Gamma Education",
  description: "Blog | Gamma Education",
};

const BlogPage = async ({ searchParams }: any) => {
  const search = searchParams?.q || "";
  const { data: blogList } = await getBlogList(search);

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="flex flex-col items-center text-center space-y-5">
        <SectionHeader text="Our Blogs" description="Explore resources, insights & professional guidance to grow with confidence." />
      </div>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto mt-10 px-4">
        <BlogSearch />
      </div>

      {/* Blog Grid */}
      <div className="max-w-screen-xl mx-auto mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4">
        {blogList?.length > 0 ? (
          blogList?.map((blog: any) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col overflow-hidden group">
              {/* Image */}
              <Link href={`/blog/${blog.id}`} className="block relative w-full h-52 overflow-hidden">
                <Image
                  src={blog?.featured_image}
                  alt={blog?.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </Link>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-basicColor transition">{blog.title}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{blog.subtitle}</p>
                </div>

                {/* Button */}
                <Link
                  href={`/blog/${blog.id}`}
                  className="mt-5 text-basicColor font-medium inline-flex items-center gap-2 transition-all duration-300 hover:gap-3">
                  Read More
                  <MdArrowOutward className="text-xl" />
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500 text-lg">
            No blogs found for <span className="font-semibold text-basicColor">{search}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;

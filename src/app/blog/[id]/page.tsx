/* eslint-disable @typescript-eslint/no-explicit-any */

import { getBlogList, getSingleBlog } from "@/actions/get/get.action";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";

const BlogDetails = async ({ params }: any) => {
  const id = params.id;

  const { data: blogList } = await getBlogList();
  const { data: blogDetails } = await getSingleBlog(parseInt(id, 10));

  if (!blogDetails) return <p className="text-center py-20 text-gray-500">Blog not found.</p>;

  const otherBlogs = blogList?.filter((b: any) => b.id !== blogDetails.id);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* ✅ Main Content */}
      <main className="lg:col-span-2">
        {/* Featured Image */}
        <div className="relative w-full h-80 mb-8 rounded-xl overflow-hidden shadow-md">
          <Image
            src={blogDetails?.featured_image}
            alt={blogDetails?.title}
            fill
            className="object-cover rounded-xl hover:scale-105 duration-500 transition-transform"
          />
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">{blogDetails.icon}</span>
            <h1 className="text-3xl font-bold">{blogDetails.title}</h1>
          </div>
          <p className="text-gray-600 text-base">{blogDetails.subtitle}</p>

          {blogDetails.category && (
            <div className="flex items-center gap-2 mt-3 text-sm text-gray-500">
              <MdOutlineCategory className="text-basicColor" />
              <span>{blogDetails.category.name}</span>
            </div>
          )}
        </div>

        {/* Description */}
        <div
          className="prose prose-gray max-w-none text-gray-700 leading-relaxed mb-10"
          dangerouslySetInnerHTML={{ __html: blogDetails.description }}
        />

        {blogDetails.keypoints?.length > 0 && (
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-basicColor">Key Features</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {blogDetails.keypoints.map((point: string, idx: number) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        )}
      </main>

      {/* ✅ Sidebar */}
      <aside>
        <div className="border rounded-xl shadow-sm p-5 space-y-3 bg-white">
          <h2 className="text-lg font-semibold mb-3 border-b pb-2">Other Blogs</h2>
          {otherBlogs?.map((blog: any) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.id}`}
              className="flex items-center justify-between p-3 border rounded-md hover:bg-gray-50 hover:text-basicColor transition">
              <p className="text-sm font-medium">{blog.title}</p>
              <FaLongArrowAltRight className="text-lg" />
            </Link>
          ))}
        </div>

        {/* Book Appointment */}
        <div className="mt-6">
          <Link href="/appointment">
            <button className="w-full rounded-lg bg-gradient-custom px-6 py-3 text-sm sm:text-base font-semibold text-white shadow hover:opacity-90 transition">
              Book Appointment
            </button>
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default BlogDetails;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { getBlogList } from "@/actions/get/get.action";
import SectionHeader from "@/shared/common/SectionHeader";
import { img } from "@/shared/constant/imgExport";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { RiServiceFill } from "react-icons/ri";

const TopBlog = [
  {
    logo: "img.logo",
    title: "Hlw Blog Number 1",
    date: "March 12, 2023",
  },
  {
    logo: "img.Logo",
    title: "Hlw Blog Number 2",
    date: "April 5, 2023",
  },
  {
    logo: "img.Logo",
    title: "Hlw Blog Number 3",
    date: "May 10, 2023",
  },
  {
    logo: "img.Logo",
    title: "Hlw Blog Number 4",
    date: "June 18, 2023",
  },
  {
    logo: "img.Logo",
    title: "Hlw Blog Number 5",
    date: "July 22, 2023",
  },
];

export const metadata: Metadata = {
  title: "Blog | Binary Hooks",
  description: "Blog | Binary Hooks",
};
const BlogSection = async () => {
  const { data: blogData } = await getBlogList();

  const [firstProject, ...remainingProjects] = blogData;
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
        <div className="lg:grid grid-cols-3 gap-5">
          {/* Featured Blog */}
          <div className="col-span-2">
            <div className="space-y-5">
              <Link href={`/blog/${firstProject.id}`} legacyBehavior>
                <a>
                  <Image
                    src={firstProject.featured_image}
                    alt={firstProject.title}
                    height={450}
                    width={800}
                    className="w-full max-h-[450px] object-cover mx-auto"
                  />
                  <div className="bg-slate-100 px-5 py-5 space-y-2">
                    <div className="flex items-center gap-2 text-basicColor">
                      <p>{firstProject.category.name}</p>
                    </div>
                    <h3 className="text-2xl font-semibold">{firstProject.title}</h3>
                    <p className="text-gray-500">{firstProject.subtitle}</p>
                  </div>
                </a>
              </Link>

              {/* Remaining Blogs */}
              <div className="grid gap-5 md:grid-cols-3">
                {remainingProjects.map((project: any) => (
                  <section key={project.id} className="w-full">
                    <div className=" dark:bg-black opacity-80 hover:opacity-100  shadow-lg duration-300 hover:scale-105 hover:transform hover:shadow-xl">
                      <Link href={`/blog/${project.id}`} aria-label={`Link to blog ${project.title}`} legacyBehavior>
                        <a>
                          <div className="relative flex items-end overflow-hidden rounded-xl">
                            <Image src={project.featured_image} alt={project.title} width={400} height={300} loading="eager" />
                          </div>
                          <div className="space-y-2 py-5 px-5 bg-slate-100">
                            <div className="flex items-center gap-2 text-basicColor">
                              <p>{project.category.name}</p>
                            </div>
                            <h3 className="text-xl font-semibold lg:text-2xl">
                              {project.title?.length > 25 ? project.title?.slice(0, 25) + "..." : project.title}
                            </h3>
                            <p className="text-gray-500">
                              {project.subtitle?.length > 55 ? project.subtitle?.slice(0, 55) + "..." : project.subtitle}
                            </p>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Top Blog</h2>
            <div>
              {TopBlog.map((blog, index) => (
                <div key={index} className="flex items-center gap-5 mb-5">
                  <Image src={img.Logo} alt={"logo"} height={50} width={80} className="" />
                  <div>
                    <h3 className="text-sm font-semibold mb-2">{blog.title}</h3>
                    <p className="text-gray-500">{blog.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;

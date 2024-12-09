import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { FaProjectDiagram } from "react-icons/fa";

import SectionHeader from "@/shared/components/SectionHeader";
import { getProjectList } from "@/actions/get/get.action";
import { TProject } from "@/Types";
import { img } from "@/shared/constant/imgExport";

export const metadata: Metadata = {
  title: "Portfolio | Binary Hooks",
  description: "Portfolio | Binary Hooks",
};

const PortfolioPage = async () => {
  const { data: projectList } = await getProjectList();
  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-custom-light dark:bg-gradient-custom-dark flex items-center text-center justify-center py-10 px-5 flex-col space-y-5">
        <SectionHeader text="Our Portfolio" icon={FaProjectDiagram} />
        <div className="text-5xl leading-tight">
          Explore Our<span className="font-bold hover:text-sk"> Portfolios</span>
        </div>
        <p className="text-gray-500">Get your dream come true by our excellent team members</p>
      </div>
      <div className="max-w-screen-xl  mx-auto py-28 px-2 h-full sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 xl:gap-8">
            {projectList?.map((project: TProject) => (
              <Link
                href={`/portfolio/${project?.id}`}
                key={project.id}
                className="group my-5 relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <Image
                  src={project?.featured_image || img.noImage}
                  alt={project?.title}
                  width={300}
                  height={300}
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 group-hover:-rotate-6"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">{project?.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;

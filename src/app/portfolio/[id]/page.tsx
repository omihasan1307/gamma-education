/* eslint-disable @typescript-eslint/no-explicit-any */

import { getSingleProject } from "@/actions/get/get.action";
import SlickSlider from "@/components/Portfolio/Slider";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectDetails = async ({ params }: { params: any }) => {
  const { id } = await params;

  const { data: projectDetails } = await getSingleProject(id);
  const { images, title, description, tags, live_link } = projectDetails || {};

  return (
    <div className="max-w-screen-xl my-32 mx-auto justify-center grid gap-4 grid-cols-1 lg:grid-cols-3 md:gap-6 xl:gap-8 px-10 lg:px-0 ">
      <div className="max-w-sm mx-auto">
        <SlickSlider images={images} />
      </div>
      <div className="w-full col-span-2">
        <Link href={live_link} target="_blank" className="flex items-center space-x-4">
          <h1 className="text-4xl font-semibold">{title}</h1>
          <FaExternalLinkAlt className="text-basicColor" />
        </Link>

        <ul className="my-5 flex flex-wrap gap-2 text-xl font-medium">
          {tags?.map((tag: any) => (
            <li key={tag?.id} className="bg-basicColor px-3 py-1 rounded text-sm text-white">
              {tag?.name}
            </li>
          ))}
        </ul>
        <div dangerouslySetInnerHTML={{ __html: description }} className="text-xl "></div>
      </div>
    </div>
  );
};

export default ProjectDetails;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { format } from "date-fns";
import { getSingleBlog } from "@/actions/get/get.action";
import Image from "next/image";
import { img } from "@/shared/constant/imgExport";

const BlogDetails = async ({ params }: { params: any }) => {
  const { id } = await params;

  const { data: blogDetails } = await getSingleBlog(id);
  const { featured_image, title, description, subtitle, category, created_at } = blogDetails || {};

  return (
    <div className="max-w-screen-xl my-16 mx-auto text-center space-y-10">
      <div className="flex items-center justify-center gap-2">
        <p className="bg-basicColor rounded-full px-2 py-1 text-white">{category?.name}</p>
        <p>{created_at ? format(new Date(created_at), "MMMM dd, yyyy") : <></>}</p>
      </div>
      <div className="space-y-5">
        <h1 className="text-5xl w-[50%] font-semibold leading-tight mx-auto ">{title}</h1>
        <p className="text-gray-500">{subtitle}</p>
        <Image src={featured_image || img.noImage} alt={title} width={600} height={400} loading="eager" className="mx-auto" />
        {description ? <div dangerouslySetInnerHTML={{ __html: description }}></div> : <></>}
      </div>
    </div>
  );
};

export default BlogDetails;

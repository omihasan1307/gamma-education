/* eslint-disable @typescript-eslint/no-explicit-any */
import { img } from "@/shared/constant/imgExport";
import Image from "next/image";

const TeamMemberPage = ({ items }: { items: any }) => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col space-y-1 mt-10">
        <p className="text-5xl font-bold leading-tight">{items?.[0]?.name}</p>
        <div className="text-gray-500" dangerouslySetInnerHTML={{ __html: items?.[0]?.description }} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-16 px-2">
        {items?.[0]?.items?.map((member: any, index: number) => (
          <div key={index} className="relative photoGallery">
            <Image src={member?.image || img?.noImage} alt={member?.title} width={500} height={300} className="rounded-lg teamMemberImg" />

            <div className="photoText absolute top-0 w-full h-full flex flex-col justify-between ">
              <h1 className="absolute px-5 py-5 text-2xl font-bold bottom-0 uppercase ">{member?.title}</h1>{" "}
              <h1 className="absolute px-5 py-1 text-sm font-bold bottom-0 uppercase text-basicColor">{member?.subtitle}</h1>{" "}
              <div className="relative flex flex-col items-end justify-between py-5 h-full   ">
                {/* <div className="flex flex-col me-6  space-y-6 text-basicColor ">{member?.keyPoints?.url && <span> +88001862404050</span>}</div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMemberPage;

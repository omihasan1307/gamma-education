/* eslint-disable @typescript-eslint/no-explicit-any */
import { img } from "@/shared/constant/imgExport";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

const TeamMemberPage = ({ items }: { items: any }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-28 px-2 ">
      {items?.map((member: any, index: number) => (
        <div key={index} className="relative photoGallery">
          <Image src={member?.image || img.noImage} alt={member?.title} width={500} height={300} className="rounded-lg teamMemberImg" />

          <div className="photoText absolute top-0 w-full h-full flex flex-col justify-between ">
            <h1 className="absolute px-5 py-5 text-2xl font-bold bottom-0 uppercase ">{member?.title}</h1>{" "}
            <div className="relative flex flex-col items-end justify-between py-5 h-full   ">
              <h1 className="-rotate-90 my-16 -me-8 ">{member?.subtitle}</h1>
              <div className="flex flex-col me-6  space-y-6 text-basicColor ">
                {member?.keyPoints?.url && (
                  <Link href={member.keyPoints.url} target="_blank">
                    <FaLinkedinIn className="w-8 h-8 p-2 rounded bg-[#0A66C2] text-white" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamMemberPage;

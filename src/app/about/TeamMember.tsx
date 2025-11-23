/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { img } from "@/shared/constant/imgExport";

const TeamMemberPage = ({ items }: { items: any }) => {
  return (
    <div className="my-16 w-full">
      {/* Title + Description */}
      <div className="flex flex-col items-center text-center space-y-4 py-10">
        <h1 className="text-4xl md:text-5xl font-bold">{items?.title}</h1>

        <div
          className="text-gray-600 max-w-3xl leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: items?.description?.trim() === "<p>&nbsp;</p>" ? "" : items?.description,
          }}
        />
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4">
        {items?.items?.map((member: any, index: number) => (
          <div key={index} className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer">
            {/* IMAGE */}
            <div className="w-full h-72 relative">
              <Image
                src={member?.image || img?.noImage}
                alt={member?.title}
                fill
                className="object-cover rounded-xl group-hover:scale-110 transition-all duration-500"
              />
            </div>

            {/* OVERLAY CONTENT */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500 rounded-xl flex flex-col justify-end p-5">
              <h2 className="text-2xl font-bold text-white">{member?.title}</h2>
              <p className="text-sm font-semibold text-blue-200">{member?.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMemberPage;

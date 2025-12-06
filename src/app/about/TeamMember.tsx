/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

const TeamMemberPage = ({ items }: { items: any }) => {
  return (
    <div className="w-full py-16">
      {/* HEADING */}
      <div className="text-center max-w-3xl mx-auto px-4 space-y-4">
        <h2 className="text-4xl md:text-5xl ">{items?.title}</h2>

        <div
          className="text-gray-600 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: items?.description?.trim() === "<p>&nbsp;</p>" ? "" : items?.description,
          }}
        />
      </div>

      {/* TEAM GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-12 px-6  lg:px-12">
        {items?.items?.map((member: any, index: number) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden shadow-xl bg-white 
              hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
            {/* IMAGE */}
            <div className="relative w-full h-80 overflow-hidden">
              <Image src={member?.image} alt={member?.title} fill className="object-cover group-hover:scale-110 transition-all duration-700" />
            </div>

            {/* CONTENT */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent 
                opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4">
              <h2 className="text-2xl font-bold text-white drop-shadow-lg">{member?.title}</h2>

              <p className="text-sm text-blue-300 font-medium">{member?.subtitle}</p>

              <div className="mt-3 flex items-center justify-between gap-6 text-white text-sm">
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                  <CiMail className="text-lg" /> {member?.button_url}
                </div>

                <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                  <IoCallOutline className="text-lg" /> {member?.button_text}
                </div>
              </div>
            </div>

            {/* NAME BELOW IMAGE */}
            {/* <div className="p-4 text-center bg-white">
              <h3 className="text-lg font-semibold text-gray-800">{member?.title}</h3>
              <p className="text-sm text-gray-500">{member?.subtitle}</p>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMemberPage;

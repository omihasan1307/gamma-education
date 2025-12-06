/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";

const WhoWeAre = ({ learningPath }: { learningPath: any }) => {
  if (!learningPath) return null;

  return (
    <section className="container mx-auto space-y-20">
      {/* WHO WE ARE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Text */}
        <div>
          <h2 className="text-3xl font-bold text-[#002D74]">{learningPath?.name}</h2>

          <h3 className="text-lg font-semibold mt-4">{learningPath?.title}</h3>

          <div className="mt-4 text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: learningPath?.description }} />
        </div>

        {/* Right Image */}
        {learningPath?.image && (
          <div className="rounded-xl overflow-hidden shadow-md">
            <Image width={400} height={400} src={learningPath.image} alt="Who We Are" className="w-full h-full object-cover" />
          </div>
        )}
      </div>

      {/* HOW TO START */}
      <div>
        <h2 className="text-3xl font-bold text-[#002D74] mb-10">How to Start</h2>

        <div className="space-y-20">
          {learningPath?.items?.map((item: any) => (
            <div key={item.id} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* Image Left / Text Right — but alternate pattern */}
              {item.image ? (
                <>
                  {/* Left Image */}
                  <div className="rounded-xl overflow-hidden shadow-md w-full h-full">
                    <Image src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>

                  {/* Right Text */}
                  <div className="pl-8 border-l-4 border-dashed border-gray-400">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <div className="mt-3 text-gray-700" dangerouslySetInnerHTML={{ __html: item.description }} />
                  </div>
                </>
              ) : (
                <>
                  {/* If No Image, Just Text Full Width */}
                  <div className="col-span-2">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <div className="mt-3 text-gray-700" dangerouslySetInnerHTML={{ __html: item.description }} />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

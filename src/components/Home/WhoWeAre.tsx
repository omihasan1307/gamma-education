/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";

const WhoWeAre = ({ learningPath }: { learningPath: any }) => {
  if (!learningPath) return null;

  return (
    <section className="container max-w-screen-xl mx-auto space-y-20 py-10 ">
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
        <h2 className="text-3xl font-bold text-[#002D74] mb-10 text-center">How to Start</h2>

        <div className="space-y-20">
          {learningPath?.items?.map((item: any, index: number) => {
            const hasImage = !!item.image;
            const isEven = index % 2 === 0; // even index = first, third, fifth...

            return (
              <div key={item.id} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* ---- CASE 1: NO IMAGE ---- */}
                {!hasImage && (
                  <div className="col-span-2">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <div className="mt-3 text-gray-700" dangerouslySetInnerHTML={{ __html: item.description }} />
                  </div>
                )}

                {/* ---- CASE 2: HAS IMAGE + ALTERNATE LAYOUT ---- */}
                {hasImage && (
                  <>
                    {/* TEXT FIRST (even rows) */}
                    {isEven ? (
                      <>
                        <div>
                          <h3 className="text-xl font-bold">{item.title}</h3>
                          <div className="mt-3 text-gray-700" dangerouslySetInnerHTML={{ __html: item.description }} />
                        </div>

                        <div className="rounded-xl overflow-hidden shadow-md w-full h-full">
                          <Image src={item.image} alt={item.title} width={400} height={500} className="w-full h-full object-cover" />
                        </div>
                      </>
                    ) : (
                      /* IMAGE FIRST (odd rows) */
                      <>
                        <div className="rounded-xl overflow-hidden shadow-md w-full h-full">
                          <Image src={item.image} alt={item.title} width={400} height={500} className="w-full h-full object-cover" />
                        </div>

                        <div>
                          <h3 className="text-xl font-bold">{item.title}</h3>
                          <div className="mt-3 text-gray-700" dangerouslySetInnerHTML={{ __html: item.description }} />
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

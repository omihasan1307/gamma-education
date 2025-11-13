/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";

const SecondarySection = ({ HomeSection2 }: any) => {
  return (
    <div className="max-w-screen-xl mx-auto text-center px-2 py-20 ">
      <div className="grid gap-10 md:grid-cols-3">
        {HomeSection2?.slice(0, 3)?.map((stage: any, index: number) => (
          <div key={index} className="flex items-center gap-5 hover:scale-105 duration-300 group">
            {/* Render SVG if `icon` is valid */}
            <div
              className="text-basicColor rounded-lg bg-slate-100 dark:bg-gradient-custom-dark w-32 h-24 py-4 px-4 group-hover:-rotate-12 duration-300"
              dangerouslySetInnerHTML={{
                __html: stage.icon || "<svg></svg>",
              }}></div>
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-4">{stage.title}</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: stage.description || "<p>Description is not available.</p>",
                }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondarySection;

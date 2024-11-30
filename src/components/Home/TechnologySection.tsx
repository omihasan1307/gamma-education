/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import SectionHeader from "@/shared/common/SectionHeader";
import Slider from "react-slick";
import Image from "next/image";
import { GrTechnology } from "react-icons/gr";

const TechnologySection = ({ HomeSection3 }: any) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="py-28 text-center px-2  dark:bg-gradient-custom-dark">
      <div className="flex items-center justify-center flex-col space-y-5">
        <SectionHeader text="Innovative Solutions" icon={GrTechnology} />
        <p className="text-5xl font-bold leading-tight">Leading Technologies of the Era</p>
        <p className="text-gray-500">
          Empowering businesses with cutting-edge technology solutions, from startups to established enterprises, to fuel innovation and growth.
        </p>
      </div>

      <div className="slider-container pt-10">
        <Slider {...settings}>
          {HomeSection3?.items?.map((item: any, index: number) => (
            <div key={index} className="p-2">
              <div className="rounded-md py-6">
                {item?.image ? (
                  <Image
                    src={item?.image}
                    alt={item?.title || "Technology"}
                    width={200}
                    height={200}
                    className="mx-auto h-[200px] w-[200px] hover:scale-105 duration-300"
                  />
                ) : (
                  <div
                    className="mx-auto h-[200px] w-[200px] flex items-center justify-center "
                    dangerouslySetInnerHTML={{ __html: item?.icon }}></div>
                )}
                <h3 className="text-xl font-bold mt-4">{item.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TechnologySection;

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Slider from "react-slick";
import Image from "next/image";
import { img } from "@/shared/constant/imgExport";
import Link from "next/link";

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
    <div className="text-center px-2  max-w-screen-xl mx-auto">
      <div className="slider-container pt-10">
        <Slider {...settings}>
          {HomeSection3?.map((item: any, index: number) => (
            <Link href={`/destination/${item.id}`} key={index} className="p-2 ">
              <div className="rounded-md py-6 ">
                {item?.image ? (
                  <Image
                    src={item?.image || img?.noImage}
                    alt={item?.title || "Technology"}
                    width={200}
                    height={200}
                    className="mx-auto h-[200px] w-[200px] hover:scale-105 duration-300 "
                  />
                ) : (
                  <div
                    className="mx-auto h-[200px] w-[200px] flex items-center justify-center "
                    dangerouslySetInnerHTML={{ __html: item?.icon }}></div>
                )}
                <h3 className="text-xl font-bold mt-4">{item.title}</h3>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
      <div className="my-5">
        <Link href="/appointment">
          <button className="hidden lg:inline-block px-10 py-2 rounded-lg bg-gradient-custom text-white font-semibold me-3">Book Appointment</button>
        </Link>
      </div>
    </div>
  );
};

export default TechnologySection;

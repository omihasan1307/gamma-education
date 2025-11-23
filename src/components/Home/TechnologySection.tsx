/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { img } from "@/shared/constant/imgExport";

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
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="text-center px-2 max-w-screen-xl mx-auto my-20">
      <div className="slider-container">
        <Slider {...settings}>
          {HomeSection3?.map((item: any, index: number) => (
            <Link href={`/destination/${item.id}`} key={index} className="p-2">
              <div className="group bg-white py-5 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                {/* Image */}
                <div className="relative h-[200px] w-[200px] mx-auto overflow-hidden rounded-xl">
                  {item?.featured_image ? (
                    <Image
                      src={item.featured_image || img.noImage}
                      alt={item.title || "Technology"}
                      fill
                      className="object-cover group-hover:scale-110 transition-all duration-500"
                    />
                  ) : (
                    <div className="mx-auto h-full w-full flex items-center justify-center" dangerouslySetInnerHTML={{ __html: item.icon }} />
                  )}

                  {/* small floating tag */}
                  <span className="absolute top-2 left-2 bg-white/80 text-gray-800 text-xs px-2 py-1 rounded shadow-sm">
                    {item.country_display || "Study"}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mt-4 px-2 text-gray-900 group-hover:text-blue-600 transition-all">{item.title}</h3>
              </div>
            </Link>
          ))}
        </Slider>
      </div>

      <div className="my-16">
        <Link href="/appointment">
          <button className="hidden lg:inline-block px-10 py-2 rounded-lg bg-gradient-custom text-white font-semibold me-3">Book Appointment</button>
        </Link>
      </div>
    </div>
  );
};

export default TechnologySection;

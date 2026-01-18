/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import Slider from "react-slick";

const HeroSection = ({ HomeSection1, advertisments }: { HomeSection1?: any; advertisments?: any[] }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    fade: true,
    responsive: [
      { breakpoint: 1024, settings: { fade: true } },
      { breakpoint: 768, settings: { fade: false } },
    ],
  };

  // ✅ Get Promotion images
  const promotionImages = advertisments?.find((item) => item.name === "Promotion")?.images || [];

  return (
    <div className="px-2 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
        {/* Main Slider */}
        <div className="lg:col-span-3 w-full">
          <Slider {...settings}>
            {HomeSection1?.map((item: any) => (
              <div key={item.id} className="relative w-full min-h-[250px] sm:min-h-[350px] md:min-h-[450px] lg:min-h-[600px]">
                <Image src={item.image} alt={`Hero Slide ${item.id}`} fill priority className="object-cover rounded-md" sizes="100vw" />
              </div>
            ))}
          </Slider>
        </div>

        {/* ✅ Right Side Promotion Images */}
        <div className="lg:col-span-2 flex flex-col gap-3">
          {promotionImages.slice(0, 2).map((img: any, index: number) => (
            <div key={img.id} className="relative w-full min-h-[150px] sm:min-h-[200px] md:min-h-[250px] lg:min-h-[295px]">
              <Image src={img.image_url} alt={`Promotion ${index + 1}`} fill className="object-cover rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

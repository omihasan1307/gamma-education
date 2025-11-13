/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import Slider from "react-slick";

const HeroSection = ({ HomeSection1 }: { HomeSection1?: any }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          fade: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          fade: false,
        },
      },
    ],
  };


  return (
    <div>
      <Slider {...settings}>
        {HomeSection1.map((item: any) => (
          <div key={item.id} className="relative w-full h-[700px]">
            {/* ✅ Show full width on large screens, constrained height on mobile */}
            <div className="relative w-full aspect-[16/9] lg:aspect-auto lg:h-[600px] xl:h-[700px]">
              <Image
                src={item?.image}
                alt={`Hero Slide ${item.id}`}
                fill
                priority
                className="object-cover lg:object-contain" // ✅ object-contain for large screens
                sizes="100vw"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;

{
  /* {HomeSection3?.items?.map((item: any, index: number) => (
            <Link href={`/destination/usa`} key={index} className="p-2 ">
              <div className="rounded-md py-6 ">
                {item?.image ? (
                  <Image
                    src={item?.image || img.heroImg}
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
          ))} */
}
{
  /* <div className="max-w-screen-xl mx-auto py-28 px-1 text-center">
        <div className="flex items-center justify-center flex-col space-y-5">
          <p className="text-5xl font-bold  leading-tight  lg:w-[40%]">{title || <Skeleton />}</p>
          <div className="text-gray-500 lg:w-[50%]" dangerouslySetInnerHTML={{ __html: description }}></div>
        </div>

        <Link
          href={"/appointment"}
          className="md:w-auto mt-6 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-gradient-custom shadow-xs opacity-85 hover:opacity-100 transition-all duration-500">
          Book Appointment
          <MdOutlineArrowForwardIos />
        </Link>
      </div> */
}

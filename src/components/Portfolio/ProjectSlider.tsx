"use client";
import { ProjectSliderProps } from "@/Types";
import Image from "next/image";
import Slider from "react-slick";
const ProjectSlider = ({ images }: ProjectSliderProps) => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-full max-w-screen-lg mx-auto">
      <Slider {...settings}>
        {images?.map((item, index) => (
          <div key={index}>
            <Image src={item?.image} alt={`Image ${index + 1}`} width={400} height={400} className="mx-auto rounded-xl border" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectSlider;

"use client";
import Image from "next/image";
import Slider from "react-slick";

import { img } from "@/shared/constant/imgExport";
import { SlickSliderProps } from "@/Types";
import { sliderConfig } from "@/shared/config/slider.config";

const SlickSlider = ({ images }: SlickSliderProps) => {
  return (
    <div className="w-full max-w-screen-lg mx-auto">
      <Slider {...sliderConfig}>
        {images?.map((item, index) => (
          <Image key={index} src={item?.image || img?.noImage} alt={`Image ${index}`} width={400} height={400} className="mx-auto rounded-xl " />
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;

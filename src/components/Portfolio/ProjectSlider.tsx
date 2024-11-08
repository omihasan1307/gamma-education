"use client";
import { img } from "@/shared/constant/imgExport";
import Image from "next/image";
import Slider from "react-slick";
const ProjectSlider = () => {
  const projectData = [
    { id: 1, img: img.p1, title: "React JS" },
    { id: 2, img: img.p2, title: "Next JS" },
    { id: 3, img: img.p3, title: "Next JS" },
    { id: 4, img: img.p4, title: "Next JS" },
  ];
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {projectData.map((item, index) => (
        <div key={index}>
          <Image src={item.img} alt={item.title} className="mx-auto h-[400px] w-[400px] rounded-xl" />
        </div>
      ))}
    </Slider>
  );
};

export default ProjectSlider;

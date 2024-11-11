"use client";
import SectionHeader from "@/shared/common/SectionHeader";
import Slider from "react-slick";
import { img } from "@/shared/constant/imgExport";
import Image from "next/image";
import { GrTechnology } from "react-icons/gr";

const TechnologyItems = [
  { id: 1, img: img.reactjs, title: "React JS" },
  { id: 1, img: img.reactjs, title: "React JS" },
  { id: 2, img: img.nextjs, title: "Next JS" },
  { id: 3, img: img.angular, title: "Angular" },
  { id: 4, img: img.django, title: "django" },
  { id: 3, img: img.angular, title: "Angular" },
  { id: 4, img: img.django, title: "django" },
  { id: 5, img: img.python, title: "Python" },
  { id: 6, img: img.javascript, title: "JavaScript" },
  { id: 7, img: img.typescript, title: "TypeScript" },
  { id: 8, img: img.nodejs, title: "Node JS" },
  { id: 9, img: img.mongodb, title: "MongoDB" },
  { id: 10, img: img.mysql, title: "MySQL" },
  { id: 6, img: img.javascript, title: "JavaScript" },
  { id: 7, img: img.typescript, title: "TypeScript" },
  { id: 8, img: img.nodejs, title: "Node JS" },
  { id: 9, img: img.mongodb, title: "MongoDB" },
  { id: 10, img: img.mysql, title: "MySQL" },
];

const TechnologySection = () => {
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
    <div className="py-28 text-center px-2 bg-gradient-custom-light dark:bg-gradient-custom-dark">
      <div className="flex items-center justify-center flex-col space-y-5">
        <SectionHeader text="Innovative Solutions" icon={GrTechnology} />
        <p className="text-5xl font-bold leading-tight">Leading Technologies of the Era</p>
        <p className="text-gray-500">
          Empowering businesses with cutting-edge technology solutions, from startups to established enterprises, to fuel innovation and growth.
        </p>{" "}
      </div>

      <div className="slider-container pt-10">
        <Slider {...settings}>
          {TechnologyItems.map((item) => (
            <div key={item.id} className="p-2">
              <div className="rounded-md py-6 ">
                <Image src={item.img} alt={item.title} className="mx-auto h-[200px] w-[200px] hover:scale-105 duration-300 shadow-lg" />
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

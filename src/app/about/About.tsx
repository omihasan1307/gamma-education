/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

const AboutSection = ({ title, image, subtitle, description }: any) => {
  return (
    <div className=" px-2 lg:grid grid-cols-2 items-center gap-8 ">
      <Image src={image} alt={title} height={200} width={700} className="rounded-lg" data-aos="fade-right" />
      <div className=" lg:py-10 lg:px-5 space-y-5 w-full" data-aos="fade-left">
        <p className="tracking-widest font-bold text-baseColor uppercase mt-5">{title}</p>
        <p className="text-2xl lg:text-4xl font-semibold ">{subtitle}</p>
        <span className="text-gray-400" dangerouslySetInnerHTML={{ __html: description }}></span>

        <button className=" uppercase tracking-widest px-6 py-3 rounded-lg bg-gradient-custom text-white ">DisCover More</button>
      </div>
    </div>
  );
};

export default AboutSection;

import { img } from "@/shared/constant/imgExport";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className=" px-2 lg:grid grid-cols-2 items-center gap-8 ">
      <Image src={img.About} alt={"aboutImg"} height={200} width={700} className="rounded-lg" data-aos="fade-right" />
      <div className=" lg:py-10 lg:px-5 space-y-5 w-full" data-aos="fade-left">
        <p className="tracking-widest font-bold text-baseColor uppercase mt-5">About Us</p>
        <p className="text-2xl lg:text-4xl font-semibold ">
          World Largest Online
          <span className="text-basicColor"> Binary Hooks Marketplace</span> For You.
        </p>
        <p className="text-gray-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&rsquo;s standard dummy text
          ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
          centuries, but also the leap into electronic typesetting, remaining essentially by injected humour unchanged.
        </p>
        <p className="text-gray-400">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
          or randomised words which don&rsquo;t look even slightly believable.
        </p>
        <button className=" uppercase tracking-widest px-6 py-3 rounded-lg bg-gradient-custom text-white ">DisCover More</button>
      </div>
    </div>
  );
};

export default AboutSection;

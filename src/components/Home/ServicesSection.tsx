/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";

const ServicesSection = ({ services }: any) => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto text-center py-10 lg:py-20  px-2 ">
        <div className="flex items-center justify-center flex-col space-y-5">
          <p className="text-5xl font-bold  leading-tight  lg:w-[60%]">Our Services</p>
          <p className="text-gray-500 lg:w-[50%]">Explore the range of services we offer to help you achieve your goals.</p>
        </div>

        {/* Service cards */}
        <div className="max-w-screen-xl mx-auto mt-8 grid gap-10 md:grid-cols-3 text-center px-2">
          {services.slice(0, 3)?.map((service: any) => (
            <div key={service.id} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              {/* Service Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={service?.featured_image}
                  alt={service?.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-4xl mb-3">{service.icon}</div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-basicColor transition">{service.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{service.subtitle}</p>

                <Link
                  href={`/service/${service.id}`}
                  className="text-basicColor font-medium inline-flex items-center gap-1 hover:gap-2 transition-all duration-300">
                  Read more about this <MdArrowOutward className="text-lg" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesSection;

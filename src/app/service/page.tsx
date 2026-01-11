/* eslint-disable @typescript-eslint/no-explicit-any */
export const dynamic = "force-dynamic";

import { getCategoriesList, getServiceList } from "@/actions/get/get.action";
import ServiceFilter from "@/components/ServiceSearch";
import SectionHeader from "@/shared/components/SectionHeader";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaServicestack } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

export const metadata: Metadata = {
  title: "Services | Gamma Education",
  description: "Services | Gamma Education",
};

const ServicesPage = async ({ searchParams }: any) => {
  const search = searchParams?.search || "";
  const category = searchParams?.category || "";

  const { data: categoriesList } = await getCategoriesList();
  const { data: serviceList } = await getServiceList(search, category);

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="flex flex-col items-center text-center space-y-5">
        <SectionHeader
          text="Our Services"
          icon={FaServicestack}
          description="Explore our wide range of professional services designed to support your success."
        />
      </div>

      {/* Search + Category */}
      <ServiceFilter categories={categoriesList} />

      {/* Services Grid */}
      <div className="max-w-screen-xl mx-auto mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 px-4">
        {serviceList?.length > 0 ? (
          serviceList.map((service: any) => (
            <div key={service.id} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={service?.featured_image}
                  alt={service?.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

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
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg">No services found</p>
        )}
      </div>
    </div>
  );
};

export default ServicesPage;

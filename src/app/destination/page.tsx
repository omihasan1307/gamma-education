/* eslint-disable @typescript-eslint/no-explicit-any */
export const dynamic = "force-dynamic";

import { getDestination } from "@/actions/get/get.action";
import DestinationSearch from "@/components/DestinationSearch";
import SectionHeader from "@/shared/components/SectionHeader";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

export const metadata: Metadata = {
  title: "Destinations | Gamma Education",
  description: "Explore study destinations around the world",
};

const DestinationPage = async ({ searchParams }: any) => {
  const search = searchParams?.q || "";
  const country = searchParams?.country || "";
  const study_level = searchParams?.study_level || "";

  const { data: destinations } = await getDestination({ q: search, country, study_level });


  return (
    <div className="pb-20">
      {/* Header */}
      <div className="flex flex-col items-center text-center space-y-5">
        <SectionHeader text="Explore Destinations" description="Find the best study destinations based on your preferences." />
      </div>

      {/* Filters/Search */}
      <div className="max-w-xl mx-auto mt-10 px-4">
        <DestinationSearch />
      </div>

      {/* Destination Grid */}
      <div className="max-w-screen-xl mx-auto mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4">
        {destinations?.length > 0 ? (
          destinations?.map((dest: any) => (
            <div
              key={dest.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col overflow-hidden group">
              {/* Image */}
              <Link href={`/destination/${dest?.id}`} className="block relative w-full h-52 overflow-hidden">
                <Image
                  src={dest.featured_image_url || dest.featured_image}
                  alt={dest.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {dest.is_featured && (
                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">Featured</span>
                )}
              </Link>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div className="space-y-2">
                  {/* Title */}
                  <h2 className="text-lg font-semibold text-gray-900 group-hover:text-basicColor transition">{dest.title}</h2>

                  {/* Short Description */}
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{dest.short_description}</p>

                  {/* Country & Study Level */}
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-gray-500 text-sm">{dest.country_display}</span>
                    <span className="text-gray-400 text-xs">|</span>
                    <span className="text-gray-500 text-sm">{dest.study_level_display}</span>
                  </div>

                  {/* Published Date */}
                  <p className="text-gray-400 text-xs mt-1">Published: {new Date(dest.published_date).toLocaleDateString()}</p>
                </div>

                {/* Button */}
                <Link
                  href={`/destination/${dest.id}`}
                  className="mt-4 text-basicColor font-medium inline-flex items-center gap-2 transition-all duration-300 hover:gap-3">
                  Explore
                  <MdArrowOutward className="text-xl" />
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500 text-lg">
            No destinations found for <span className="font-semibold text-basicColor">{search}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default DestinationPage;

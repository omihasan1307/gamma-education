/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

import { useWebsiteInfo } from "@/providers/websites.providers";
import LoadingComponent from "@/shared/components/LoadingComponent";

const ContactDetails = () => {
  const { websiteInfo, loading }: any = useWebsiteInfo();
  const { support_email, secondary_business_address, phone, instagram, linkedin, facebook } = websiteInfo?.owner_info || {};

  const contactPage = websiteInfo?.pages?.find((page: any) => page?.slug === "contact");

  const { title, description } = contactPage || {};

  if (loading) return <LoadingComponent />;

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="text-center  max-w-6xl mx-auto space-y-10 my-20">
        <h2 className="text-3xl sm:text-4xl font-extrabold ">{title}</h2>
        <p className="" dangerouslySetInnerHTML={{ __html: description || "No Data" }}></p>
      </div>

      {/* Contact Cards */}
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {/* Location */}
        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow">
          <div className="flex justify-center mb-4">
            <FaMapMarkerAlt className="text-basicColor w-12 h-12" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Location</h3>
          <p className="text-gray-600">{secondary_business_address}</p>
        </div>

        {/* Email */}
        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow">
          <div className="flex justify-center mb-4">
            <FaEnvelope className="text-basicColor w-12 h-12" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p className="text-gray-600 break-all">{support_email}</p>
        </div>

        {/* Phone */}
        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow">
          <div className="flex justify-center mb-4">
            <FaPhoneAlt className="text-basicColor w-12 h-12" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <p className="text-gray-600">{phone}</p>
        </div>
      </div>

      {/* Divider */}
      <div className="my-12 h-[1px] bg-gradient-to-r from-transparent via-basicColor/40 to-transparent max-w-4xl mx-auto" />

      {/* Social Media */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
        <div className="flex justify-center space-x-6">
          {facebook && (
            <Link href={facebook} target="_blank" className="group p-3 rounded-full bg-[#1877F2] text-white hover:scale-110 transition">
              <FaFacebookF className="w-5 h-5" />
            </Link>
          )}
          {linkedin && (
            <Link href={linkedin} target="_blank" className="group p-3 rounded-full bg-[#0A66C2] text-white hover:scale-110 transition">
              <FaLinkedinIn className="w-5 h-5" />
            </Link>
          )}
          {instagram && (
            <Link
              href={instagram}
              target="_blank"
              className="group p-3 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white hover:scale-110 transition">
              <FaInstagram className="w-5 h-5" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;

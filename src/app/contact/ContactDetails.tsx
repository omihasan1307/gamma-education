/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { FaInstagram, FaMapMarkerAlt, FaRegPaperPlane, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import { useWebsiteInfo } from "@/providers/websites.providers";
import LoadingComponent from "@/shared/components/LoadingComponent";

const ContactDetails = () => {
  const { websiteInfo, loading }: any = useWebsiteInfo();
  const { support_email, secondary_business_address, phone, instagram, linkedin, facebook } = websiteInfo?.owner_info || {};

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <div>
      <div className="mt-10">
        <h2 className="text-2xl lg:text-3xl font-bold  text-left">GET CLOSER</h2>

        <div className="p-1 my-5 bg-gradient-custom rounded-lg w-48"></div>

        <p className="my-10">
          Have a project in mind or need assistance? Get in touch with Binary Hooks today! Let&apos;s collaborate to bring your ideas to life with
          innovative and tailored solutions.
        </p>

        <div className="grid lg:grid-cols-2 lg:place-content-center lg:gap-10 my-10">
          <div className="flex items-center mb-10 lg:mb-12">
            <FaMapMarkerAlt className="text-basicColor w-[40px] h-[40px]" />

            <div className="ms-5">
              <p className=" text-xl font-bold mb-2">LOCATION</p>
              <p>{secondary_business_address}</p>
            </div>
          </div>

          <div className="flex items-center lg:mb-16 mb-10">
            <FaRegPaperPlane className="text-basicColor w-[40px] h-[40px]" />
            <div className="ms-5">
              <p className=" text-xl font-bold mb-2">EMAIL</p>
              <p>{support_email}</p>
              <p>{phone}</p>
            </div>
          </div>
        </div>

        <div className="p-1 bg-gradient-custom rounded-lg"></div>

        <div className="my-6 grid lg:grid-cols-3 lg:place-content-center items-center">
          <div className="col-span-2 text-2xl  font-bold">OUR SOCIAL MEDIA</div>
          <div className="flex space-x-10 lg:space-x-5">
            <Link href={facebook} target="_blank">
              <FaFacebookF className=" w-10 h-10  p-2 rounded bg-[#0F6EF9] text-white " />
            </Link>
            <Link href={linkedin} target="_blank">
              <FaLinkedinIn className=" w-10 h-10 border p-2 rounded bg-[#0A66C2] text-white " />
            </Link>
            <Link href={instagram} target="_blank">
              <FaInstagram className="w-10 h-10 p-2 rounded  bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743] text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;

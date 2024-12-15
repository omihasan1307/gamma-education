/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import { img } from "../constant/imgExport";
import { useWebsiteInfo } from "@/providers/websites.providers";
import LoadingComponent from "./LoadingComponent";

const Footer = () => {
  const { websiteInfo, loading }: any = useWebsiteInfo();

  if (loading) {
    return <LoadingComponent />;
  }

  const { instagram, linkedin, facebook } = websiteInfo?.owner_info || {};

  return (
    <div>
      <div className="max-w-screen-xl mx-auto pt-20">
        <div className="lg:grid grid-cols-2 gap-20 px-4 lg:px-0 ">
          <div className="space-y-5 text-slate-500  pb-5 lg:pb-0 ">
            <div className="flex items-center gap-2">
              <Image src={img.Logo} alt="Logo" className="w-11 md:w-14" />
              <h1 className="text-3xl md:text-4xl mx-2 text-black">binaryhooks</h1>
            </div>
            <p>
              Crafting innovative software solutions tailored to your business needs. At Binary Hooks, we specialize in delivering cutting-edge
              technology, exceptional user experiences, and scalable solutions to help your business thrive in the digital age.
            </p>

            <h2 className="text-xl font-semibold">Follow us</h2>
            <div className="flex space-x-5">
              <Link href={facebook} target="_blank">
                <FaFacebookF className=" w-10 h-10  p-2 rounded bg-[#0F6EF9] text-white " />
              </Link>
              <Link href={linkedin} target="_blank">
                <FaLinkedinIn className=" w-10 h-10 border p-2 rounded bg-[#0A66C2] text-white " />
              </Link>
              <Link href={instagram} target="_blank">
                <FaEnvelope className="w-10 h-10 p-2 rounded  bg-gradient-to-r from-[#0F6EF9] to-[#0A66C2] text-white" />
              </Link>
            </div>
          </div>

          <div className="col-span-1 lg:space-y-0 space-y-5 lg:grid grid-cols-2 ">
            <div className="space-y-10">
              <p className="text-xl font-semibold pb-2 border-b-2 w-40 border-basicColor">Quick Links</p>
              <ul className="space-y-5 text-slate-500">
                <li className="flex space-x-3 items-center hover:text-basicColor hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
                  <Link href={"/"}>Home</Link>
                </li>
                <li className="flex space-x-3 items-center hover:text-basicColor hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
                  <Link href={"/service"}>Service</Link>
                </li>
                <li className="flex space-x-3 items-center hover:text-basicColor hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
                  <Link href={"/portfolio"}>Portfolio</Link>
                </li>
                <li className="flex space-x-3 items-center hover:text-basicColor hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
                  <Link href={"/about"}>About Us</Link>
                </li>
                <li className="flex space-x-3 items-center hover:text-basicColor hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
                  <Link href={"/contact"}>Contact Us</Link>
                </li>
              </ul>
            </div>

            <div className="space-y-10">
              <p className="text-xl font-semibold pb-2 border-b-2 w-28 border-basicColor">Information</p>

              <ul className="space-y-5 text-slate-500">
                <Link
                  href={"/privacy-policy"}
                  className="flex space-x-3 items-center hover:text-basicColor hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
                  <span>Privacy Policy</span>
                </Link>
                <Link
                  href="/terms-condition"
                  className="flex space-x-3 items-center hover:text-basicColor hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
                  <span>Terms & Conditions</span>
                </Link>

                <Link
                  href="/faqs"
                  className="flex space-x-3 items-center hover:text-basicColor hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
                  <span>Faqs</span>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 border-t border-gray-200 py-4 px-4">
        <p className="">Copyright &copy; {new Date().getFullYear()} Binary Hooks. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

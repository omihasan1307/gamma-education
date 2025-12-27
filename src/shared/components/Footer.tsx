/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useWebsiteInfo } from "@/providers/websites.providers";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { img } from "../constant/imgExport";
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import LoadingComponent from "./LoadingComponent";

const Footer = () => {
  const { websiteInfo, loading }: any = useWebsiteInfo();

  if (loading) {
    return <LoadingComponent />;
  }

  const { instagram, linkedin, facebook, support_email, phone, business_address, secondary_logo } = websiteInfo?.owner_info || {};

  return (
    <div>
      <footer className="bg-gradient-to-r from-basicColor to-secondaryColor text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src={secondary_logo || img?.GammaImage} alt="secondary_logo" className="w-40" width={160} height={40} />
            </div>

            <p className="text-gray-200 text-sm leading-relaxed">
              Guiding students to achieve their dreams of studying abroad with trusted counseling, admission support, and visa guidance.
            </p>
            <div className="flex space-x-4 mt-5">
              <Link href={facebook} target="_blank" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
                <FaFacebookF />
              </Link>
              <Link href={instagram} target="_blank" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
                <FaInstagram />
              </Link>
              <Link href={linkedin} target="_blank" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              {websiteInfo?.services?.slice(0, 5)?.map((service: any) => (
                <li key={service.id}>
                  <Link href={`/service/${service.id}`} className="hover:text-white transition">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-200 text-sm">
              <li className="flex items-center space-x-2">
                <IoLocationSharp className="text-white" />
                <span>{business_address}</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="text-white" />
                <span>{phone}</span>
              </li>
              <li className="flex items-center space-x-2">
                <HiOutlineMail className="text-white" />
                <span>{support_email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-5 text-center text-gray-300 text-sm">
          © {new Date().getFullYear()} Gamma Education Consultancy. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;

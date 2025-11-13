/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { img } from "../constant/imgExport";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";
import { useWebsiteInfo } from "@/providers/websites.providers";

export interface Page {
  id: number;
  name: string;
  slug: string;
  order: number;
}

export interface FeaturedGuideline {
  id: number;
  title: string;
  slug: string;
}

export interface WebsiteData {
  pages: Page[];
  featured_guidelines: FeaturedGuideline[];
}

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathName = usePathname();
  const sidebarRef = useRef<HTMLDivElement>(null);

  const websiteData = useWebsiteInfo();
  const { pages, featured_guidelines: destinationPage, loading }: any = websiteData?.websiteInfo || {};

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsSticky(scrollY > 0);
    setScrolled(scrollY > 50);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setIsSidebarOpen(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth >= 1024) setIsSidebarOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const generateMenuItems = () => {
    const menuItems = [];

    if (destinationPage?.length) {
      menuItems.push({
        id: -1,
        title: "Destination",
        link: "#",
        submenu: destinationPage.map((guideline: any) => ({
          title: guideline.title,
          href: `/destination/${guideline.id}`,
        })),
      });
    }

    if (pages?.length) {
      [...pages]
        .filter((page) => page.name.toLowerCase() !== "home" && page.slug.toLowerCase() !== "home")
        .sort((a, b) => a.order - b.order)
        .forEach((page) =>
          menuItems.push({
            id: page.id,
            title: page.name,
            link: `/${page.slug}`,
            submenu: null,
          }),
        );
    }

    return menuItems;
  };

  const menuItems = generateMenuItems();

  if (loading) {
    return (
      <div className={`${isSticky ? "fixed top-0 left-0 right-0 z-50 bg-white shadow-lg" : "relative"} transition-all duration-300`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300">
          <div className="flex items-center justify-between h-16">
            <div className="w-40 h-8 bg-gray-200 animate-pulse rounded-lg"></div>
            <div className="w-32 h-10 bg-gray-200 animate-pulse rounded-lg"></div>
          </div>
        </nav>
      </div>
    );
  }

  return (
    <div
      className={`
        ${isSticky ? "fixed top-0 left-0 right-0 z-50 backdrop-blur-md" : "relative"} 
        transition-all duration-300
        ${scrolled ? "bg-white/95 shadow-lg border-b border-gray-100" : "bg-white"}
      `}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0" onClick={() => setIsSidebarOpen(false)}>
            <Image src={img?.Logo} alt="Logo" className="w-40 lg:w-44 h-auto transition-all duration-300" priority />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-2">
            {menuItems.map((menu) => {
              const isActive = pathName === menu.link;

              return menu.submenu ? (
                <div key={menu.id} className="relative group">
                  {/* Parent Button */}
                  <button
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
            ${isActive ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"}
          `}>
                    {menu.title}
                    <FaChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                  </button>

                  {/* Dropdown */}
                  <div className="absolute left-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 min-w-[200px] py-2">
                      {menu.submenu.map((sub: any, idx: number) => (
                        <Link
                          key={idx}
                          href={sub.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors first:rounded-t-lg last:rounded-b-lg">
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={menu.id}
                  href={menu.link}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
          ${isActive ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"}
        `}>
                  {menu.title}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Link href="/appointment">
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 hover:from-blue-700 hover:to-purple-700">
                Book Appointment
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <FaBars className="w-5 h-5 text-gray-700" />
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`
          fixed inset-0 z-50 lg:hidden transition-all duration-300
          ${isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300" onClick={() => setIsSidebarOpen(false)} />

        {/* Sidebar Panel */}
        <div
          ref={sidebarRef}
          className={`
            absolute top-0 right-0 w-80 sm:w-96 h-full bg-white shadow-xl transition-transform duration-300 ease-out
            ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}
          `}>
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <Link href="/" className="flex items-center" onClick={() => setIsSidebarOpen(false)}>
              <Image src={img.Logo} alt="Logo" className="w-36 h-auto" priority />
            </Link>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors">
              <FaTimes className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 overflow-y-auto py-6">
            <div className="space-y-2 px-4">
              {menuItems.map((menu) => {
                const isActive = pathName === menu.link;

                return menu.submenu ? (
                  <div key={menu.id} className="rounded-lg overflow-hidden">
                    <button
                      onClick={() => setMobileDropdown(mobileDropdown === menu.id ? null : menu.id)}
                      className={`
                        w-full flex justify-between items-center px-4 py-3 rounded-lg text-left font-medium transition-all duration-200
                        ${isActive ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:bg-gray-50"}
                      `}>
                      {menu.title}
                      <FaChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileDropdown === menu.id ? "rotate-180" : ""}`} />
                    </button>

                    {/* Collapsible Submenu */}
                    <div
                      className={`
                        overflow-hidden transition-all duration-200
                        ${mobileDropdown === menu.id ? "max-h-96" : "max-h-0"}
                      `}>
                      <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-100 pl-4 py-2">
                        {menu.submenu.map((sub: any, idx: any) => (
                          <Link
                            key={idx}
                            href={sub.href}
                            className="block py-2 px-3 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors text-sm"
                            onClick={() => setIsSidebarOpen(false)}>
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={menu.id}
                    href={menu.link}
                    onClick={() => setIsSidebarOpen(false)}
                    className={`
                      block px-4 py-3 rounded-lg font-medium transition-all duration-200
                      ${isActive ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:bg-gray-50"}
                    `}>
                    {menu.title}
                  </Link>
                );
              })}
            </div>

            {/* Mobile CTA Button */}
            <div className="px-4 mt-8">
              <Link href="/appointment">
                <button
                  className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-200 hover:from-blue-700 hover:to-purple-700"
                  onClick={() => setIsSidebarOpen(false)}>
                  Book Appointment
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

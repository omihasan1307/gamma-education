"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { img } from "../constant/imgExport";
import { FaBars } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { menuItems } from "../constant/data";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<number | null>(null);
  const pathName = usePathname();
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => setIsSticky(window.scrollY > 0);

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

  return (
    <div className={`${isSticky ? "fixed top-0 left-0 right-0 z-50 bg-white" : "relative"}`}>
      <nav className="max-w-screen-xl mx-auto transition-all duration-300">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center px-3 ">
            <Image src={img.Logo} alt="Logo" className="w-40" />
          </Link>

          {/* Desktop Menu */}
          <div className="lg:flex items-center space-x-6 hidden">
            {menuItems.map((menu) => {
              const isActive = pathName === menu.link;
              return menu.submenu ? (
                <div key={menu.id} className="relative group z-40">
                  <button
                    className={`uppercase flex items-center gap-1 px-5 text-xs transition 
      ${isActive ? "border-b border-basicColor text-basicColor" : ""}`}>
                    {menu.title}
                    <IoIosArrowDown className="transition-transform group-hover:rotate-180" />
                  </button>

                  <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded z-50">
                    {menu.submenu.map((sub, idx) => (
                      <Link key={idx} href={sub.href} className="block px-4 py-2 text-sm hover:bg-gray-100 whitespace-nowrap">
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={menu.id}
                  href={menu.link}
                  className={`uppercase px-5 text-xs transition 
                    ${isActive ? "border-b border-basicColor text-basicColor" : ""}`}>
                  {menu.title}
                </Link>
              );
            })}
          </div>

          {/* Desktop Button */}
          <Link href="/appointment">
            <button className="hidden lg:inline-block px-6 py-3 rounded-lg bg-gradient-custom text-white font-semibold me-3">Book Appointment</button>
          </Link>

          {/* Mobile Toggle */}
          <div className="lg:hidden block cursor-pointer pe-5" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <FaBars />
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div ref={sidebarRef} className="fixed z-50">
          <div className="fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/3 h-full shadow-[0_10px_300px_-15px_rgba(0,0,0,0.3)] bg-white p-5">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-semibold">Menu</h2>
              <div className="cursor-pointer" onClick={() => setIsSidebarOpen(false)}>
                <IoIosCloseCircle size={28} />
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              {menuItems.map((menu) => {
                const isActive = pathName === menu.link;

                return menu.submenu ? (
                  <div key={menu.id}>
                    <button
                      onClick={() => setMobileDropdown(mobileDropdown === menu.id ? null : menu.id)}
                      className={`w-full flex justify-between items-center uppercase font-semibold py-2 px-4 
                        ${isActive ? "text-basicColor border-b border-basicColor" : ""}`}>
                      {menu.title}
                      <IoIosArrowDown className={`transition-transform ${mobileDropdown === menu.id ? "rotate-180" : ""}`} />
                    </button>

                    {/* Collapsible Submenu */}
                    {mobileDropdown === menu.id && (
                      <div className="ml-4 mt-2 space-y-2">
                        {menu.submenu.map((sub, idx) => (
                          <Link
                            key={idx}
                            href={sub.href}
                            className="block py-1 px-2 hover:bg-gray-200 rounded"
                            onClick={() => setIsSidebarOpen(false)}>
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={menu.id}
                    href={menu.link}
                    onClick={() => setIsSidebarOpen(false)}
                    className={`uppercase font-semibold py-2 px-4 hover:bg-gray-200 rounded 
                      ${isActive ? "text-basicColor border-b border-basicColor" : ""}`}>
                    {menu.title}
                  </Link>
                );
              })}

              <Link href="/appointment">
                <button className="hidden lg:inline-block px-6 py-3 rounded-lg bg-gradient-custom text-white font-semibold me-3">
                  Book Appointment
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

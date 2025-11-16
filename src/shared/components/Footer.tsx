/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

const Footer = () => {
  // const { websiteInfo, loading }: any = useWebsiteInfo();

  // if (loading) {
  //   return <LoadingComponent />;
  // }

  // const { instagram, linkedin, facebook, support_email, phone, business_address, secondary_logo } = websiteInfo?.owner_info || {};

  return (
    <div>
      <footer className="bg-gradient-to-r from-basicColor to-secondaryColor text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src={secondary_logo || img?.Logo} alt="secondary_logo" className="w-40" width={160} height={40} />
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
          </div> */}

          {/* Quick Links */}
          {/* <div>
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
                <Link href="/services" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Services */}
          {/* <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              {websiteInfo?.services?.slice(0, 5)?.map((service: any) => (
                <li key={service.id}>
                  <Link href={`/services/${service.id}`} className="hover:text-white transition">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact Info */}
          {/* <div>
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
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-5 text-center text-gray-300 text-sm">
          © {new Date().getFullYear()} Gama Education Consultancy. All rights reserved.
        </div>
      </footer>

      {/* <div className="max-w-screen-xl mx-auto pt-20">
        <div className="lg:grid grid-cols-2 gap-20 px-4 lg:px-0 ">
          <div className="space-y-5 text-slate-500  pb-5 lg:pb-0 ">
            <div className="flex items-center gap-2">
              <Image src={img.Logo} alt="Logo" className="w-11 md:w-14" />
              <h1 className="text-3xl md:text-4xl mx-2 text-black">Gamma</h1>
            </div>
            <p>
              Crafting innovative software solutions tailored to your business needs. At Gamma Education, we specialize in delivering cutting-edge
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
        <p className="">Copyright &copy; {new Date().getFullYear()} Gamma Education. All rights reserved.</p>
      </div> */}
    </div>
  );
};

export default Footer;

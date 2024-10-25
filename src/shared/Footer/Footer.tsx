import Image from "next/image";
import { img } from "../constant/imgExport";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto py-20">
        <div className="lg:grid grid-cols-3 gap-10 px-10 lg:px-0 ">
          <div className="space-y-5 text-slate-500  pb-5 lg:pb-0">
            <Image src={img.Logo} alt={"logo"} width={150} height={50} />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, qui quo atque et tempore, aspernatur iusto sapiente dolore quisquam, ipsum
              autem neque eveniet
            </p>
            <h2 className="text-xl font-semibold">Follow us</h2>
            <div className="flex space-x-5">
              <Link href={"/"} target="_blank">
                <FaFacebookF className=" w-10 h-10 border p-2 rounded bg-gradient-custom text-white " />
              </Link>
              <Link href={"/"} target="_blank">
                <FaLinkedinIn className=" w-10 h-10 border p-2 rounded bg-gradient-custom text-white " />
              </Link>
              <Link href={"/"} target="_blank">
                <FaInstagram className=" w-10 h-10 border p-2 rounded bg-gradient-custom text-white " />
              </Link>
            </div>
          </div>

          <div className="col-span-2 lg:space-y-0 space-y-5 lg:grid grid-cols-3 ">
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
              <p className="text-xl font-semibold pb-2 border-b-2 w-28 border-basicColor">Services</p>
              <ul className="space-y-5 text-slate-500">
                <li className="flex space-x-3 items-center hover:text-basicColor hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
                  <span>UI/UX Design</span>
                </li>
                <li className="flex space-x-3 items-center hover:text-basicColor hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
                  <span>App Development</span>
                </li>
                <li className="flex space-x-3 items-center hover:text-basicColor hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
                  <span>Web Development</span>
                </li>
                <li className="flex space-x-3 items-center hover:text-basicColor hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
                  <span>Digital Marketing</span>
                </li>
                <li className="flex space-x-3 items-center hover:text-basicColor hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
                  <span>Motion Graphics</span>
                </li>
              </ul>
            </div>
            <div className="space-y-10">
              <p className="text-xl font-semibold pb-2 border-b-2 w-28 border-basicColor">Information</p>

              <ul className="space-y-5 text-slate-500">
                <li className="flex space-x-3 items-center hover:text-basicColor hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
                  <span>Working Process</span>
                </li>
                <li className="flex space-x-3 items-center hover:text-basicColor hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
                  <span>Privacy Policy</span>
                </li>
                <li className="flex space-x-3 items-center hover:text-basicColor hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
                  <span>Terms & Conditions</span>
                </li>
                <li className="flex space-x-3 items-center hover:text-basicColor hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
                  <span>Faqs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-10" />
        <div className="text-center">
          <p>Copyright © {new Date().getFullYear()} Binary Hooks. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

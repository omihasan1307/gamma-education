import { Metadata } from "next";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaMapMarkerAlt, FaRegPaperPlane } from "react-icons/fa";
import ContactForm from "./ContactForm";
import Link from "next/link";
import { getWebsite } from "@/actions/get/get.action";
import SectionHeader from "@/shared/common/SectionHeader";
import { RiServiceFill } from "react-icons/ri";

export const metadata: Metadata = {
  title: "Contact | Binary Hooks",
  description: "Contact | Binary Hooks",
};

const ContactPage = async () => {
  const { data: websiteData } = await getWebsite();
  const { support_email, secondary_business_address, phone } = websiteData?.owner_info || {};

  return (
    <div className="bg-grayColor dark:bg-gradient-custom-dark">
      <div className="bg-gradient-custom-light dark:bg-gradient-custom-dark flex items-center text-center justify-center py-10 px-5 flex-col space-y-5">
        <SectionHeader text="Contact Us" icon={RiServiceFill} />
        <div className="text-5xl leading-tight">
          Contact with <span className="font-bold hover:text-sk"> BinaryHooks </span>
        </div>
        <p className="text-gray-500">Get your dream come true by our excellent need</p>
      </div>
      <div className="max-w-screen-xl mx-auto py-16 px-2">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="mt-10">
            <h2 className="text-2xl lg:text-3xl font-bold  text-left">GET CLOSER</h2>

            <div className="p-1 my-5 bg-gradient-custom rounded-lg w-48"></div>

            <p className="my-10">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
              et magnis dis parturient montes.
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
                <Link href={"#"}>
                  <FaFacebook className="text-basicColor opacity-80 hover:opacity-100 duration-300 w-[25px] h-[50px]" />
                </Link>
                <Link href={"#"}>
                  <FaInstagram className="text-basicColor opacity-80 hover:opacity-100 duration-300 w-[25px] h-[50px]" />
                </Link>
                <Link href={"#"}>
                  <FaTwitter className="text-basicColor opacity-80 hover:opacity-100 duration-300 w-[25px] h-[50px]" />
                </Link>
                <Link href={"#"}>
                  <FaYoutube className="text-basicColor opacity-80 hover:opacity-100 duration-300 w-[25px] h-[50px]" />
                </Link>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

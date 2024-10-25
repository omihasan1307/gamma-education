import { Metadata } from "next";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaRegPaperPlane,
} from "react-icons/fa";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Binary Hooks",
  description: "Contact | Binary Hooks",
};

const ContactPage = () => {
  return (
    <div className="bg-[#F7F8FA]">
      <div className="max-w-screen-xl mx-auto py-28 px-2">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold  text-left">
              GET CLOSER
            </h2>

            <div className="p-1 my-5 bg-gradient-to-r from-[#01ACD6] via-blue-400 to-[#24B15F] rounded-lg w-40"></div>

            <p className="my-10">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes.
            </p>

            <div className="grid lg:grid-cols-2 lg:place-content-center lg:gap-10 my-10">
              <div className="flex items-center mb-10 lg:mb-12">
                <FaMapMarkerAlt className="text-basicColor w-[40px] h-[40px]" />

                <div className="ms-5">
                  <p className=" text-xl font-bold mb-2">LOCATION</p>
                  <p>Jl. Pantai Kuta No.34, Badung, Bali</p>
                </div>
              </div>

              <div className="flex items-center lg:mb-16 mb-10">
                <FaRegPaperPlane className="text-basicColor w-[40px] h-[40px]" />
                <div className="ms-5">
                  <p className=" text-xl font-bold mb-2">EMAIL</p>
                  <p>binaryhooks@gmail.com</p>
                  <p>01862404050</p>
                </div>
              </div>
            </div>

            <div className="p-1 bg-gradient-to-r from-[#01ACD6] via-blue-400 to-[#24B15F] rounded-lg"></div>

            <div className="my-6 grid lg:grid-cols-3 lg:place-content-center items-center">
              <div className="col-span-2 text-2xl  font-bold">
                OUR SOCIAL MEDIA
              </div>
              <div className="flex space-x-10 lg:space-x-5">
                <FaFacebook className="text-basicColor w-[25px] h-[50px]" />
                <FaInstagram className="text-basicColor w-[25px] h-[50px]" />
                <FaTwitter className="text-basicColor w-[25px] h-[50px]" />
                <FaYoutube className="text-basicColor w-[25px] h-[50px]" />
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

// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Contact | Binary Hooks",
//   description: "Contact | Binary Hooks",
// };

// const ContactPage = () => {
//   return (
//     <div className="bg-[#F7F8FA]">
//     <div className="max-w-screen-xl mx-auto py-28 ">

//       hlw
//     </div>
//   </div>
//   );
// };

// export default ContactPage;

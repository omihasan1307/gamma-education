import { Metadata } from "next";
import ContactForm from "./ContactForm";

import SectionHeader from "@/shared/components/SectionHeader";
import { RiServiceFill } from "react-icons/ri";
import ContactDetails from "./ContactDetails";

export const metadata: Metadata = {
  title: "Contact | Binary Hooks",
  description: "Contact | Binary Hooks",
};

const ContactPage = async () => {
  return (
    <div className="bg-grayColor dark:bg-gradient-custom-dark">
      <div className="bg-gradient-custom-light dark:bg-gradient-custom-dark flex items-center text-center justify-center py-10 px-5 flex-col space-y-5">
        <SectionHeader text="Contact Us" icon={RiServiceFill} />
        <div className="text-5xl leading-tight">
          Reach out to <span className="font-bold hover:text-sk">BinaryHooks</span>
        </div>
        <p className="text-gray-500">Let&apos;s create something amazing together.</p>
      </div>

      <div className="max-w-screen-xl mx-auto py-16 px-2">
        <div className="grid lg:grid-cols-2 gap-20">
          <ContactDetails />

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

import { Metadata } from "next";
import SectionHeader from "@/shared/components/SectionHeader";
import { RiServiceFill } from "react-icons/ri";
import ContactDetails from "./ContactDetails";

export const metadata: Metadata = {
  title: "Contact | Gamma Education",
  description: "Contact | Gamma Education",
};

const ContactPage = async () => {
  return (
    <div>
      <SectionHeader text="Get in Touch" icon={RiServiceFill} description="We'd love to hear from you. Let’s create something amazing together." />
      <ContactDetails />
    </div>
  );
};

export default ContactPage;

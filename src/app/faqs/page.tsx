import { Metadata } from "next";
import FaqsSection from "./FaqsSection";

export const metadata: Metadata = {
  title: "Faqs || Binary Hooks",
  description: "Faqs || Binary Hooks",
};

const Faqs = () => {
  return <FaqsSection />;
};

export default Faqs;

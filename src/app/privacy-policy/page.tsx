import PrivacyPolicySection from "./PrivacyPolicySection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy || Binary Hooks",
  description: "Privacy Policy || Binary Hooks",
};

const PrivacyPolicyPage = async () => {
  return <PrivacyPolicySection />;
};

export default PrivacyPolicyPage;

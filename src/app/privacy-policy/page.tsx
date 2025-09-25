import PrivacyPolicySection from "./PrivacyPolicySection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy || Gamma Education",
  description: "Privacy Policy || Gamma Education",
};

const PrivacyPolicyPage = async () => {
  return <PrivacyPolicySection />;
};

export default PrivacyPolicyPage;

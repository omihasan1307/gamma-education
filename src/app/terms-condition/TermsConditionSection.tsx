/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";

import { useWebsiteInfo } from "@/providers/websites.providers";
import LoadingComponent from "@/shared/components/LoadingComponent";
import { ELanguage } from "@/shared/enums/language.enum";

const TermsConditionSection = () => {
  const [activeTab, setActiveTab] = useState(ELanguage.ENGLISH);
  const { websiteInfo, loading }: any = useWebsiteInfo();
  const { privacy_and_policy_page } = websiteInfo?.generics || {};

  if (loading) {
    return <LoadingComponent />;
  }

  const content = privacy_and_policy_page?.PrivacyAndPolicySection2?.items.find((item: any) => item.title === activeTab) || {};

  return (
    <div>
      <div className="bg-gradient-custom-light dark:bg-gradient-custom-dark flex items-center text-center justify-center py-10 px-5 flex-col space-y-5">
        <div className="text-5xl leading-tight">
          Gamma <span className="font-bold ">Terms & Conditions</span>
          <div
            className="text-gray-500 lg:w-full text-sm text-center pt-5"
            dangerouslySetInnerHTML={{ __html: privacy_and_policy_page?.PrivacyAndPolicySection2?.description }}></div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto py-20">
        <div className="flex justify-center space-x-4">
          <button
            className={`w-28 px-4 py-2 text-lg font-medium rounded-lg ${
              activeTab === ELanguage.BANGLA ? "bg-gradient-custom text-white font-semibold" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab(ELanguage.BANGLA)}>
            বাংলা
          </button>
          <button
            className={`w-28 px-4 py-2 text-lg font-medium rounded-lg ${
              activeTab === ELanguage.ENGLISH ? "bg-gradient-custom text-white font-semibold" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab(ELanguage.ENGLISH)}>
            English
          </button>
        </div>

        {/* Content Section */}
        <div className="mt-10 text-center text-xl">
          <h2 className="text-2xl font-bold">{content.subtitle}</h2>
          <div className="mt-5 text-gray-600 text-left">
            {content.description ? <div dangerouslySetInnerHTML={{ __html: content.description }} /> : "No content available for this language."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditionSection;

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useWebsiteInfo } from "@/providers/websites.providers";
import LoadingComponent from "@/shared/components/LoadingComponent";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FaqsSection = () => {
  const { websiteInfo, loading }: any = useWebsiteInfo();
  const { privacy_and_policy_page } = websiteInfo?.generics || {};
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <div>
      <div className="bg-gradient-custom-light dark:bg-gradient-custom-dark flex items-center text-center justify-center py-10 px-5 flex-col space-y-5">

        <div className="text-5xl leading-tight">
          Gamma <span className="font-bold ">FAQS</span>
          <div
            className="text-gray-500 lg:w-full text-sm text-center pt-5"
            dangerouslySetInnerHTML={{ __html: privacy_and_policy_page?.PrivacyAndPolicySection3?.description }}></div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto py-20">
        <div className="mt-10 space-y-8">
          {privacy_and_policy_page?.PrivacyAndPolicySection3?.items?.map((faq: any, index: number) => (
            <div key={index} className="border-b pb-5 space-y-3">
              <button
                onClick={() => handleToggle(index)}
                className="text-lg font-semibold text-gray-800 w-full text-left flex justify-between items-center">
                {faq.title}
                {expandedIndex === index ? <FaChevronUp className="text-gray-600" /> : <FaChevronDown className="text-gray-600" />}
              </button>
              {expandedIndex === index && (
                <div
                  className="mt-3 text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: faq.description,
                  }}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqsSection;

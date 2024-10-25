
import { Metadata } from "next";
import InquieryForm from "./InquieryForm";

export const metadata: Metadata = {
  title: "Inquiry | Binary Hooks",
  description: "Inquiry | Binary Hooks",
};

const InquiryPage = () => {
  return (
    <div className=" bg-grayColor">
      <div className="max-w-screen-xl mx-auto py-28 space-y-20">
        <div className="text-center space-y-4 ">
          <p className="text-5xl font-semibold">Let’s make a deal together</p>
          <p className="text-gray-500">
            Have you considered the advantages of partnering with Cansaas?{" "}
            <br /> Don&apos;t hesitate to share your ideas below! Or{" "}
            <span className="text-basicColor underline">
              just book a meeting.
            </span>
          </p>
        </div>
        <div>
          <InquieryForm />
        </div>
      </div>
    </div>
  );
};

export default InquiryPage;

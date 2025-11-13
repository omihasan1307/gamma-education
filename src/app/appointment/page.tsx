export const dynamic = "force-dynamic";

import { Metadata } from "next";
import InquieryForm from "./InquieryForm";

export const metadata: Metadata = {
  title: "Appointment | Gamma Education",
  description: "Appointment | Gamma Education",
};

const InquiryPage = () => {
  return (
    <div >
      <div className="max-w-screen-xl mx-auto py-28 space-y-10">
        <div className="flex-1 text-center md:text-left space-y-6">
          <p className="text-sm uppercase tracking-widest text-basicColor">Book Your Appointment</p>

          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Let’s Schedule a <span className="text-basicColor">Meeting</span>
          </h2>

          <p className="text-gray-300 text-lg">
            Ready to take the next step? Book a one-on-one appointment with our team to discuss your goals and ideas. We’re here to help you get
            started.
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

import { RiServiceFill } from "react-icons/ri";

import SectionHeader from "@/shared/components/SectionHeader";

const TermsAndCondition = () => {
  return (
    <div>
      <div className="bg-gradient-custom-light dark:bg-gradient-custom-dark flex items-center text-center justify-center py-10 px-5 flex-col space-y-5">
        <SectionHeader text="Terms & Conditions" icon={RiServiceFill} />
        <div className="text-5xl leading-tight">
          BinaryHooks <span className="font-bold hover:text-sk"> Terms & Conditions</span>
        </div>
        <p className="text-gray-500">
          By accessing or using our services, you agree to abide by our terms and conditions. These guidelines ensure a safe and professional
          environment for all our users.
        </p>
      </div>
    </div>
  );
};

export default TermsAndCondition;

import { LuBadgeDollarSign } from "react-icons/lu";
import { MdOutlineSettings, MdOutlineSupportAgent } from "react-icons/md";

const stages = [
  {
    id: 1,
    icon: MdOutlineSettings ,
    title: "Highly Expert Team",
    description: "We provide the most responsive and functional IT design",
  },
  {
    id: 2,
    icon: MdOutlineSupportAgent,
    title: "24/7 Customer Service",
    description: "We provide the most responsive and functional IT design.",
  },
  {
    id: 3,
    icon: LuBadgeDollarSign ,
    title: "Competitive Pricing",
    description: "We provide the most responsive and functional IT design",
  },
];

const SecondarySection = () => {
  return (
    <div className="max-w-screen-xl mx-auto text-center px-2">
      <div className="mt-10 grid gap-10 md:grid-cols-3">
        {stages.map((stage) => (
          <div key={stage.id} className="flex items-center gap-5 ">
            <stage.icon className=" rounded-lg bg-[#EEF1FF] w-24 h-24 py-4 px-4" />
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-4">{stage.title}</h3>
              <p className="">{stage.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondarySection;

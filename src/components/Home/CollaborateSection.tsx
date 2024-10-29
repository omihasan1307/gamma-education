import SectionHeader from "@/shared/common/SectionHeader";
import { IoBagOutline } from "react-icons/io5";
import { FaLightbulb, FaUsers, FaRocket } from "react-icons/fa";

const stages = [
  {
    id: 1,
    icon: FaLightbulb,
    title: "Startups",
    description:
      "You've got the concept, the roadmap, and even potential backers. Now you need the team to build your brand, develop your plan, and turn it into reality. That’s when we start to collaborate!",
  },
  {
    id: 2,
    icon: FaUsers,
    title: "Incubators",
    description:
      "Building successful businesses with winning products is your specialty. Imagine how much easier it would be to tap into a proven product development team instead of starting from scratch.",
  },
  {
    id: 3,
    icon: FaRocket,
    title: "Companies",
    description:
      "Your product is ready for the next level, and scaling your in-house team feels like climbing a mountain. That's why we're here to help you find the missing pieces to take it further.",
  },
];

const CollaborateSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-28 text-center px-2">
      <div className="flex items-center justify-center flex-col space-y-5">
        <SectionHeader text="When to Collaborate" icon={IoBagOutline} />
        <p className="text-5xl font-bold leading-tight">Which Stage Are You?</p>
        <p className="text-gray-500">We offer design services for businesses of all sizes and stages</p>
      </div>

      <div className="mt-20 grid gap-5 md:grid-cols-3">
        {stages.map((stage) => (
          <div
            key={stage.id}
            className={` text-left rounded-2xl p-8 shadow-lg text-white transition duration-300 hover:shadow-xl ${
              stage.id === 1 ? "bg-[#37a0bd]" : stage.id === 2 ? "bg-[#23b163be]" : "bg-[#E8EDE8] text-gray-700"
            }`}>
            <stage.icon className="text-4xl" />
            <h3 className="text-2xl font-bold my-4">{stage.title}</h3>
            <p className="">{stage.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollaborateSection;

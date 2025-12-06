import { IconType } from "react-icons";

interface SectionHeaderProps {
  text: string;
  description: string;
  icon?: IconType;
}

const SectionHeader = ({ text, description, icon: Icon }: SectionHeaderProps) => {
  return (
    <div className="relative bg-[url(../../assets/stu.jpg)] bg-cover bg-center bg-no-repeat w-full h-full flex items-center justify-center">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 from-[#001524]/95 to-[#11001c]/25 bg-gradient-to-t md:bg-gradient-to-r"></div>

      {/* Centered Content */}
      <div className="relative mx-auto max-w-screen-xl text-center px-4 py-32 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center text-white">
          <h1 className="text-4xl font-extrabold flex items-center justify-center gap-2">
            {Icon && <Icon className="text-yellow-500" />}
            <span>{text}</span>
          </h1>
          <p className="mt-4 max-w-lg mx-auto sm:text-xl/relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;

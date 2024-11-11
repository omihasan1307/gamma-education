import { IconType } from "react-icons";

interface SectionHeaderProps {
  text: string;
  icon?: IconType;
}

const SectionHeader = ({ text, icon: Icon }: SectionHeaderProps) => {
  return (
    <div className="relative">
      <div className="absolute top-1 -inset-1 rounded-full bg-gradient-custom-light dark:bg-gradient-custom-dark opacity-75 blur"></div>
      <div className="relative shadow px-4 py-1 rounded-full flex items-center gap-1 bg-white dark:bg-black">
        {Icon && <Icon className="text-yellow-500" />}
        <p>{text}</p>
      </div>
    </div>
  );
};

export default SectionHeader;

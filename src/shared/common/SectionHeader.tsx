import { IconType } from 'react-icons';

interface SectionHeaderProps {
  text: string;
  icon?: IconType; 
}

const SectionHeader = ({ text, icon: Icon }: SectionHeaderProps) => {
  return (
    <div className="shadow px-4 py-1 rounded-full flex items-center gap-1 bg-white">
      {Icon && <Icon className="text-yellow-500" />} 
      <p>{text}</p>
    </div>
  );
};

export default SectionHeader;

import Image from "next/image";
import ami from "@/../assets/omi.jpg";
import tertha from "@/../assets/tds.jpg";
import moon from "@/../assets/moon.jpg";
import anik from "@/../assets/anik.jpg";
import { FaFacebook, FaInstagram } from "react-icons/fa";
const teamMember = [
  {
    name: "Ami Hasan",
    role: "Front-end Developer",
    image: ami,
    socialMedia: [
      { icon: FaFacebook, link: "https://www.facebook.com/johndoe" },
      { icon: FaInstagram, link: "https://www.instagram.com/johndoe" },
    ],
  },
  {
    name: "Dev Teertha",
    role: "Fullstack Developer",
    image: tertha,
    socialMedia: [
      { icon: FaFacebook, link: "https://www.facebook.com/johndoe" },
      { icon: FaInstagram, link: "https://www.instagram.com/johndoe" },
    ],
  },
  {
    name: "Moon",
    role: "Back-end Developer",
    image: moon,
    socialMedia: [
      { icon: FaFacebook, link: "https://www.facebook.com/johndoe" },
      { icon: FaInstagram, link: "https://www.instagram.com/johndoe" },
    ],
  },

  {
    name: "Anik Datta",
    role: "Front-end Developer",
    image: anik,
    socialMedia: [
      { icon: FaFacebook, link: "https://www.facebook.com/johndoe" },
      { icon: FaInstagram, link: "https://www.instagram.com/johndoe" },
    ],
  },
];

const TeamMemberPage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-28 px-2">
      {teamMember?.map((member, index) => (
        <div key={index} className="relative photoGallery">
          <Image src={member.image} alt={member.name} width={500} height={300} className="rounded-lg teamMemberImg" />

          <div className="photoText absolute top-0 w-full h-full flex flex-col justify-between ">
            <h1 className="absolute px-5 py-5 text-2xl font-bold bottom-0 uppercase ">{member.name}</h1>{" "}
            <div className="relative flex flex-col items-end justify-between py-5 h-full   ">
              <h1 className="-rotate-90 my-16 -me-8 ">{member.role}</h1>
              <div className="flex flex-col me-6  space-y-6 text-basicColor ">
                {member.socialMedia.map((social, i) => (
                  <a key={i} href={social.link} target="_blank" rel="noopener noreferrer">
                    <social.icon className="w-6 h-6 cursor-pointer" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamMemberPage;

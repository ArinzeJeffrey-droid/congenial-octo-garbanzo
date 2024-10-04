import React from "react";
import Image, { StaticImageData } from "next/image";
import Dwight from "@/public/images/dwight.png";
import Pam from "@/public/images/pam.png";
import Michael from "@/public/images/michael.png";

interface TeamMemberProps {
  image: StaticImageData;
  name: string;
  title: string;
}

const TeamMember = ({ image, name, title }: TeamMemberProps) => (
  <div className="flex flex-col">
    <div className="w-full aspect-square mb-4 overflow-hidden rounded-3xl">
      <Image src={image} alt={name} className="w-full h-full object-cover" />
    </div>

    <h3 className="text-2xl font-medium text-gray-900 mb-3">{name}</h3>
    <p className="text-[#777777] text-xl">{title}</p>
  </div>
);

const Team = () => {
  const teamMembers = [
    {
      image: Michael,
      name: "Michael Scott",
      title: "General Manager",
    },
    {
      image: Dwight,
      name: "Dwight Schrute",
      title: "General Manager",
    },
    {
      image: Pam,
      name: "Pam Beetsley",
      title: "General Manager",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            image={member.image}
            name={member.name}
            title={member.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;

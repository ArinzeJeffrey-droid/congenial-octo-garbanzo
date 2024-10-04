import React from "react";
import Image, { StaticImageData } from "next/image";
import Committed from "@/public/images/committed.png";
import Responsible from "@/public/images/responsible.png";
import Progress from "@/public/images/progress.png";

interface ValueItemProps {
  icon: StaticImageData;
  title: string;
  description: string;
}

const ValueItem = ({ icon, title, description }: ValueItemProps) => (
  <div className="flex gap-12 mb-16">
    <div className="flex-shrink-0">
      <Image src={icon} alt="" className="w-36 h-36 rounded-3xl" />
    </div>

    <div>
      <h3 className="text-white text-2xl font-medium mb-2">{title}</h3>
      <p className="text-white leading-relaxed">{description}</p>
    </div>
  </div>
);

const Values = () => {
  const values = [
    {
      icon: Committed,
      title: "We are committed.",
      description:
        "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.",
    },
    {
      icon: Responsible,
      title: "We are responsible.",
      description:
        "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.",
    },
    {
      icon: Progress,
      title: "We aim for progress.",
      description:
        "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.",
    },
  ];

  return (
    <div className="bg-[#0A2640] pt-24 pb-16 px-8">
      <div className="max-w-3xl mx-auto mb-20">
        <p className="text-white text-sm mb-4">Our values</p>
        <h2 className="text-white text-4xl font-medium mb-6">
          Things in we believe
        </h2>
        <p className="text-white text-lg leading-relaxed">
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {values.map((value, index) => (
          <ValueItem
            key={index}
            icon={value.icon}
            title={value.title}
            description={value.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Values;

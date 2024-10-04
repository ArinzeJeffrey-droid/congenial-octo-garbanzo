import React from "react";

interface StatItemProps {
  number: string;
  title: string;
}

const StatItem = ({ number, title }: StatItemProps) => (
  <div className="text-center">
    <div className="text-[#4FE9A4] text-6xl font-medium mb-2">{number}</div>
    <div className="text-gray-300 text-sm">{title}</div>
  </div>
);

const Stats = () => {
  return (
    <div className="bg-[#0A2640] py-24 px-8">
      <div className="text-center mb-16">
        <p className="text-gray-300 mb-4">Our numbers</p>
        <h2 className="text-white text-4xl max-w-2xl mx-auto font-medium leading-tight">
          Handshake infographic mass market crowdfunding iteration.
        </h2>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
        <StatItem number="120m" title="Cool feature title" />
        <StatItem number="10,000" title="Cool feature title" />
        <StatItem number="240" title="Cool feature title" />
      </div>
    </div>
  );
};

export default Stats;

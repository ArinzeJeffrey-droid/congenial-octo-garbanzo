import React from "react";
import Logo from "@/public/LogoDark.svg";
import Image from "next/image";

const landingLinks = [
  {
    name: "Home",
    path: "#",
  },
  {
    name: "Products",
    path: "#",
  },
  {
    name: "Services",
    path: "#",
  },
];

const companyLinks = [
  {
    name: "Home",
    path: "#",
  },
  {
    name: "Careers",
    path: "#",
  },
  {
    name: "Services",
    path: "#",
  },
];

const resourceLinks = [
  {
    name: "Blog",
    path: "#",
  },
  {
    name: "Products",
    path: "#",
  },
  {
    name: "Services",
    path: "#",
  },
];

const Footer = () => {
  return (
    <footer className="py-8 px-24">
      <div className="mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full">
            <a href="#" className="mb-10 block">
              <Image
                src={Logo}
                className="h-10"
                alt="Boldo Edgar Allen"
                height={42}
              />
            </a>
            <p className="text-[#777777] mb-16">
              Social media validation business model <br /> canvas graphical
              user interface launch <br /> party creative facebook iPad twitter.
            </p>
            <p className="text-[#777777]">All rights reserved.</p>
          </div>

          <div className="">
            <div className="flex flex-col md:flex-row gap-24 w-full">
              <div>
                <h4 className="font-bold text-black mb-8">Landings</h4>
                <ul className="text-[#777777]">
                  {landingLinks.map((link, index) => (
                    <li key={index} className="mb-7">
                      <a href={link.path}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-8">Company</h4>
                <ul className="text-[#777777]">
                  {companyLinks.map((link, index) => (
                    <li key={index} className="mb-7">
                      <a href={link.path}>
                        {link.name}
                        {link.name === "Careers" && (
                          <span className="ml-2 bg-[#65E4A3] text-[#0A2640] text-xs font-bold px-3 py-1 rounded-full">
                            Hiring!
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-8">Resources</h4>
                <ul className="text-[#777777]">
                  {resourceLinks.map((link, index) => (
                    <li key={index} className="mb-7">
                      <a href={link.path}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

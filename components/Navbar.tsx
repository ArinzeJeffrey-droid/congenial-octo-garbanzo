import Logo from "@/public/Logo.svg";
import Image from "next/image";

const navLinks = [
  {
    name: "Products",
    path: "#",
  },
  {
    name: "Services",
    path: "#",
  },
  {
    name: "About",
    path: "#",
  },
];

const Navbar = () => {
  return (
    <nav className="flex items-center mb-[72px]">
      <a href="#" className="flex-1">
        <Image
          src={Logo}
          className="h-10"
          alt="Boldo Edgar Allen"
          height={42}
        />
      </a>
      <ul className="flex items-center gap-10">
        {navLinks.map(({ name, path }) => (
          <li key={name} className="font-semibold">
            <a href={path}>{name}</a>
          </li>
        ))}
        <li>
          <button className="bg-white font-semibold rounded-3xl text-[#0A2640] px-10 py-2">
            Sign Up
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

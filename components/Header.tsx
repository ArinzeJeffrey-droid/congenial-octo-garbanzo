import Hero from "./Hero";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="bg-[#0A2640] text-white px-24 pt-14 h-[612px]">
      <Navbar />
      <Hero />
    </header>
  );
};

export default Header;

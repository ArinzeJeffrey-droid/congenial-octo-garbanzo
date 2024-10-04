import Ellipse from "@/public/Ellipse.svg";

const CallToAction = () => {
  return (
    <div
      className="bg-[#0A2640] rounded-xl py-[72px] bg-right-top bg-no-repeat"
      style={{ backgroundImage: `url(${Ellipse.src})` }}
    >
      <h2 className="text-center text-5xl text-white mb-12">
        An enterprise template to ramp <br /> up your company website
      </h2>
      <div className="flex flex-col md:flex-row gap-6 justify-center max-w-3xl mx-auto">
        <input
          type="text"
          placeholder="Your email address"
          className="h-14 flex-1 rounded-3xl placeholder:text-black px-7"
        />
        <button className="bg-[#65E4A3] text-[#0A2640] text-xl font-bold py-4 px-8 rounded-3xl hover:bg-[#40D48A] transition-all duration-300">
          Start now
        </button>
      </div>
    </div>
  );
};

export default CallToAction;

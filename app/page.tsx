import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import ImageGallery from "@/components/ImageGallery";
import Intro from "@/components/Intro";
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import Values from "@/components/Values";
import Image1 from "@/public/images/image1.png";
import Image2 from "@/public/images/image2.png";
import Image3 from "@/public/images/image3.png";
import Image4 from "@/public/images/image4.png";
import Image5 from "@/public/images/image5.png";

const images = [Image1, Image2, Image3, Image4, Image5];

export default function Home() {
  return (
    <main className="px-24--">
      <div className="mb-32 md:-mt-32 mx-auto w-[60%]">
        <ImageGallery images={images} />
      </div>

      <div className="mb-24 flex flex-col items-center px-6 md:px-0">
        <Intro
          eyebrow="Our story"
          title="Handshake infographic mass market crowdfunding iteration."
          content="Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. Sales user experience branding growth hacking holy grail monetization conversion prototype stock network effects. Learning curve network effects return on investment bootstrapping business-to-consumer."
        />
      </div>

      <div className="mb-24">
        <Stats />
      </div>

      <div className="mb-12 flex flex-col items-center px-6 md:px-0">
        <Intro
          eyebrow="Our team"
          title="The leadership team"
          content="Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus."
        />
      </div>

      <div className="mb-32">
        <Team />
      </div>

      <div className="mb-32">
        <Values />
      </div>

      <div className="mb-20 px-5 md:px-24">
        <CallToAction />
      </div>

      <Footer />
    </main>
  );
}

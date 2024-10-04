interface IntroProps {
  eyebrow: string;
  title: string;
  content: string;
}

const Intro = ({ eyebrow, title, content }: IntroProps) => {
  return (
    <div className="max-w-3xl">
      <p className="font-medium text-[#777777] mb-3">{eyebrow}</p>
      <h1 className="text-5xl font-medium text-gray-900 mb-5 tracking-tight">
        {title}
      </h1>
      <p className="text-lg leading-relaxed text-[#777777]">{content}</p>
    </div>
  );
};

export default Intro;

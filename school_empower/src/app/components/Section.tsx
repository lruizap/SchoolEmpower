// components/Section.tsx

interface SectionProps {
  label?: string;
  title?: string;
  description?: string;
}

const Section: React.FC<SectionProps> = ({ label, title, description }) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-rows-1 w-1/2">
        <p className="text-[#8D5CF6] text-lg font-semibold">{label}</p>
        <h2 className="text-4xl font-bold my-4 pb-5">{title}</h2>
        <p className="text-balance">{description}</p>
      </div>
    </div>
  );
};

export default Section;

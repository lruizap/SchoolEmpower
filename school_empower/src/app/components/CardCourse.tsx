// components/CardCourse.tsx

import Image from "next/image";

interface CardCourseProps {
  icon: string;
  label: string;
  description: string;
}

const CardCourse: React.FC<CardCourseProps> = ({
  label,
  icon,
  description,
}) => {
  return (
    <div className="text-center bg-white p-6 shadow-md max-w-xs">
      <Image
        alt={`${label}`}
        src={`${icon}`}
        width={72}
        height={72}
        className="mx-auto mb-4"
      />
      <h1 className="text-black font-bold py-5">{label}</h1>
      <Image
        alt="orange separator"
        src={"/svg/orange-separator.svg"}
        width={50}
        height={2}
        className="mx-auto mb-4"
      />
      <p className="text-black py-5">{description}</p>
    </div>
  );
};

export default CardCourse;

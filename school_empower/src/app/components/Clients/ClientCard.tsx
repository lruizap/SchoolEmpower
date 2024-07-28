// components/Clients/ClientCard.tsx

import Image from "next/image";
import { FaStar } from "react-icons/fa";

interface ClientProps {
  img: string;
  description: string;
  rating: number;
  name: string;
  job: string;
}

const ClientCard: React.FC<ClientProps> = ({
  img,
  description,
  rating,
  name,
  job,
}) => {
  return (
    <div className="text-center bg-white p-6 shadow-md max-w-sm">
      <div className="flex justify-center m-5">
        <Image alt={`${name}`} src={`${img}`} width={128} height={128} />
      </div>
      <p className="m-5 text-balance text-black">{`${description}`}</p>
      <div className="rating-component">
        <div className="flex justify-center ">
          {Array.from({ length: 5 }, (_, index) => (
            <FaStar
              key={index}
              size={22.1}
              color={index < rating ? "#ffc107" : "#e4e5e9"}
            />
          ))}
        </div>
      </div>
      <p className="mt-5 mb-2 font-bold text-balance text-black">{`${name}`}</p>
      <p className="mb-2 font-semibold text-balance text-black">{`${job}`}</p>
    </div>
  );
};

export default ClientCard;

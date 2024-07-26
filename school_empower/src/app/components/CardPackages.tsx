// components/CardPackages.tsx

import Image from "next/image";
import { FaDownload, FaStar } from "react-icons/fa";

// Components

import Button from "./Button";

interface CardPackagesProps {
  image: string;
  title: string;
  description: string;
  price: string;
  salePrice: string;
  rating: string;
  sales: string;
}

const CardPackages: React.FC<CardPackagesProps> = ({
  image,
  title,
  description,
  price,
  salePrice,
  rating,
  sales,
}) => {
  return (
    <div className="bg-white shadow-md">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          className="object-cover"
          width={400}
          height={160}
        />
        <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          Sale
        </div>
        <div className="absolute bottom-5 w-full flex justify-center">
          <div className="grid grid-cols-3 gap-2">
            <div className="flex justify-center">
              <Image
                alt="like"
                src={"/svg/like.svg"}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center">
              <Image
                alt="shopping cart"
                src={"/svg/shop.svg"}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center">
              <Image
                alt="eye"
                src={"/svg/eye.svg"}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[#8D5CF6] text-sm font-semibold">Welcome</span>
          <div className="flex items-center bg-sky-950 rounded-full p-1 pr-2">
            <FaStar className="ml-1 text-yellow-500 pr-1" />
            <span className="text-sm font-semibold">{rating}</span>
          </div>
        </div>
        <h3 className="text-start text-black text-lg font-bold mb-2">
          {title}
        </h3>
        <p className="text-start text-gray-600 mb-2">{description}</p>
        <div className="flex items-center mb-4">
          <FaDownload className="text-gray-500 mr-2" />
          <span className="text-gray-800 text-sm">{sales} Sales</span>
        </div>
        <div className="flex items-center mb-4">
          <span className="text-gray-500 line-through mr-2">${price}</span>
          <span className="text-red-500 text-xl font-bold">${salePrice}</span>
        </div>
        <div className="flex items-center py-5">
          <Button
            label="Learn More"
            arrow
            background="bg-transparent"
            textColor="text-[#8D5CF6]"
            rounded="rounded-full"
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default CardPackages;

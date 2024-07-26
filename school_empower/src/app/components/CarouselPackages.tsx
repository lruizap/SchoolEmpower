"use client";
import Slider from "react-slick";

// Component
import CardPackages from "./CardPackages";

// Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const packages = [
  {
    key: "1",
    image: "/img/product-cover-1.png",
    title: "Training Courses",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    price: "16.48",
    salePrice: "6.48",
    rating: "4.9",
    sales: "15",
  },
  {
    key: "2",
    image: "/img/product-cover-2.png",
    title: "Lifetime Access",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    price: "16.48",
    salePrice: "6.48",
    rating: "4.9",
    sales: "15",
  },
  {
    key: "3",
    image: "/img/product-cover-1.png",
    title: "Lifetime Access",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    price: "16.48",
    salePrice: "6.48",
    rating: "4.9",
    sales: "15",
  },
  {
    key: "4",
    image: "/img/product-cover-2.png",
    title: "Lifetime Access",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    price: "16.48",
    salePrice: "6.48",
    rating: "4.9",
    sales: "15",
  },
  {
    key: "5",
    image: "/img/product-cover-1.png",
    title: "Lifetime Access",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    price: "16.48",
    salePrice: "6.48",
    rating: "4.9",
    sales: "15",
  },
  {
    key: "6",
    image: "/img/product-cover-2.png",
    title: "Lifetime Access",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    price: "16.48",
    salePrice: "6.48",
    rating: "4.9",
    sales: "15",
  },
];

const CourseCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="p-6">
      <Slider {...settings}>
        {packages.map((pack, index) => {
          return (
            <div key={index}>
              <CardPackages
                image={pack.image}
                title={pack.title}
                description={pack.description}
                price={pack.price}
                salePrice={pack.salePrice}
                rating={pack.rating}
                sales={pack.sales}
              />
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default CourseCarousel;

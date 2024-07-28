// components/Clients/ClientCarousel.tsx

"use client";
import Slider from "react-slick";

// Component
import ClientCard from "./ClientCard";

// Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const clients = [
  {
    key: 1,
    description:
      "Slate helps you see  how many more days you need to work to reach your financial goal for the month and year.",
    img: "/img/client1.png",
    rating: 4,
    name: "Regina Miles",
    job: "Designer",
  },
  {
    key: 2,
    description:
      "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    img: "/img/client2-.png",
    rating: 3,
    name: "Regina Miles",
    job: "Designer",
  },
  {
    key: 3,
    description:
      "Slate helps you see  how many more days you need to work to reach your financial goal for the month and year.",
    img: "/img/client1.png",
    rating: 4,
    name: "Regina Miles",
    job: "Designer",
  },
  {
    key: 4,
    description:
      "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    img: "/img/client2-.png",
    rating: 3,
    name: "Regina Miles",
    job: "Designer",
  },
  {
    key: 5,
    description:
      "Slate helps you see  how many more days you need to work to reach your financial goal for the month and year.",
    img: "/img/client1.png",
    rating: 2,
    name: "Regina Miles",
    job: "Designer",
  },
  {
    key: 6,
    description:
      "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    img: "/img/client2-.png",
    rating: 4,
    name: "Regina Miles",
    job: "Designer",
  },
];

const ClientCarousel = () => {
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
        {clients.map((client, index) => {
          return (
            <div key={index} className="p-2">
              <ClientCard
                img={client.img}
                description={client.description}
                rating={client.rating}
                name={client.name}
                job={client.job}
              ></ClientCard>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default ClientCarousel;

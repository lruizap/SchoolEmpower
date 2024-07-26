import Slider from "react-slick";
import CardPackages from "./CardPackages";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        <div>
          <CardPackages
            image="/img/product-cover-1.png"
            title="training Courses"
            description="We focus on ergonomics and meeting you where you work. It's only a keystroke away."
            price="16.48"
            salePrice="6.48"
            rating="4.9"
            sales="15"
          />
        </div>
        <div>
          <CardPackages
            image="/img/product-cover-2.png"
            title="Lifetime access"
            description="We focus on ergonomics and meeting you where you work. It's only a keystroke away."
            price="16.48"
            salePrice="6.48"
            rating="4.9"
            sales="15"
          />
        </div>
        <div>
          <CardPackages
            image="/img/product-cover-1.png"
            title="training Courses"
            description="We focus on ergonomics and meeting you where you work. It's only a keystroke away."
            price="16.48"
            salePrice="6.48"
            rating="4.9"
            sales="15"
          />
        </div>
      </Slider>
    </section>
  );
};

export default CourseCarousel;

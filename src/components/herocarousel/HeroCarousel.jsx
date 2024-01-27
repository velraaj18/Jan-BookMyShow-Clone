import React from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./arrowComponent";
const HeroCarousel = (props) => {
  return (
    <>
      <div className=" w-5/6 h-64 mx-auto my-4 px-4 sm:hidden md:hidden lg:block ">
        <img
          src={props.src}
          alt="Hero Carousel"
          className="w-full rounded-lg object-cover cursor-pointer"
        />
      </div>
    </>
  );
};

const HeroCarouselSlider = () => {
  const HerocarouselImages = [
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1703662030488_hccweb.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1704901246379_ccdesk.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1703746841318_satindersartajweb.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1703930188975_web.jpg",
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <Slider {...settings}>
        {HerocarouselImages.map((each, index) => (
          <HeroCarousel src={each} key={index} />
        ))}
      </Slider>
    </>
  );
};
export default HeroCarouselSlider;

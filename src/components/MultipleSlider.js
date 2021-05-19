import React from "react";
import Song from "./Song";
import Slider from "react-slick";

const MultipleSlider = ({ data }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {data &&
          data.map((item) => {
            const { id, artist = "", name, img } = item;
            return <Song key={id} subtitle={artist} title={name} img={img} />;
          })}
      </Slider>
    </div>
  );
};

export default MultipleSlider;

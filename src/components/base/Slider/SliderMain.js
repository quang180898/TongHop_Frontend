import React from "react";
import Slider from "react-slick";

const SliderMain = ({ className, data = []}) => {
  const settings = {
    infinite: true,
    speed: 500,
    vertical: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="slider-main">
      {data.length > 0 && data.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.image} />
            </div>
          );
        })}
    </Slider>
  );
};

export default SliderMain;

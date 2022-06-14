import { ProductBlock } from "components/common/Product";
import React from "react";
import Slider from "react-slick";

const SliderRelated = ({ className, children = [] }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const NextArrow = ({ currentSlide, slideCount, ...props }) => {
    return (
      <button {...props}>
        <span className="arrow-custom arrow-right">
          <div className="arrow-top" />
          <div className="arrow-bottom" />
        </span>
      </button>
    );
  };
  const PrevArrow = ({ currentSlide, slideCount, ...props }) => {
    return (
      <button {...props}>
        <span className="arrow-custom arrow-left">
          <div className="arrow-top" />
          <div className="arrow-bottom" />
        </span>
      </button>
    );
  };

  return (
    <Slider
      className="slider-related"
      nextArrow={<NextArrow />}
      prevArrow={<PrevArrow />}
      {...settings}
    >
      {children?.length > 0 && children.map((item, index) => (
        <ProductBlock item={item} key={index}/>
      ))}
    </Slider>
  );
};

export default SliderRelated;

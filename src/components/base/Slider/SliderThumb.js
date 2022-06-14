import React from "react";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import { commonAction } from "store/actions";

const SliderThumb = ({ className, sliderRef, children = [] }) => {

  const dispatch = useDispatch()

  const settings = {
    infinite: true,
    speed: 500,
    vertical: true,
    slidesToShow: children ? parseInt(children.length) : 1,
    slidesToScroll: 1,
  };

  const NextArrow = ({currentSlide, slideCount, ...props}) => {
    return (
      <button {...props}>
        <span className="arrow-custom arrow-right">
          <div className="arrow-top" />
          <div className="arrow-bottom" />
        </span>
      </button>
    );
  };
  const PrevArrow = ({currentSlide, slideCount, ...props}) => {
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
      {...settings}
      ref={sliderRef}
      nextArrow={<NextArrow />}
      prevArrow={<PrevArrow />}
      beforeChange={() => dispatch(commonAction.clearData())}
      className="slider-thumb"
    >
      {children}
    </Slider>
  );
};

export default SliderThumb;

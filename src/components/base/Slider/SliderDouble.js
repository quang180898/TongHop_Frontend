import React, { Component } from "react";
import Slider from "react-slick";

const SliderDouble = ({ className, datas = [] }) => {
  let slider1 = React.useRef();
  let slider2 = React.useRef();

  const [state, setState] = React.useState({
    nav1: null,
    nav2: null,
  });

  React.useEffect(() => {
    setState((e) => ({ ...e, nav1: slider1, nav2: slider2 }));
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const NextArrow = ({ currentSlide, slideCount, ...props }) => (
    <div {...props}></div>
  );
  const PrevArrow = ({ currentSlide, slideCount, ...props }) => (
    <div {...props}></div>
  );
  return (
    <div className={className}>
      <Slider
        {...settings}
        className="slider-double"
        asNavFor={state.nav2}
        accessibility={false}
        arrows={false}
        ref={(slider) => (slider1 = slider)}
      >
        {datas.map((item, index) => (
          <img src={item.image} key={index} />
        ))}
      </Slider>
      <Slider
        {...settings}
        className="slider-nav"
        asNavFor={state.nav1}
        ref={(slider) => (slider2 = slider)}
        slidesToShow={4}
        focusOnSelect={true}
        arrows={true}
      >
        {datas.map((item, index) => (
          <img src={item.image} key={index} />
        ))}
      </Slider>
    </div>
  );
};

export default SliderDouble;

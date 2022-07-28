import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "none",
        zIndex: 1,
        background: "rgb(247,176,48)",
        borderRadius:"50%"
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, goProductPage } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "none",
        zIndex: 1,
        background: "rgb(247,176,48)",
        borderRadius: "50%",
      }}
       onClick={goProductPage}
    />
  );
}
// className={style.autoSlider}
  
export const RunningSlider = ({images}) => {
  const settings = {
    dots: false,
    infinite: true,
    pauseOnHover: true,
    speed: 5000,
    slidesToShow: 3,
    swipeToSlide: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    autoplay: true,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div style={{ width: "96%", margin: "auto" }}>
      <Slider {...settings}>
        {images.map((el,ind) => {
          return (
            <div key={ind} >
              <img src={el} style={{borderRadius:"10px",margin:"0px 10px"}} alt="slider"/>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

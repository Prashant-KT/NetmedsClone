import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { trandingImages } from "./trending";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        marginRight: "20px",
        zIndex: 1,
        background: "rgb(247,176,48)",
        borderRadius:"50%"
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        marginLeft: "20px",
        zIndex: 1,
        background: "rgb(247,176,48)",
        borderRadius: "50%",
      }}
      onClick={onClick}
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
    autoplaySpeed: 2000,
    cssEase: "linear",
    autoplay: true,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div style={{ width: "96%", margin: "auto" }}>
      <Slider {...settings}>
        {images.map((el,ind) => {
          return (
            <div key={ind} style={{ marginRight: "15px"}}>
              <img src={el} style={{borderRadius:"10px"}} alt="slider"/>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

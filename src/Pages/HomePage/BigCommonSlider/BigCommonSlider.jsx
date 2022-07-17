import React from 'react'
import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

export const BigCommonSlider = ({ height }) => {
  return (
    <Carousel
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      showStatus={false}
    >
      <img
        style={{
          width: "100%",
          height: height,
          
        }}
        alt=""
        src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1657897132_Home_Bannerxgsdfgdsg.jpg"
      />

      <img
        style={{
          width: "100%",
          height: height,
          zIndex:-1
        }}
        alt=""
        src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1656599646_Home_Bannervvvvv.jpg"
      />

      <img
        style={{
          width: "100%",
          height: height,
        }}
        alt=""
        src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1656599543_Home_Bannersgge.jpg"
      />

      <img
        style={{
          width: "100%",
          height: height,
        }}
        alt=""
        src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1654275901_Web_Home_Kareenasdhdh.jpg"
      />
    </Carousel>
  );
};

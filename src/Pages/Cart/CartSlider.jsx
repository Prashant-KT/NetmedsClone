import React from "react";
import { Carousel } from "react-responsive-carousel";


export const CartSlider = ({height}) => {
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
        src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1656600406_569x90fsageg.jpg"
      />

      <img
        style={{
          width: "100%",
          height: height,
          zIndex: -1,
        }}
        alt=""
        src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1656600380_569x90dsfsdg.jpg"
      />

      <img
        style={{
          width: "100%",
          height: height,
        }}
        alt=""
        src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1656600331_569x90fewf.jpg"
      />

    </Carousel>
  );
}

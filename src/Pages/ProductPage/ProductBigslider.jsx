import React from "react";
import { Carousel } from "react-responsive-carousel";

export const ProductBigslider = ({height}) => {
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
        src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1654247920_Wellness_Home_title.jpg"
      />

      <img
        style={{
          width: "100%",
          height: height,
          zIndex: -1,
        }}
        alt=""
        src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1654249719_Wellness_home.jpg"
      />

      <img
        style={{
          width: "100%",
          height: height,
        }}
        alt=""
        src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1658299561_Inlife_Wellness_Web.jpg"
      />

      <img
        style={{
          width: "100%",
          height: height,
        }}
        alt=""
        src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1658299643_relispray_Wellness_Web.jpg"
      />
    </Carousel>
  );
};

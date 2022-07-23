import React, { useState } from "react";
import { BigCommonSlider } from "../HomePage/BigCommonSlider/BigCommonSlider";
import { Navbar } from "../Navbar/Navbar";
import { ProductBigslider } from "./ProductBigslider";
import style from "./ProductPage.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const ProductPage = () => {
  return (
    <>
      <Navbar />
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <div className={style.sliderContainerBoxx}>
        <ProductBigslider height={"350px"} />
      </div>
      <div>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <div className={style.sortAllDiv}>
        <div className={style.leftFilterDiv}>
          <div className={style.leftFilterDivFirst}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz-0w2ObvUVRa3Jt8w5WDtn3wQZahIbetFyQ&usqp=CAU"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className={style.leftFilterDivSecond}>
            <h1 className={style.hfheading}>Filters</h1>
          </div>
        </div>
        <div className={style.rightProductDiv}>
          <div>
            <img
              src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1656959707_Category_Web_1000x200px_copy.jpg"
              alt=""
              style={{ width: "100%" }}
            />
          </div>
          <div className={style.makeSortParent}>
            <div>
              Showing <b>25</b> of <b>62</b> items
            </div>
            <div>
              <span>Sort by: </span>
              <span className={style.sortby}>Popularity</span>
              <span className={style.sortby}>High to Low</span>
              <span className={style.sortby}>Low to High</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

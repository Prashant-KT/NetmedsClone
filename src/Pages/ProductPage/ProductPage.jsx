import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navbar } from "../Navbar/Navbar";
import { ProductBigslider } from "./ProductBigslider";
import style from "./ProductPage.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CircularProgress from "@mui/material/CircularProgress";

import {
  getProductsRequest,
  getProductsSuccess,
} from "../ProductRedux/productAction";
import { useSearchParams } from "react-router-dom";

export const ProductPage = () => {
  const dispatch = useDispatch();
   const [searchParams, setSearchParams] = useSearchParams();
   const [page, setPage] = useState(+searchParams.get("_page") || 2);
  const { isLoading, products } = useSelector((state) => state.productDetails);

  useEffect(() => {
    setSearchParams({ _page: page,_limit:4 });
    dispatch(getProductsRequest());
    setTimeout(() => {
      dispatch(getProductsSuccess());
    }, 300);
  }, [dispatch]);

  function handleFilter(e) {
    console.log(e.target.checked);
  }
  return (
    <>
      {isLoading ? (
        <CircularProgress disableShrink />
      ) : (
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
          {/* slider top ends here */}
          <div>
            <br></br>
            <br></br>
            <br></br>
          </div>
          {/* left filter and right box full starts here */}
          <div className={style.bottomBigContainer}>
            <div className={style.leftFilterDiv}>
              <div className={style.leftFilterDivFirst}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz-0w2ObvUVRa3Jt8w5WDtn3wQZahIbetFyQ&usqp=CAU"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              {/* small left side lungs image end here */}
              <div className={style.leftFilterDivSecond}>
                <h1 className={style.hfheading}>Filters</h1>
                <h1 className={style.hftype}>Medicine Type</h1>
                <div className={style.hftype}>
                  <div className={style.checkboxNlabel}>
                    <input
                      type="checkbox"
                      name="Ayurvedic"
                      id="Ayurvedic"
                      onChange={(e) => handleFilter(e)}
                    />
                    <label>Ayurvedic</label>
                  </div>
                  <div className={style.checkboxNlabel}>
                    <input
                      type="checkbox"
                      name="Allopathic"
                      id="Allopathic"
                      onChange={(e) => handleFilter(e)}
                    />
                    <label>Allopathic</label>
                  </div>
                  <div className={style.checkboxNlabel}>
                    <input
                      type="checkbox"
                      name="Fitness"
                      id="Fitness"
                      onChange={(e) => handleFilter(e)}
                    />
                    <label>Fitness</label>
                  </div>
                  <div className={style.checkboxNlabel}>
                    <input
                      type="checkbox"
                      name="Devices"
                      id="Devices"
                      onChange={(e) => handleFilter(e)}
                    />
                    <label>Devices</label>
                  </div>
                </div>
              </div>
              {/* left side filter box portion ended here */}
            </div>
            <div className={style.rightProductDiv}>
              <div>
                <img
                  src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1656959707_Category_Web_1000x200px_copy.jpg"
                  alt=""
                />
              </div>

              {/* right side product side UI */}
              <div className={style.makeSortParent}>
                <div>
                  Showing <b>25</b> of <b>62</b> items
                </div>
                <div>
                  <span>Sort by: </span>
                  <span onClick={() => alert("hi")} className={style.sortby}>
                    Popularity
                  </span>
                  <span className={style.sortby}>High to Low</span>
                  <span className={style.sortby}>Low to High</span>
                </div>
              </div>
              {/* right side product side UI showing Products */}
              <div className={style.fourProdCont}>
                {products.map((el, ind) => {
                  return (
                    <div key={ind}>
                      <div className={style.productImage}>
                        <img src={el.img} alt="" />
                      </div>
                      <p className={style.productTitle}>{el.title}</p>
                      <span className={style.productCategory}>
                        {el.category}
                      </span>
                      <p className={style.productMenufec}>{el.seller}</p>
                      <div className={style.productSellingPrice}>
                        <span>Best price* </span>
                        <span className={style.productSellingp}>₹ {el.sp}</span>
                      </div>
                      <div className={style.productCostPrice}>
                        <span>MRP </span>
                        <span className={style.productCP}> Rs {el.mrp} </span>
                      </div>
                      <button
                        className={style.productCartButton}
                        onClick={() => console.log(el.id)}
                      >
                        ADD TO CART
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

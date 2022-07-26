import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Navbar } from "../Navbar/Navbar";
import { ProductBigslider } from "./ProductBigslider";
import style from "./ProductPage.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import ArrowBackIosNewSharpIcon from "@mui/icons-material/ArrowBackIosNewSharp";
import {
  addToTempCart,
  changeCartCounter,
  filterProducts,
  getProductsRequest,
  getProductsSuccess,
  sortProductHighToLow,
  sortProductLowToHigh,
} from "../ProductRedux/productAction";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import axios from 'axios';


export const ProductPage = () => {
  const dispatch = useDispatch();
   const [searchParams, setSearchParams] = useSearchParams();
   const [page, setPage] = useState(+searchParams.get("_page") || 1);
   const [def,setDef] = useState(1);
  const { isLoading, products } = useSelector((state) => state.productDetails);
  const isAuth = useSelector((state) => state.loginState.isAuth);
  const navigate = useNavigate()


  // to show num of content on page
  let curritem = page *16;
  if(curritem > 60){
    curritem = 62
  }


  useEffect(() => {
    setSearchParams({ _page: page, });
    dispatch(getProductsRequest());
    setTimeout(() => {
      dispatch(getProductsSuccess(page));
    }, 300);
  }, [dispatch, page, setSearchParams,def]);

  function handleFilter(e) {
    // console.log(e.target.checked);
    //  dispatch(getProductsRequest());
    if(e.target.checked){
      let filter_item = e.target.id;
       dispatch(filterProducts(page,filter_item))
    }else{
      dispatch(getProductsSuccess(page));
    }
  }

  function paginate(a) {
    setPage(page+a)
  }

  function handleSortDefault() {
    setDef(def+1)
  }

  function handleSortHighToLow() {
    dispatch(sortProductHighToLow());
  }
  function handleSortLowToHigh() {
    dispatch(sortProductLowToHigh());
  }

  async function handleCart(id) {
    if (!isAuth) {
      alert("You need to login first");

      return navigate("/signin");
    }

    let res = await axios.get(
      `https://cryptic-ravine-10338.herokuapp.com/netmedsproducts/${id}`
    );
    let cartItem = res.data;
    dispatch(addToTempCart(cartItem));
    dispatch(changeCartCounter(1));
    alert("added");

    // axios.post("https://cryptic-ravine-10338.herokuapp.com/netmedscart",cartItem).then((el)=>{
    //   alert("Added")
    // }).then(()=>{
    //   dispatch(changeCartCounter(1))
    // })
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
                  Showing <b>{curritem}</b> of <b>{62}</b> items
                </div>
                <div>
                  <span>Sort by: </span>
                  <span className={style.sortby} onClick={handleSortDefault}>
                    Popularity
                  </span>
                  <span className={style.sortby} onClick={handleSortHighToLow}>
                    High to Low
                  </span>
                  <span className={style.sortby} onClick={handleSortLowToHigh}>
                    Low to High
                  </span>
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
                        onClick={() => handleCart(el.id)}
                       
                      >
                        ADD TO CART
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={style.bottomPagination}>
            <button disabled={page === 1} onClick={() => paginate(-1)}>
              <ArrowBackIosNewSharpIcon sx={{ fontSize: 40 }} />
            </button>
            <button disabled={page === 4} onClick={() => paginate(1)}>
              <ArrowForwardIosSharpIcon sx={{ fontSize: 40 }} />
            </button>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

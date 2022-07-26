import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import {
  deleteCartItem,
  getFinalSellingPrice,
  getTotalMrp,
  getTotalSaving,
} from "../ProductRedux/productAction";
import style from "./Cart.module.css";
import { CartSlider } from "./CartSlider";

export const Cart = () => {
  const cartProducts = useSelector(
    (state) => state.productDetails.cartProducts
  );
  const totalPrice = useSelector((state) => state.productDetails.totalPrice);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  console.log("cartProducts", cartProducts);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [cartProducts]);

  function handleDelete(id) {
    setLoading(true);
    dispatch(deleteCartItem(id));
  }

function handleProceed() {
  return navigate('/payment')
}

  let mrpTotal =
    cartProducts.reduce((ac, el) => {
      return ac + Number(el.mrp);
    }, 0) || 0;
  console.log("mrpTotal", mrpTotal);
dispatch(getTotalMrp(mrpTotal));

  let sellingPrice =
    Math.floor(
      cartProducts.reduce((ac, el) => {
        return ac + Number(el.sp);
      }, 0)
    ) || 0;
  console.log("sellingPrice", sellingPrice);
 dispatch(getFinalSellingPrice(sellingPrice));
 console.log("totalPrice", totalPrice);

  let totalSaving = Math.ceil(mrpTotal - sellingPrice) || 0;
  console.log("totalSaving", totalSaving);
  dispatch(getTotalSaving(totalSaving));

  // selling price is equal to total price but to get on payment page, storing in redux

 

  return (
    <>
      <div>
        <Navbar position={"static"} />
      </div>
      <div>
        {loading ? (
          <CircularProgress disableShrink />
        ) : (
          <div>
            <h1 className={style.heading}>Order Summary</h1>
            <div className={style.containerBox}>
              <div className={style.cartCont}>
                <div className={style.smallSlider}>
                  <CartSlider height={"auto"} />
                </div>
                {cartProducts.length === 0 ? (
                  <img
                    src="http://hsnbazar.com/images/empty-cart.png"
                    alt="cart Empty"
                  />
                ) : null}
                <div className={style.listCartItems}>
                  {cartProducts.map((el, ind) => {
                    return (
                      <div className={style.eachChild} key={ind}>
                        <div className={style.titleSellerImage}>
                          <div className={style.sellertitle}>
                            <p>{el.title}</p>
                            <p>{el.seller}</p>
                          </div>
                          <div className={style.productimg}>
                            <img
                              src={el.img}
                              alt=""
                              style={{ width: "70px", height: "70px" }}
                            />
                          </div>
                        </div>
                        <div className={style.sellingPriceRed}>
                          <p>Rs. {el.sp}</p>
                          <p></p>
                        </div>
                        <div className={style.deliveryTimeDelete}>
                          <div>Item will be delivered in next 7 days</div>
                          <div onClick={() => handleDelete(el.id)}>
                            Remove Item
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {cartProducts.length !== 0 ? (
                <div className={style.paymentCont}>
                  <div className={style.pinkStatic}>
                    <img
                      src="https://www.netmeds.com/msassets/images/icons/membership_icon.svg"
                      alt=""
                    />
                    <div>
                      <p>Become Netmeds First Member</p>
                      <p>
                        join membership to save much more! Exclusive offers
                        designed for you
                      </p>
                    </div>
                  </div>
                  <div className={style.paymentCalculation}>
                    <h4>PAYMENT DETAILS</h4>
                    <div className={style.eachPrice}>
                      <span>MRP Total</span>
                      <span>Rs. {mrpTotal}</span>
                    </div>
                    <div className={style.eachPrice}>
                      <span>Netmeds Discount</span>
                      <span>-Rs.{totalSaving}</span>
                    </div>
                    <div className={style.eachPrice}>
                      <span>Total Amount *</span>
                      <span>Rs.{sellingPrice}</span>
                    </div>
                    <div className={style.greenSaving}>
                      Total Saving is Rs.{totalSaving}
                    </div>
                    <div className={style.procced}>
                      <div>
                        <span>Total Amount *</span>
                        <span>Rs.{sellingPrice}</span>
                      </div>
                      <button onClick={handleProceed}>Proceed</button>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Navbar } from '../Navbar/Navbar';
import {  deleteCartItem } from '../ProductRedux/productAction';
import style from './Cart.module.css'
import { CartSlider } from './CartSlider';
export const Cart = () => {
    const cartProducts = useSelector((state) => state.productDetails.cartProducts);
    const[loading, setLoading] = useState(true);
    const dispatch = useDispatch()
    console.log("cartProducts", cartProducts);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [cartProducts]);
  

   function handleDelete(id) {
    setLoading(true);
    dispatch(deleteCartItem(id))
   }

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

              <div className={style.paymentCont}></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

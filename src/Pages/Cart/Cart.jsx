import React from 'react'
import { useSelector } from "react-redux";

export const Cart = () => {
    const cartProducts = useSelector((state) => state.productDetails.cartProducts);
    console.log("cartProducts", cartProducts);

  return (
    <div>Cart</div>
  )
}

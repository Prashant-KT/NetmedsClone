import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Homepage } from '../HomePage/Homepage'
import { Signin } from '../LoginPage/Signin'
import { Signup } from '../LoginPage/Signup'
import { ProductPage } from "../ProductPage/ProductPage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<ProductPage />} />
    </Routes>
  );
}

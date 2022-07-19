import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Homepage } from '../HomePage/Homepage'
import { Signin } from '../LoginPage/Signin'
import { Signup } from '../LoginPage/Signup'

export const AllRoutes = () => {
  return (
    
        <Routes>
            <Route path="/signin" element={<Signin/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/" element={<Homepage/>} />
        </Routes>
   
  )
}

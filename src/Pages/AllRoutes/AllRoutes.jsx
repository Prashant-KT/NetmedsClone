import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Signin } from '../LoginPage/Signin'

export const AllRoutes = () => {
  return (
    
        <Routes>
            <Route path="/signin" element={<Signin/>} />
        </Routes>
   
  )
}

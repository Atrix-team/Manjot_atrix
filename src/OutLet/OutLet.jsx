import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'



export const OutLet = () => {
  return (
    <div>

          <Navbar />
          <Outlet/>     
        
     
    </div>
  )
}
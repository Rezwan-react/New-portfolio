import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import ResponsiveNav from '../components/responsiveNav/ResponsiveNav'

function LayoutOne() {
  return (
    <>
      
        <Navbar/>
        <ResponsiveNav/>
        <Outlet/>
      
    </>
  )
}

export default LayoutOne
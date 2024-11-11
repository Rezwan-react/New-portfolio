import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import ResponsiveNav from '../components/responsiveNav/ResponsiveNav'

function LayoutOne() {
  return (
    <>
      <div className='flex p-4 gap-10'>
        <Navbar/>
        <ResponsiveNav/>
        <Outlet/>
      </div>
    </>
  )
}

export default LayoutOne
import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'

function LayoutOne() {
  return (
    <>
      <div className='flex p-4'>
        <Navbar/>
        <Outlet/>
      </div>
    </>
  )
}

export default LayoutOne
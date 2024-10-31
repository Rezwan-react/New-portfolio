import React, { useState } from 'react'
import './ResponsiveNav.css'
import { Link } from 'react-router-dom'
import { SlMenu } from "react-icons/sl";
import { MdOutlineCancel } from "react-icons/md";
function ResponsiveNav() {
    const [show, setShow] = useState(false)
  return (
    <>
        <nav className='res_menu'>
            <div className="container">
                <div className="res_row">
                    <div className="res_col">
                        <div className='slide_nav'>
                            <SlMenu onClick={()=> setShow(!show)} className="menu_icon" />
                        </div>
                        {
                            show&&
                        <div className="slide_menu">
                            <MdOutlineCancel onClick={()=> setShow(!show)}  className='cancel' />
                            <ul>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/about'>About</Link></li>
                                <li><Link to='/skills'>Skills</Link></li>
                                <li><Link to='/portfolio'>Portfolio</Link></li>
                                <li><Link to='/contact'>Contact</Link></li>
                            </ul>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default ResponsiveNav
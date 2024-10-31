import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa";
import { PiBrainBold } from "react-icons/pi";
import { PiBriefcaseBold } from "react-icons/pi";
import { IoIosMail } from "react-icons/io";

function Navbar() {
  return (
    <>
      <nav className='main_menu'>
        <div className="container">
          <div className="menu_row">
            <div className="menu_col">
              <div className="menu_head">
                <div className="menu_img">
                  <img src="images/rezwan.jpg" alt="img" />
                </div>
                <div className="menu_text">
                  <h1>Rezwan</h1>
                </div>
              </div>
              <div className="menu">
                <ul>
                  <li><NavLink to="/" className={({ isActive, }) => isActive ? "yesActive" : "noActive" }> <IoHome />Home</NavLink></li>
                  <li><NavLink to="/about" className={({ isActive, }) => isActive ? "yesActive" : "noActive" }> <FaUserGraduate />About</NavLink></li>
                  <li><NavLink to="/skills" className={({ isActive, }) => isActive ? "yesActive" : "noActive" }> <PiBrainBold />Skills</NavLink></li>
                  <li><NavLink to="/portfolio" className={({ isActive, }) => isActive ? "yesActive" : "noActive" }> <PiBriefcaseBold />Portfolio</NavLink></li>
                  <li><NavLink to="/contact" className={({ isActive, }) => isActive ? "yesActive" : "noActive" }> <IoIosMail />Contact</NavLink></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
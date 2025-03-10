import React from 'react';
import './Navbar.css';
import { IoHome } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa";
import { PiBrainBold } from "react-icons/pi";
import { PiBriefcaseBold } from "react-icons/pi";
import { IoIosMail } from "react-icons/io";

function Navbar() {
  // Scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className='main_menu'>
        <div className="container">
          <div className="menu_row">
            <div className="menu_col">
              <div className="menu">
                <ul>
                  <li><a href='#home' onClick={() => scrollToSection("home")} className="yesActive"> <IoHome /> Home</a></li>
                  <li><a href='#about' onClick={() => scrollToSection("about")} className="yesActive"> <FaUserGraduate /> About</a></li>
                  <li><a href='#skills' onClick={() => scrollToSection("skills")} className="yesActive"> <PiBrainBold /> Skills</a></li>
                  <li><a href='#portfolio' onClick={() => scrollToSection("portfolio")} className="yesActive"> <PiBriefcaseBold /> Portfolio</a></li>
                  <li><a href='#contact' onClick={() => scrollToSection("contact")} className="yesActive"> <IoIosMail /> Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

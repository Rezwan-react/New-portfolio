import React from 'react'
import './About.css'

function About() {
  return (
    <>
      <div className="about">
        <div className="container">
          <div className="about_row">
            <div className="about_col">
              <div className="about_text">
                <p>I am Rezwan, a passionate React developer with 2+ years of experience in building dynamic and responsive web applications. Skilled in HTML, HTML5, CSS, CSS3, React, Tailwind CSS, and Redux.
                  I help you create websites for your business at affordable cost. Thousands of clients have achieved exceptional results while working with me. My objective is to deliver work within time and budget that meets the client's requirements.
                </p>
              </div>
              <div className="about_con">
                <ul>
                  <li ><strong>Name:</strong> Rezwan</li>
                  <li >
                  <strong>Email:</strong> <a href="mailto:mdrazwanislam8@gmail.com">mdrazwanislam8@gmail.com</a>
                  </li>
                  <li >
                  <strong>Phone:</strong> <a href="tel:01788254971">01788254971</a>
                  </li>
                  <li ><strong>From:</strong> Bangladesh</li>
                  <li><strong>Languages:</strong> Bengali, English, Hindi</li>
                </ul>
              </div>
            </div>
            <div className="about_pic">
              <div className="about_be"></div>
              <div className="about_img">
               
               
                <div
                  className=" group px-10 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#abd373] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all"
                >

                  <img src="images/newRezwan.png" alt="img" />
                  
                  
                  </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
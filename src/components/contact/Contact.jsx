import React from 'react'
import './Contact.css'
import { FaFacebookF, FaGithub, FaLinkedinIn, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import SocialButton from '../socialButton/SocialButton';

function Contact() {
  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="contact_row">
            <div className="contact_col">
              <div className="contact_me">
                <div className="contact_haed">
                  <h2>Contact me</h2>
                </div>
                  <div className="contact_button">
                  <ul>
                  <li><a href="tel:01788254971"
                    className="bg-white/10 group w-50 h-16 inline-flex transition-all duration-300 overflow-visible p-1 rounded-full group"
                  >
                    <div
                      className="w-half h-full bg-white/10 overflow-hidden shadow-[0_0_1px_rgba(0,0,0,0.07),0_0_1px_rgba(0,0,0,0.05),0_3px_3px_rgba(0,0,0,0.25),0_1px_3px_rgba(0,0,0,0.12)] p-1 rounded-full hover:shadow-none duration-300"
                    >
                      <div
                        className="w-full h-full text-xl gap-x-0.5 gap-y-0.5 justify-center text-[#94ADCF] bg-white/10 group-hover:bg-white/5 duration-200 items-center text-[18px] font-medium gap-4 inline-flex overflow-hidden px-4 py-2 rounded-full black group-hover:text-blue-600"
                      >
                        <FaPhoneAlt/>
                        <span className="ml-2">01788254971</span>
                      </div>
                    </div>
                  </a></li>
                    <li><a href="mailto:mdrazwanislam8@gmail.com"
                    className="bg-white/10 group w-50 h-16 inline-flex transition-all duration-300 overflow-visible p-1 rounded-full group"
                  >
                    <div
                      className="w-half h-full bg-white/10 overflow-hidden shadow-[0_0_1px_rgba(0,0,0,0.07),0_0_1px_rgba(0,0,0,0.05),0_3px_3px_rgba(0,0,0,0.25),0_1px_3px_rgba(0,0,0,0.12)] p-1 rounded-full hover:shadow-none duration-300"
                    >
                      <div
                        className="w-full h-full text-xl gap-x-0.5 gap-y-0.5 justify-center text-[#94ADCF] bg-white/10 group-hover:bg-white/5 duration-200 items-center text-[18px] font-medium gap-4 inline-flex overflow-hidden px-4 py-2 rounded-full black group-hover:text-blue-600"
                      >
                        <BiLogoGmail />
                        <span className="ml-2">mdrazwanislam8@gmail.com</span>
                      </div>
                    </div>
                  </a></li>                  
                  </ul>                  
                  </div>
               </div> 
               <div className="social_button">
                  <h4>Follow Me</h4>
                  <div className="button">
                  <SocialButton social_icons={<FaFacebookF/>} social_links='https://www.facebook.com/profile.php?id=61551685600240' />
                  <SocialButton social_icons={<FaLinkedinIn />} social_links='https://www.linkedin.com/in/md-rezwan-islam-4886ba2a8/' />
                  <SocialButton social_icons={<FaTwitter/>} social_links='https://x.com/Rezwan971' />
                  <SocialButton social_icons={<FaGithub/>} social_links='https://github.com/Rezwan-react' />
                  </div>
                </div>    
            </div>
            <div className="contact_form">
              <div className=" w-[500px] mx-auto bg-white/10  rounded-lg shadow-md p-4">
                <form>
                  <div className="mb-4">
                    <label className="block mb-2 text-[16px] font-medium font-Poppins text-[#94ADCF] " for="name"> Name </label>
                    <input
                      placeholder="Your Name"
                      className="w-full text-[#94ADCF] font-medium font-Poppins text-xl p-2 border-b-2 border-yellow-400 bg-transparent outline-none focus:border-b-2 focus:border-yellow-600"
                      type="text"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb- text-[16px] font-medium font-Poppins text-[#94ADCF] " for="email"> Email </label>
                    <input
                      placeholder="Your Email"
                      className="w-full text-[#94ADCF] font-medium font-Poppins text-xl p-2 border-b-2 border-yellow-400 bg-transparent outline-none focus:border-b-2 focus:border-yellow-600"
                      name="email"
                      id="email"
                      type="email"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-[16px] font-medium font-Poppins text-[#94ADCF] " for="message"> Message </label>
                    <textarea
                      placeholder="Your Message"
                      className="w-full text-[#94ADCF] font-medium font-Poppins text-xl p-2 border-b-2 border-yellow-400 bg-transparent outline-none focus:border-b-2 focus:border-yellow-600"
                      rows="4"
                      name="message"
                      id="message"
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <button
                      className="w-full bg-[#F7AB0A] text-gray-700 font-semibold font-Poppins p-2 rounded transition-all hover:bg-[#FFC857] active:scale-90"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
import React, { useEffect } from 'react'
import './Contact.css'
import { FaFacebookF, FaGithub, FaLinkedinIn, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import SocialButton from '../socialButton/SocialButton';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdEmail } from 'react-icons/md';
import { IoCall } from 'react-icons/io5';
function Contact() {

  return (
    <>
      <section id='contact'>
        <div className="contact">
          <div className="container">
            <div className="contact_row">
              <div className="contact_col">
                <div className="contact_me">
                  <div className="contact_haed">
                    <h2>Contact me</h2>
                  </div>
                  <div className='flex justify-between mt-10'>
                    <div class="flex justify-center items-center  ">
                      <button
                        href="/"
                        class="group w-[100px] h-[100px] flex justify-center items-center p-2 rounded-md drop-shadow-xl bg-[#7289da] from-gray-800 to-black text-white font-semibold hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                      >
                        <ul>
                          <li><a href="mailto:mdrazwanislam8@gmail.com"><MdEmail className='text-3xl' /></a></li>
                        </ul>
                        <span
                          class=" pointer-events-none absolute opacity-0 group-hover:opacity-100 group-hover:text-[#94ADCF] group-hover:text-xl  group-hover:-translate-y-20 duration-700"
                        >
                          <ul> <li><a href="mailto:mdrazwanislam8@gmail.com">mdrazwanislam8@gmail.com</a></li></ul>
                        </span>
                      </button>
                    </div>
                    <div class="flex justify-center items-center  ">
                      <button
                        href="/"
                        class="group w-[100px] h-[100px] flex justify-center items-center p-2 rounded-md drop-shadow-xl bg-[#7289da] from-gray-800 to-black text-white font-semibold hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                      >
                        <ul>
                          <li><a href="tel:01788254971"><IoCall className='text-3xl' /></a></li>
                        </ul>
                        <span
                          class=" pointer-events-none absolute opacity-0 group-hover:opacity-100 group-hover:text-[#94ADCF] group-hover:text-xl  group-hover:-translate-y-20 duration-700"
                        >
                          <ul> <li><a href="tel:01788254971">01788254971</a></li></ul>
                        </span>
                      </button>
                    </div>
                  </div>

                </div>
                <div className="social_button">
                  <h4>Follow Me</h4>
                  <div className="button">
                    <SocialButton social_icons={<FaFacebookF />} social_links='https://www.facebook.com/profile.php?id=61551685600240' />
                    <SocialButton social_icons={<FaLinkedinIn />} social_links='https://www.linkedin.com/in/md-rezwan-islam-4886ba2a8/' />
                    <SocialButton social_icons={<FaTwitter />} social_links='https://x.com/Rezwan971' />
                    <SocialButton social_icons={<FaGithub />} social_links='https://github.com/Rezwan-react' />
                  </div>
                </div>
              </div>
              <div  className="contact_form">
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
                        className=" w-full bg-[#F7AB0A] text-gray-700 font-semibold font-Poppins p-2 rounded transition-all hover:bg-[#FFC857] active:scale-90"
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
      </section>
    </>
  )
}

export default Contact
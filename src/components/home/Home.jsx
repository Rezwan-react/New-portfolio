import React, { useEffect } from 'react'
import './Home.css'
import { Typewriter } from 'react-simple-typewriter';
import { FaDownload } from 'react-icons/fa';
import SocialButton from '../socialButton/SocialButton';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {

  const handleType = (count) => {
    console.log(count); // access word count number
  };

  const handleDone = () => {
    console.log('Done after 5 loops!');
  };

  useEffect (()=>{
    AOS.init({
      offset: 100,
      duration: 900,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])

  return (
    <>
    <section id='main_home'>
      <div >
        <div className="container">
          <div className="home_row">
            <div className="home_col">
              <div className="home_text">
                <div data-aos="fade-down-right" className="head">
                  <h1>Welcome</h1>
                  <h2
                    className="text-2xl lg:text-[40px] text-[#94ADCF] font-Poppins font-semibold mt-5"
                      style={{
                        paddingTop: '5rem',
                        margin: 'auto 0',
                        fontWeight: 'normal',
                      }}
                      >
                      <span style={{ fontWeight: 'bold' }}>
                        
                        <Typewriter
                          words={['I', 'am', 'a', 'react', 'developer']}
                          loop={true}
                          cursor
                          cursorStyle="|"
                          typeSpeed={70}
                          deleteSpeed={50}
                          delaySpeed={1000}
                          onLoopDone={handleDone}
                          onType={handleType}
                        />
                      </span>
                   </h2>
                   <h3>You can trust me. I will make your website beautiful</h3>
                </div>
                <div data-aos="zoom-in-down" className="cv_button">
                <a className='cv'
                  href="/resume/Rezwan resume .pdf" download='myCV' ><FaDownload className='text-xl' /> Download CV</a>
                </div>
                <div data-aos="zoom-in" className="social_button">
                  <h4>Follow Me</h4>
                  <div  className="button">
                  <SocialButton social_icons={<FaFacebookF/>} social_links='https://www.facebook.com/profile.php?id=61551685600240' />
                  <SocialButton social_icons={<FaLinkedinIn />} social_links='https://www.linkedin.com/in/md-rezwan-islam-4886ba2a8/' />
                  <SocialButton social_icons={<FaTwitter/>} social_links='https://x.com/Rezwan971' />
                  <SocialButton social_icons={<FaGithub/>} social_links='https://github.com/Rezwan-react' />
                  </div>
                </div>
              </div>
              <div data-aos="fade-left" className="home_img">
              <img src="images/rezwan.jpg" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>  








       
    </>
  )
}

export default Home
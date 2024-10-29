import React from 'react'
import './Home.css'
import { Typewriter } from 'react-simple-typewriter';
function Home() {

  const handleType = (count) => {
    console.log(count); // access word count number
  };

  const handleDone = () => {
    console.log('Done after 5 loops!');
  };

  return (
    <>
       <h2
              className="text-2xl lg:text-[40px] text-[#fff] font-Poppins font-semibold mt-5"
              style={{
                paddingTop: '5rem',
                margin: 'auto 0',
                fontWeight: 'normal',
              }}
            >
              <span style={{ fontWeight: 'bold' }}>
                {/* Typewriter Effect */}
                <Typewriter
                  words={['I', 'am', 'react', 'developer']}
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
    </>
  )
}

export default Home
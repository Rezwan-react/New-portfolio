import React from 'react'
import './SkillsCard.css'
function SkillsCard({skills_icons, skills_text}) {
  return (
    <>
            <div 
            data-text="GitHub"
            className=" relative w-[180px] h-[200px] border border-white/10 shadow-[0px_25px_25px_rgba(0,0,0,0.25)] flex justify-center items-center transition-transform duration-500 rounded-lg mx-4 backdrop-blur-md hover:scale-105 transition duration-300 ease-in-out"
            style={{
              background: 'linear-gradient(rgba(255, 255, 255, 0.2), transparent) ', // Custom gradient background
            }}
             >
                <div className="text-white text-5xl" >

                     {skills_icons}
                </div>
            <div className="absolute bottom-0 w-full h-10 bg-white/5 flex justify-center items-center text-white ">
              {skills_text}
            </div>
          </div>
    </>
  )
}

export default SkillsCard
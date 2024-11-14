import React from 'react'
import './Skills.css'
import SkillsCard from '../skillsCard/SkillsCard'
import { FaGithub } from 'react-icons/fa';
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCss3 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { SiRedux } from "react-icons/si";



function Skills() {
  return (
    <>
      <div className="skills">
        <div className="container">
          <div className="skills_row">
            <div className="skills_col">
              <SkillsCard skills_icons={<FaReact/>} skills_text='React' />
              <SkillsCard skills_icons={<FaHtml5/>} skills_text='Html' />
              <SkillsCard skills_icons={<RiTailwindCssFill/>} skills_text='Tailwind Css' />
              <SkillsCard skills_icons={<FaCss3/>} skills_text='Css' />
              <SkillsCard skills_icons={<FaBootstrap/>} skills_text='Bootstrap' />
              <SkillsCard skills_icons={<FaFigma/>} skills_text='Figma' />
              <SkillsCard skills_icons={<IoLogoJavascript/>} skills_text='JavaScript' />
              <SkillsCard skills_icons={<IoLogoFirebase/>} skills_text='Firebase' />
              <SkillsCard skills_icons={<SiRedux/>} skills_text='React redux' />
              <SkillsCard skills_icons={<FaGithub/>} skills_text='Github' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
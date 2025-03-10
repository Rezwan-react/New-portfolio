import React from 'react'
import Home from '../components/home/Home'
import AboutPage from './AboutPage'
import SkillsPage from './SkillsPage'
import PortfolioPage from './PortfolioPage'
import ContactPage from './ContactPage'

function HomePage() {
  return (
    <>
      <Home />
      <AboutPage />
      <SkillsPage />
      <PortfolioPage />
      <ContactPage />
    </>
  )
}

export default HomePage
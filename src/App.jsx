import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import LayoutOne from './layouts/LayoutOne'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import SkillsPage from './pages/SkillsPage'
import PortfolioPage from './pages/PortfolioPage'
import ContactPage from './pages/ContactPage'

function App() {

  const route = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element= {<LayoutOne/>}>
        <Route index element= {<HomePage/>}/>
        <Route path='/about' element= {<AboutPage/>}/>
        <Route path='/skills' element= {<SkillsPage/>}/>
        <Route path='/portfolio' element= {<PortfolioPage/>}/>
        <Route path='/contact' element= {<ContactPage/>}/>
      </Route>
    </Route>
  ))

  return (
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App

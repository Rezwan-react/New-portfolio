import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import LayoutOne from './layouts/LayoutOne'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import SkillsPage from './pages/SkillsPage'
import PortfolioPage from './pages/PortfolioPage'
import ContactPage from './pages/ContactPage'
import AnimatedCursor from 'react-animated-cursor'

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

{/* <AnimatedCursor
        color="255,255,255"
        innerSize={15}
        outerSize={30}
        outerScale={1.4}
        innerScale={1}
        outerAlpha={1}
        innerStyle={{
          mixBlendMode: 'difference',
        }}
        outerStyle={{
          mixBlendMode: 'difference',
        }}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
        ]}
      /> */}

      <RouterProvider router={route}/>
    </>
  )
}

export default App

import React from 'react'
import './Portfolio.css'
import PortfolioCard from '../portfolioCard/PortfolioCard'
function Portfolio() {
  return (
    <>
    <section id='portfolio'>
      <div className="motion portfolio ">
        <div className="container">
          <div className="portfolio_row">
          <div className="portfolio_head">
                <h2>Portfolio</h2>
              </div>
            <div className="portfolio_col">
              <PortfolioCard portfolio_img= 'images/Mixedit-UP.png' portfolio_head='Mixedit-UP' portfolio_text='Mixedit-UP is a modern food planning website that provides categorized meal options for different times of the day: Future Breakfast, Lunch, Evening, and Dinner. This project is built using React and Tailwind CSS.' Live_link ="https://mixedit-up-three.vercel.app/" />
              <PortfolioCard portfolio_img= 'images/Calculator.png' portfolio_head='Calculator' portfolio_text='This project is a basic calculator web application built using HTML, CSS, and JavaScript. The calculator supports basic arithmetic operations such as addition, subtraction, multiplication, and division. This documentation outlines the key features, structure, and code used to build the website.' Live_link ="https://calculator-one-beryl-33.vercel.app/" />
              <PortfolioCard portfolio_img= 'images/Furniture.png' portfolio_head='Furniture' portfolio_text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.' />
              <PortfolioCard portfolio_img= 'images/numta.png' portfolio_head='Numta' portfolio_text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.' />
              <PortfolioCard portfolio_img= 'images/fist.png' portfolio_head='Portfolio' portfolio_text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.' />
              <PortfolioCard portfolio_img= 'images/create.png' portfolio_head='create' portfolio_text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.' />
            </div>
          </div>
        </div>
      </div>
    </section>  
    </>
  )
}

export default Portfolio
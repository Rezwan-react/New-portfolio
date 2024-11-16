import React from 'react'
import './Portfolio.css'
import PortfolioCard from '../portfolioCard/PortfolioCard'
function Portfolio() {
  return (
    <>
      <div className="motion portfolio ">
        <div className="container">
          <div className="portfolio_row">
            <div className="portfolio_col">
              <PortfolioCard portfolio_img= 'images/create.png' portfolio_head='create' portfolio_text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.' />
              <PortfolioCard portfolio_img= 'images/IPDC.png' portfolio_head='IPDC' portfolio_text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.' />
              <PortfolioCard portfolio_img= 'images/Furniture.png' portfolio_head='Furniture' portfolio_text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.' />
              <PortfolioCard portfolio_img= 'images/numta.png' portfolio_head='Numta' portfolio_text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.' />
              <PortfolioCard portfolio_img= 'images/fist.png' portfolio_head='Portfolio' portfolio_text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.' />
              <PortfolioCard portfolio_img= 'images/create.png' portfolio_head='create' portfolio_text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio
import React from 'react'
import './Portfolio.css'
import PortfolioCard from '../portfolioCard/PortfolioCard'

function Portfolio() {
  return (
    <>
      <div className="portfolio">
        <div className="container">
          <div className="portfolio_row">
            <div className="portfolio_col">
              <PortfolioCard portfolio_img= 'images/create.png' portfolio_head='create' portfolio_text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.' />
              <PortfolioCard portfolio_img= 'images/create.png' portfolio_head='create' portfolio_text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.' />
              <PortfolioCard portfolio_img= 'images/create.png' portfolio_head='create' portfolio_text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.' />
              <PortfolioCard portfolio_img= 'images/create.png' portfolio_head='create' portfolio_text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.' />
              <PortfolioCard portfolio_img= 'images/create.png' portfolio_head='create' portfolio_text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.' />
              <PortfolioCard portfolio_img= 'images/create.png' portfolio_head='create' portfolio_text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio
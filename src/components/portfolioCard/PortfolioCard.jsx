import React from 'react'

function PortfolioCard({portfolio_img, portfolio_head, portfolio_text}) {
  return (
    <>        
        <div class="relative flex w-80 flex-col rounded-xl bg-white/40 bg-clip-border text-gray-700 shadow-md hover:scale-105 transition duration-300 ease-in-out ">
            <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                <img src={portfolio_img} alt="img" />
            </div>
            <div class="p-6">
                <h5 class="mb-2 block font-Poppins font-sans text-xl text-[#000] font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {portfolio_head}
                </h5>
                <p class="block font-Poppins font-sans text-base text-[#000] font-light leading-relaxed  antialiased">
                    {portfolio_text} 
                </p>
            </div>
            <div class="p-6 pt-0">
                <button data-ripple-light="true" type="button" class="relative px-8 py-2 rounded-md text-[#0f1e34] text-[16px] bg-white/5 isolation-auto z-10 border-2 border-lime-500
                    before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-lime-500 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">
                Read More
                </button>
            </div>
        </div>
    </>
  )
}

export default PortfolioCard
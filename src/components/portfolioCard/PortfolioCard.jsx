import React from 'react'

function PortfolioCard({portfolio_img, portfolio_head, portfolio_text}) {
  return (
    <>        
        <div class="relative flex w-80 flex-col rounded-xl bg-[#7FA1C3] bg-clip-border text-gray-700 shadow-md">
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
                <button data-ripple-light="true" type="button" class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-Poppins font-sans text-xs font-semibold uppercase text-[#000] shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Read More
                </button>
            </div>
        </div>
    </>
  )
}

export default PortfolioCard
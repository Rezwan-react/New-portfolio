import React from 'react'
import './SocialButton.css'
import { Link } from 'react-router-dom';

function SocialButton({social_icons, social_links}) {
  return (
    <>
        
<Link to={social_links} target="_blank"
  className="group flex h-[50px] w-[50px] flex-col items-center justify-center border-[2px] border-[#F1ddcf] rounded-lg bg-transparent px-[10px] py-[10px] duration-200 hover:translate-y-[5%] active:translate-y-[7%] hover:shadow-[inset_0px_-2px_4px_0px_#f9f1eb,inset_0px_2px_4px_0px_#e8c8b0,0px_2px_16px_0px_#e8c8b0,0px_2px_16px_0px_#f9f1eb]"
>
  <p
    className="font-nunito text-3xl  text-[#94ADCF] duration-200 group-active:translate-y-[5%]"
  >
   {social_icons}
  </p>
</Link>

    </>
  )
}

export default SocialButton
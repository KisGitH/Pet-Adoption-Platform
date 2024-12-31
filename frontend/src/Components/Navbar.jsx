import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = ({ handleToggleContactUs }) => {

  const [showMobileMenu, setShowMobileMenu] = useState(false)

useEffect(()=>{
  if(showMobileMenu){
    document.body.style.overflow = 'hidden'
  }
  else{
    document.body.style.overflow = 'auto'
  }

  return ()=>{
    document.body.style.overflow = 'auto'
  };
},[showMobileMenu])
  return (
    <div className='fixed top-0 left-0 w-full z-10'>
        <div className=' flex justify-between items-center py-3 px-6 bg-[#FFFFFF] '>
            <div className='flex items-center gap-12' >
              <a href="#Header">
              <img src={assets.logo} alt="Logo" className='h-8 cursor-pointer'/>
              </a>
              <ul className='hidden md:flex gap-12'>
                  <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a> 
                  <a href="#Adopt" className='cursor-pointer hover:text-gray-400'>Adopt</a> 
                  <a href="#GetInvolved" className='cursor-pointer hover:text-gray-400'>Get Involved</a> 
                  <a href="#Blog" className='cursor-pointer hover:text-gray-400'>Blog</a> 
                  <a href="#AboutUs" className='cursor-pointer hover:text-gray-400'>About Us</a> 
              </ul>
            </div>
            <button className='hidden md:block bg-[#B28700] text-[#ffffff] font-normal text-sm px-6 py-1.5 rounded-md hover:bg-opacity-90'
                    onClick={handleToggleContactUs} >
                      Contact Us
                      </button>
            <img onClick={()=> setShowMobileMenu(true)} src={assets.menu} className='md:hidden w-7 cursor-pointer' alt="" />
        </div>
        {/*---------------mobile-menu----------------*/}
        <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'w-0 h-0'} 
        right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
              <div className=' flex justify-end p-6 cursor-pointer'>
                <img onClick={()=> setShowMobileMenu(false)} src={assets.xicon} className='w-7' alt="" />
              </div>
              <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                  <a onClick={()=> setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a> 
                  <a onClick={()=> setShowMobileMenu(false)} href="#Adopt" className='px-4 py-2 rounded-full inline-block'>Adopt</a> 
                  <a onClick={()=> setShowMobileMenu(false)} href="#GetInvolved" className='px-4 py-2 rounded-full inline-block'>Get Involved</a> 
                  <a onClick={()=> setShowMobileMenu(false)} href="#Blog" className='px-4 py-2 rounded-full inline-block'>Blog</a> 
                  <a onClick={()=> setShowMobileMenu(false)} href="#AboutUs" className='px-4 py-2 rounded-full inline-block'>About Us</a> 
                  <a onClick={() => {
                                      setShowMobileMenu(false);  // Closes the mobile menu
                                      handleToggleContactUs();   // Toggles the ContactUs visibility
                                    }}
                  href="#ContactUs" className='px-4 py-2 bg-black text-[#FFFFFF] rounded-full inline-block'>Contact Us</a>
              </ul>
        </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import Navbar from './Navbar'
import ImageSlider from './ImageSlider'

const Header = ({ handleToggleContactUs }) => {
  return (
    <div className='w-full 'id="Header" >
        <Navbar handleToggleContactUs={handleToggleContactUs}/>
        <div className='relative top-[3.5rem] w-full h-[50vh] md:h-[65vh] bg-[#B28700] flex md:flex-row flex-col'>
            <div className='hidden md:block text-[#FFFFFF] w-[60%] mx-6'>
                <h1 className='md:text-6xl text-4xl font-normal font-Ubuntu text-nowrap my-6'>Embrace Endless Love<br/>with Your New Furry<br/>Best Friend.</h1>
                <p className='text-yellow-300 md:text-lg text-nowrap'>Embrace endless love with your new furry best friend.</p>
                <p className='text-yellow-300 md:text-lg text-nowrap'>Adopt now and start creating unforgettable memories together.</p>
            </div>
            <div className='md:hidden text-[#FFFFFF] w-full mx-6'>
                <h1 className='md:text-6xl text-4xl font-normal font-Ubuntu text-nowrap mt-2 mb-0'>Embrace Endless Love<br/>with Your New Furry<br/>Best Friend.</h1>
            </div>
            <ImageSlider/>
        </div>
    </div>
  )
}

export default Header
import React from 'react'
import { assets } from '../assets/assets'

const AboutUs = () => {
  return (
    <div 
    id='AboutUs'
    className=' relative bottom-0 left-0 w-full p-4 bg-white '>
        
        <div className='flex items-center justify-evenly gap-5 md:justify-evenly'>
            <div className=''>
                <img src={assets.loginimage} alt="" className='md:w-40 w-24'/>
            </div>
            
            <div className='md:text-center'>
                <div  className='flex gap-8 '>
                    <div className='md:block hidden'>
                    <img src={assets.logo} alt="" className='w-10 '/>
                </div>    
                <h1 className='text-lg font-medium'>Your Pet Adoption Form</h1> 
                </div>
            <h1 className='mb-2'>Address: </h1>
            <p>#12, West Garden Street,<br/>
            BKL West Modern City,<br/
            >Newyork -49585.</p>
            </div>
        
            <div className='hidden md:block'>
                <img src={assets.registerimage} alt="" className='w-40'/>
            </div>
        </div>
      
    </div>
  )
}

export default AboutUs
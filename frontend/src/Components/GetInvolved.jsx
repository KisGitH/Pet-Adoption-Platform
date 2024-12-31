import React from 'react'


const GetInvolved = ( {handleToggleContactUs} ) => {
  return (
    <div className='w-full px-6 mt-4' id='GetInvolved'>
      <div className='font-Ubuntu flex flex-col items-center justify-center 
      w-full md:h-svh border-2 rounded-xl p-14 md:px-20 lg:px-32 overflow-hidden bg-cover'
      style={{backgroundImage: "url('/img4.svg')"}}>
        <h1 className='text-nowrap md:text-6xl text-3xl inline-block max-w-3xl font-semibold pt-20'>Get Involved With Us</h1>
        <p className='text-nowrap inline-block max-w-3xl font-medium'>By Provide food and care for our beloved pets</p>
        <a href="#ContactUs" onClick={handleToggleContactUs}  className='mt-8 border text-xl font-medium border-white px-8 py-3 rounded bg-[#B28700] bg-opacity-50 hover:bg-opacity-50 hover:bg-yellow-200 '>Contact Us</a>
      </div>
    </div>
  )
}

export default GetInvolved
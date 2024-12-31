import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const ContactUs = ({ onClose }) => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "51d9cd39-c5fc-4fd6-8ceb-f97ade7c5aba");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='md:fixed top-36 w-full h-auto md:px-[19rem]' id='ContactUs'>
        {/*----------Normal-screen------------*/}
        <div className='font-Ubuntu  w-full h-auto border-2 rounded-xl px-4 py-2 bg-[#FFFFFF] hidden md:block'>
            
            <div className=' flex justify-between pt-2 pb-3'>
                <h1 className='text-lg font-semibold'>Contact Us</h1>
                <img onClick={onClose} src={assets.xicon} className='w-6 cursor-pointer' alt="" />
            </div>
            <div className=' flex justify-between '>
                <div className='w-2/4 h-auto border-r px-2  border-black'>
                    <div className='flex items-center gap-2 mb-3'>
                        <img src={assets.logo} className='w-10'/>
                        <h1 className='text-lg font-medium'>Your Pet Adoption Form</h1>
                    </div>
                    <h1 className='mb-2'>Address: </h1>
                    <p>#12, West Garden Street,<br/>
                    BKL West Modern City,<br/
                    >Newyork -49585.</p>
                    <div className='px-10 mt-2'>
                        <img src={assets.img5} alt="img-of-pets" className='w-36' />
                    </div>
                </div>
                <div className=' w-full px-2 overflow-auto'>
                <h1 className='text-lg font-medium'>Contact Us</h1>
                <form onSubmit={onSubmit} action="" className='flex flex-col'>
                    <label htmlFor="contactName">Full Name</label>
                    <input 
                    type="text" 
                    name='name' 
                    required
                    title="Please enter your name" 
                    id='contactName'
                    autoComplete="name"
                    className='border border-black rounded p-1 '/>
                    <label htmlFor="contactEmail">Email</label>
                    <input 
                    type="email" 
                    name="email"
                    id='contactEmail' 
                    autoComplete="email"
                    className="border border-black rounded p-1" 
                    required 
                    pattern="[a-z0-9.%+.-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                    title="Please enter a valid email address"/>
                    <label htmlFor="contactNumber">Phone</label>
                    <input 
                    type="number" 
                    name='Phone' 
                    id='contactNumber'
                    autoComplete="tel"
                    pattern="[0-9]{10}"
                    required 
                    title="Please enter 10 digit phone number "
                    className='border border-black rounded p-1 '/>
                    <label htmlFor="contactAddress">Address</label>
                    <textarea name='Address' 
                    id='contactAddress'
                    autoComplete="address-line1"
                    className='border border-black rounded  px-1 py-2'/>

                    <div className=' flex justify-between py-2 '>
                        <a onClick={onClose} href="#" className='mt-8 border text-xl font-medium border-[#B28700] px-2  rounded-xl'>Close</a>
                        <button type="submit" className='mt-8 bg-[#B28700] text-white text-xl font-medium  px-2  rounded-xl'>{result ? result : "Send"}</button>
                        
                    </div>
                </form>
                </div>
            </div>
            
        </div>
        {/*----------mobile-screen------------*/}
        <div className='font-Ubuntu w-full h-auto  px-6 py-2 mb-4'>
            <div className='md:hidden w-full border-2 rounded-xl bg-[#FFFFFF] bg-opacity-70 p-4'>
                <h1 className='text-lg font-medium'>Contact Us</h1>
                <form onSubmit={onSubmit} className='flex flex-col'>
                    <label htmlFor="contactName">Full Name</label>
                    <input 
                    type="text" 
                    name='name'
                    id='contactName'
                    autoComplete="name" 
                    required 
                    title="Please enter your name"
                    className='w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400'/>
                    <label htmlFor="contactEmail">Email</label>
                    <input 
                    type="email" 
                    name="email" 
                    id='contactEmail'
                    autoComplete="email"
                    className='w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400' 
                    required 
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                    title="Please enter a valid email address"/>
                    <label htmlFor="contactPhone">Phone</label>
                    <input 
                    type="text" 
                    name='Phone' 
                    required 
                    id='contactPhone'
                    autoComplete="tel"
                    pattern="[0-9]{10}"
                    title="Please enter 10 digit phone number "
                    className='w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400'/>
                    <label htmlFor="contactAddress">Address</label>
                    <textarea name='Address' 
                    id='contactAddress'
                    autoComplete="address-line1"
                    className='w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400 py-2'/>
                    <button type='submit' className='mt-6 mx-auto px-6 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition'>{result ? result : "Send"}</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactUs
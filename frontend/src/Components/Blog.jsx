import React from 'react'

const Blog = () => {
  return (
    <div className='w-full px-6 py-4 ' id='Blog'>
        <div className=' w-full border-2 rounded-xl p-4 md:px-52 bg-[#B28700] bg-opacity-50'>
            <h1 className="text-3xl font-bold text-gray-800 mb-6 ">
            Finding Your Furry Friend: The Joy of Pet Adoption
            </h1>
            <p className="text-black mb-4">
            At <span className="font-semibold">[Pet Adoption Platform]</span>, we believe
            every pet deserves a loving home, and every family deserves the joy of
            having a furry companion. Pet adoption is not just about finding a
            pet; it's about changing a life—for both the pet and the adopter.
            Whether you're looking to adopt a playful puppy or a calm senior cat,
            our platform makes it easy for you to connect with pets in need of a
            home.
            </p>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Why Adopt a Pet?
            </h2>
            <ul className="list-disc pl-6 text-black space-y-2">
            <li>
                <strong>Save a Life:</strong> When you adopt a pet, you’re giving
                them a second chance at life and a loving home.
            </li>
            <li>
                <strong>A Variety of Pets:</strong> From puppies to senior pets,
                find the perfect match for your lifestyle.
            </li>
            <li>
                <strong>Affordable and Safe:</strong> Transparent fees and healthy,
                vetted pets ensure a smooth adoption process.
            </li>
            <li>
                <strong>Support the Community:</strong> Help reduce the number of
                homeless pets and promote animal welfare.
            </li>
            <li>
                <strong>Unconditional Love:</strong> Experience the joy and loyalty
                of a furry friend who will always be there for you.
            </li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
            How Our Platform Works
            </h2>
            <ol className="list-decimal pl-6 text-black space-y-2">
            <li>
                <strong>Search and Explore:</strong> Browse through profiles of pets
                available for adoption.
            </li>
            <li>
                <strong>Contact and Connect:</strong> Reach out to shelters directly
                through our platform.
            </li>
            <li>
                <strong>Adopt and Celebrate:</strong> Bring your new pet home after
                a quick screening process.
            </li>
            </ol>
            <div className="mt-8">
            <h2 className="text-4xl font-extrabold mb-4 animate-pulse text-[#fc3737]">
                Ready to Adopt <span className='text-6xl'>?</span>
            </h2>
            <p className="text-black mb-6">
                If you're ready to make a lifelong commitment to a pet, browse our
                platform and find the perfect companion. Together, we can make the
                world a better place, one adoption at a time. Adopt, don’t shop—
                because every pet deserves a loving home.
            </p>
            <a href="#Adopt">
                <button className="bg-[#B28700] text-white py-2 px-4 border-2 hover:border-[#fc3737] rounded hover:bg-transparent hover:text-[#fc3737] hover:px-5 transition-all">
                    Browse Pets Now
                </button>
            </a>
            </div>
            
            
         </div>
    </div>
  )
}

export default Blog
import React, { useState } from 'react';
import PetCards from './PetCards';

const Adopt = () => {
  const [filters, setFilters] = useState({
    PetType: '',
    PetBreed: '',
    PetGender: '',
    PetAge: ''
  });
  const [searchTriggered, setSearchTriggered] = useState(false);  // To trigger the search

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const handleSearchClick = () => {
    setSearchTriggered(true); // Set searchTriggered to true when the button is clicked
  };

  return (
    <div className='w-full px-6' id='Adopt'>
      <div className='font-Ubuntu w-full bg-white opacity-80 border-2 rounded-xl px-3 py-4'>
        <h1 className='text-[1.3rem] md:text-[1.7rem] leading-9 text-nowrap font-medium font-Ubuntu'>Find Your New Best Friend</h1>
        <div className='w-full mx-auto my-4 flex-wrap flex items-center justify-between' id='Filter'>
          <div>
            <label className='block text-[#959595] py-2 ' htmlFor="PetType">Pets Type</label>
            <select
              className='px-8 py-2  bg-[#F5F5F5] rounded-lg'
              name="PetType"
              id="PetType"
              value={filters.PetType}
              onChange={handleFilterChange}
            >
              <option value="">🐾 All</option>
              <option value="DOG">Dog</option>
              <option value="CAT">Cat</option>
              <option value="BIRD">Bird</option>
              <option value="BUNNY">Bunny</option>
              <option value="HAMSTER">Hamster</option>
            </select>
          </div>

          <div>
            <label className='block text-[#959595] py-2' htmlFor="PetBreed">Breed</label>
            <select
              className='px-8 py-2  bg-[#F5F5F5] rounded-lg'
              name="PetBreed"
              id="PetBreed"
              value={filters.PetBreed}
              onChange={handleFilterChange}
            >
              <option value="">🐾 All</option>
              
              {/* Add other breeds */}
            </select>
          </div>

          <div>
            <label className='block text-[#959595] py-2' htmlFor="PetGender">Gender</label>
            <select
              className='px-8 py-2  bg-[#F5F5F5] rounded-lg'
              name="PetGender"
              id="PetGender"
              value={filters.PetGender}
              onChange={handleFilterChange}
            >
              <option value="">🐾 All</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div>
            <label className='block text-[#959595] py-2' htmlFor="PetAge">Age</label>
            <select
              className='px-8 py-2  bg-[#F5F5F5] rounded-lg'
              name="PetAge"
              id="PetAge"
              value={filters.PetAge}
              onChange={handleFilterChange}
            >
              <option value="">🐾 All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              {/* Add more age options */}
            </select>
            
          </div>
          <button
            className='bg-[#B28700] text-[#ffffff] font-normal text-sm px-8 py-2  rounded-md hover:bg-opacity-90 mt-10'
            onClick={handleSearchClick}  // Trigger search on click
          >
            Search
          </button>
        </div>
        <PetCards filters={filters} searchTriggered={searchTriggered} />
      </div>
    </div>
  );
};

export default Adopt;

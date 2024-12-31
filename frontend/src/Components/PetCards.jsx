import React, { useEffect } from 'react';
import { usePetStore } from '../store/pet.js';
import { assets } from '../assets/assets';

const PetCards = ({ filters, searchTriggered }) => {
  const { fetchPets, pets } = usePetStore();

  useEffect(() => {
    if (searchTriggered) {
      fetchPets(filters); // Pass filters to fetchPets only when search is triggered
    }
  }, [filters, fetchPets, searchTriggered]);

  const filteredPets = pets.filter((pet) => {
    if (!searchTriggered) return true;  // If search is not triggered, show all pets
    return (
      (filters.PetType === '' || pet.catagory === filters.PetType) &&
      (filters.PetGender === '' || pet.gender === filters.PetGender) &&
      (filters.PetAge === '' || pet.age === filters.PetAge)
    );
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4">
      {filteredPets.map((pet) => (
        <div
          key={pet._id}
          className="p-2 border-2 border-[#f3f03f] shadow-[#f7da7c] rounded-xl bg-white shadow-lg hover:shadow-[#f77c7c] hover:border-0 transition-all"
        >
          <img
            src={pet.image}
            alt={pet.name}
            className="w-full h-80 object-cover object-top rounded-t-xl"
          />
          <h3 className="text-2xl text-center font-medium mt-2">{pet.name}</h3>
          <h4 className="text-sm text-center text-gray-500">{pet.catagory}</h4>
          <div className="flex items-center justify-between mt-2 px-2">
            <img
              src={pet.gender === 'Male' ? assets.male : assets.female}
              alt={pet.gender}
              className="h-6 w-6"
            />
            <h4 className="text-gray-700">Age: {pet.age}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PetCards;

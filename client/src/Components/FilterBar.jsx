import React, { useState } from 'react';

const FilterBar = ({ categories, onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategorySelect(category);
  };

  return (
    <div className='filter-bar flex flex-wrap justify-center py-4 gap-2 sm:gap-4'>
      {categories.map((category) => (
        <button
          key={category}
          className={`filter-button text-sm sm:text-base mx-1 sm:mx-2 py-2 px-3 sm:px-4 text-white ${selectedCategory === category ? 'bg-[#6082b6]' : 'bg-gray-700'} hover:bg-[#6082b6] duration-500 rounded-md`}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;

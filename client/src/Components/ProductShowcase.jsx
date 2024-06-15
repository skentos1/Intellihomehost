import React from 'react';
import SmartLights from '../assets/Smart_lights.jpeg';
import SmartDoors from '../assets/Smart_doors.jpg';
import SmartHeating from '../assets/Smart_heating.jpg';
import ProductCard from './ProductCard';
import Camera from '../assets/Exterior_camera.jpg';
import Gate from '../assets/Exterior_gate.jpg';
import Lights from '../assets/Exterior_lights.jpg';
import FilterBar from './FilterBar';

const content = [
  {
    id: 1,
    Img: SmartLights,
    category: 'Svetla',
    title: "Plne inteligentne svetla",
  },
  {
    id: 2,
    Img: SmartDoors,
    category: 'Bezpecnost',
    title: "Elektronicke zamky",
  },
  {
    id:3,
    Img: SmartHeating,
    category: 'Ovladanie',
    title: "Inteligentne kurenie",
  },
  {
    id:4,
    Img: Camera,
    category: 'Bezpecnost',
    title: "Bezpecnostny kamerovy system",
  },
  {
    id:5,
    Img: Gate,
    category: 'Ovladanie',
    title: "Ovladanie brany pomocou aplikacie",
  },
  {
    id:6,
    Img: Lights,
    category: 'Svetla',
    title: "Plne inteligentne exterierove svetla",
  },
];

const ProductShowcase = ({ selectedCategory, setSelectedCategory }) => {
  const filteredProducts = selectedCategory === 'ALL' ? content : content.filter(product => product.category === selectedCategory);
  
  const categories = ['ALL', 'Svetla', 'Ovladanie', 'Bezpecnost'];
  
  return (
    <div className='w-full py-24 px-4 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>
      <FilterBar categories={categories} onCategorySelect={setSelectedCategory} />
      <div className='mx-auto py-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[80%]'>
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} img={product.Img} title={product.title} id={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;

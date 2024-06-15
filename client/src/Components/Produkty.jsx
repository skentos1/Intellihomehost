import React, { useEffect, useState } from 'react';
import inter from '../assets/Inter.jpg';
import ProductShowcase from './ProductShowcase';
import { useLocation } from 'react-router-dom';

const Produkty = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  useEffect(() => {
    if (location.state?.scrollToTop) {
      window.scrollTo(0, 0);
    }
    setIsLoaded(true);
  }, [location]);

  return (
    <div>
      <div className='relative h-screen overflow-hidden'>
        <div 
          className={`absolute inset-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} 
          style={{ backgroundImage: `url(${inter})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className={`w-full h-full ${isLoaded ? 'animate-zoomOut' : ''}`} style={{ filter: 'brightness(0.7)' }}></div>
        </div>
        <div className='relative z-8 flex flex-col items-center justify-center h-full'>
          <h1 className='text-white text-5xl font-bold mb-4'>IntelliHome Produkty</h1>
          <p className='text-white text-xl'>Vylepsite si svoju domacnost</p>
        </div>
      </div>
      <ProductShowcase selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
    </div>
  );
};

export default Produkty;

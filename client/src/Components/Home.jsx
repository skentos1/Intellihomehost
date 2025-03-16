import React, { useRef } from 'react';
import { ReactTyped } from 'react-typed';
import ProductOverview from './ProductOverview';
import Cards from './Cards';
import final from '../assets/final.jpg';

const Home = () => {
  const interierHomeRef = useRef(null);

  const scrollToInterierHome = () => {
    interierHomeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='text-white bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>
      <div className='max-w-[75%] mx-auto h-screen flex items-center justify-center pb-8'>
        <div className='relative w-full h-3/4 bg-cover bg-no-repeat bg-center mb-8 flex flex-wrap rounded-lg' style={{ backgroundImage: `url(${final})` }}>
          
          {/* TEXT + BUTTON */}
          <div className='absolute left-4 top-16 sm:top-[15%] xs:top-[10%] p-4 w-full max-w-[90%] sm:max-w-[75%] text-center sm:text-left'>
            <p className='text-[#6082b6] lg:text-xl font-bold text-lg'>
              Ovladanie pomocou telefonu
            </p>
            <h1 className='text-3xl md:text-5xl sm:text-5xl font-bold py-4'>
              Inteligentna domacnost.
            </h1>
            <div className='flex flex-wrap justify-center sm:justify-start items-center'>
              <p className='text-xl md:text-3xl sm:text-3xl font-bold py-4'>
                Rychle, jednoduche ovladanie
              </p>
              <ReactTyped
                className='text-xl md:text-3xl sm:text-2xl font-bold md:pl-4 pl-2'
                strings={['svetiel', 'dveri', 'kamier']}
                typeSpeed={120}
                backSpeed={140}
                loop
              />
            </div>
            <p className='text-lg md:text-xl md:py-2 font-bold text-[#8c92ac]'>
              Majte pod kontrolou svoju domacnost z pohodlia gauca alebo prace.
            </p>
            <button
              onClick={scrollToInterierHome}
              className='relative h-12 w-[200px] overflow-hidden border border-[#6082b6] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-[#6082b6] before:opacity-10 before:duration-700 hover:shadow-[#6082b6] hover:before:-translate-x-40 rounded-md font-bold my-6 py-3'
            >
              <span className='relative z-10'>Zistiť viac</span>
            </button>
          </div>

        </div>
      </div>

      <div ref={interierHomeRef}>
        <ProductOverview />
        <Cards />
      </div>
    </div>
  );
}

export default Home;

import React, { useEffect, useState } from 'react'
import Camera from '../assets/Exterior_camera.jpg'
import Gate from '../assets/Exterior_gate.jpg'
import Lights from '../assets/Exterior_lights.jpg'
import { Navigate, useNavigate } from 'react-router-dom'


const ExterierHome = () => {

  
  const content = [
    {
      Img: Lights,
      title: 'Plne inteligentne exterierove svetla',
      subtitle: 'Ovladatelne pomocou telefonu',
      features: ['-ovladane fotobunkou', '-automaticke vypinanie', '-plny pristup']
    },
    {
      Img: Camera,
      title: 'Bezpecnostny kamerovy system',
      subtitle: 'Kontrolovanie pozemku pomocou telefonu',
      features: ['-ovladanie kamier', '-prehlad v telefone', '-audiokontrola']
    },
    {
      Img: Gate,
      title: 'Ovladanie brany pomocou aplikacie',
      subtitle: 'Ovladatelne pomocou telefonu',
      features: ['-ovladane fotobunkou', '-automaticke vypinanie', '-plny pristup']
    },
  ]
  
  
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = content.length;
  const currentContent = content[currentPage - 1];
  const navigate = useNavigate();
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage(prevPage => (prevPage === totalPages ? 1 : prevPage + 1))
    },5000)

    return () => clearInterval(interval);
  }, [totalPages])

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/produkty', { state: { scrollToTop: true } });
  }

  


  return (
    <div className='max-w-[1240px] mx-auto py-[100px]'>
      <div className='grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto py-4' src={currentContent.Img} alt="img" />
        <div className='flex flex-col justify-center '>
          <p className='text-[#6082b6] md:text-xl text-lg font-semibold '>{currentContent.subtitle}</p>
          <h1 className='font-bold text-black md:text-3xl sm:text-2xl text-xl py-2 uppercase'>{currentContent.title}</h1>
          {currentContent.features.map((feature, index) =>
            <p key={index} className='text-black md:text-lg'>{feature}</p>
          )}
          <button onClick = {handleClick}className='relative mt-5 h-10 w-[200px] overflow-hidden border border-[#6082b6] bg-white text-black shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-[#6082b6] before:opacity-10 before:duration-700 hover:shadow-[#6082b6] hover:before:-translate-x-40 rounded-md font-bold'>
              <span className='relative z-10'>Objednat si</span>
            </button>
        </div>
      </div>
      <div className='flex justify-center mt-8'>
        {Array.from({length: totalPages}).map((_, index) =>(
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`h-3 w-3 mx-2 rounded-full ${currentPage === index + 1 ? 'bg-[#6082b6]' : 'bg-gray-300'}`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ExterierHome

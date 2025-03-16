import React from 'react';
import Petra from '../assets/Miska.avif'

import Peter from '../assets/Peter.jpg'
import Jakub  from '../assets/Jakub.jpg'


const Technicians = () => {
  return (
    <div className="w-full min-h-screen pt-[7rem] pb-[6rem] px-4 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%, rgba(255,255,255,0), rgba(120,119,198,0.3))]">
      <h1 className='text-white text-center text-4xl font-bold'>Nasi Technici</h1>
      <div className='max-w-[1240px] mt-10 mx-auto grid md:grid-cols-3 gap-8'>
        
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white'>
          <img className='w-60 mx-auto bg-white' src={Peter} alt="Marek" />
          <h1 className='text-black text-2xl font-bold text-center pt-4 pb-2'>Marek</h1>
          <p className='text-[#6082b6] text-lg text-center pb-2 font-semibold'>Hlavný Technik</p>
          <div className='text-center font-medium'>
            <p className='text-black text-medium border-b py-2'>15 rokov skúseností</p>
            <p className='text-black text-medium border-b py-2'>Špecialista na inteligentné systémy</p>
            <p className='text-black text-medium border-b py-2'>Odborník na inštaláciu a údržbu</p>
          </div>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white'>
          <img className='w-60 mx-auto bg-white' src={Petra} alt="Petra" />
          <h1 className='text-black text-2xl font-bold text-center pt-4 pb-2'>Petra</h1>
          <p className='text-[#6082b6] text-lg text-center pb-2 font-semibold'>AI Specialistka</p>
          <div className='text-center font-medium'>
            <p className='text-black text-medium border-b py-2'>10 rokov skúseností</p>
            <p className='text-black text-medium border-b py-2'>Vedúca projektov umelej inteligencie</p>
            <p className='text-black text-medium border-b py-2'>Expertka na strojové učenie</p>
          </div>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white'>
          <img className='w-60 mx-auto bg-white' src={Jakub} alt="Jakub" />
          <h1 className='text-black text-2xl font-bold text-center pt-4 pb-2'>Jakub</h1>
          <p className='text-[#6082b6] text-lg text-center pb-2 font-semibold'>Systémový Inžinier</p>
          <div className='text-center '>
            <p className='text-black text-medium border-b py-2'>12 rokov skúseností</p>
            <p className='text-black text-medium border-b py-2'>Špecialista na integráciu systémov</p>
            <p className='text-black text-medium border-b py-2'>Odborník na bezpečnostné riešenia</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technicians;

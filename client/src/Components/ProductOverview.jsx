import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import InterierHome from './InterierHome';
import ExterierHome from './ExterierHome'

const ProductOverview = () => {

    const [showInterier, setShowInterier] = useState(true);
    const [showExterier, setShowExterier] = useState(false);
    
    const handleClickInterier = () => {
        setShowInterier(true);
        setShowExterier(false);
    }
    
    const handleClickExterier = () => {
        setShowExterier(true);
        setShowInterier(false);
    }

    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='flex justify-center'>
                <h1 className='text-black font-semibold text-3xl md:text-4xl lg:text-5xl py-6'>
                    Co ponukame?
                </h1>
            </div>
            <p className='text-[#6082b6] text-xl md:text-2xl lg:text-3xl font-bold flex justify-center mt-10'>
                <button className='hover:text-black px-2' onClick={handleClickInterier}>Interier</button> / 
                <button className='hover:text-black px-2' onClick={handleClickExterier}>Exterier</button>
            </p>
            <div>
                {showInterier ? <InterierHome /> : <ExterierHome />}
            </div>
        </div>
    )
}

export default ProductOverview

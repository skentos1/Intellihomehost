import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';




const Navbar = () => {

    const [nav, setNav] = useState(true);
    const navigate = useNavigate();

    const handleLoginClick = () => {
        setNav(true);
        navigate('/login');
    }
    

    const handleNav = () => {
        setNav(!nav);
    }
    const handleLinkClick = () => {
        setNav(true);
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white '>
      <h1 className=' text-3xl font-bold text-[#6082b6]'><Link to='/dashboard'>IntelliHome</Link></h1>
      <ul className='hidden md:flex  '>
        <Link to='/' className='p-4 hover:underline'>Domov</Link>
        <Link to='/produkty' className='p-4 hover:underline'>Produkty</Link>
        <Link to='/meeting' className='p-4 hover:underline' >Stretnutie</Link>
        <Link to='/o-nas' className='p-4 hover:underline'>O nas</Link>
        <div className="flex justify-end">
            <button onClick={handleLoginClick} className='bg-white hover:bg-[#6082b6] text-black font-bold py-1 px-2 rounded text-sm'>Prihlasit sa</button>
        </div>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
            {!nav ?  <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/> }
      </div>
    
      <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r z-10 border-r-gray-900  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] ease-in-out duration-500' :  'ease-in-out duration-500 fixed left-[-100%]'}>
             <ul className='p-4 z-15'>
                <h1 className=' w-full m-4 text-3xl font-bold text-[#6082b6]'><Link to='/dashboard'>IntelliHome</Link></h1>
                <li className='uppercase border-b border-gray-600' ><Link to='/' className='block p-4' onClick={handleLinkClick}>Domov</Link></li>
                <li className='uppercase border-b border-gray-600'><Link to='/produkty' className='block p-4' onClick={handleLinkClick}>Produkty</Link></li>
                <li className='uppercase border-b border-gray-600'><Link to='/stretnutie' className='block p-4' onClick={handleLinkClick}>Stretnutie</Link></li>
                <li className='uppercase border-b border-gray-600'><Link to='/o-nas' className='block p-4' onClick={handleLinkClick}>O nas</Link></li>

                <div className="flex justify mt-4">
                    <button onClick={handleLoginClick} className='bg-white hover:bg-[#6082b6] text-black font-bold py-2 px-4 rounded'>Prihlasit sa</button>
                </div>
            </ul>
        </div>
    </div>
  )
}

export default Navbar

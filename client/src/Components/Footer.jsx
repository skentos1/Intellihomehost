import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlinePlace } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { CiPhone } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="border-t-[0.5px] border-[#6082b6] w-full py-8 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%, rgba(255,255,255,0), rgba(120,119,198,0.3))]">
      <div className='px-2 ' >
        <h1 className='w-full text-3xl font-bold text-[#6082b6]'>IntelliHome</h1>
        <p className='text-[#8c92ac] py-2'>Pre vasu lepsiu domacnost</p>
        <div className='flex gap-8 md:w-[75%] py-2'>
            <FaFacebookSquare size={30}/>
            <FaXTwitter size={30}/>
            <FaInstagramSquare size={30}/>
            <FaLinkedin size={30}/>
        </div> 
      </div>
      <div className='px-2'>
        <h1 className='text-white font-bold text-lg pb-2'>Bratislava</h1>
        <ul className='text-[#8c92ac]'>
          <li className='flex items-center pb-1'><CgMail className='mr-2'/>Intellihome.ba@gmail.com</li>
          <li className='flex items-center pb-1'><MdOutlinePlace className='mr-2'/>Ruzinov, Namestska 254/12</li>
          <li className='flex items-center pb-1'><CiPhone className='mr-2'/>+421987331256</li>
        </ul>
      </div>
      <div className='px-2'>
        <h1 className='text-white font-bold text-lg pb-2'>Kosice</h1>
        <ul className='text-[#8c92ac]'>
          <li className='flex items-center pb-1'><CgMail className='mr-2'/>Intellihome.ke@gmail.com</li>
          <li className='flex items-center pb-1'><MdOutlinePlace className='mr-2'/>Aupark, Nam. Osloboditelov 254/12</li>
          <li className='flex items-center pb-1'><CiPhone className='mr-2'/>+421987331925</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;

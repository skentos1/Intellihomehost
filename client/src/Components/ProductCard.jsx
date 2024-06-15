import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({img, title, id}) => {
  return (
    <div className='relative group py-4'>
        <Link to={`/product/${id}`}>
            <img src={img} alt="/"  className='object-cover w-full h-full transition-transform duration-300 group-hover:scale-105'/>
            <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white'>
                <h1 className='text-xl font-bold'>
                    {title}
                </h1>
            </div>
        </Link>
    </div>
  )
}

export default ProductCard

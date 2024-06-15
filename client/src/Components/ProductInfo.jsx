import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import description from './description';

const ProductDetail = () => {
  const { id } = useParams();
  const product = description.find((p) => p.id === parseInt(id));
  const navigate = useNavigate();

  const handleClick = (e) =>  {
    e.preventDefault();
    navigate('/objednavky')
  }

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='py-8w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>
      <div 
        className='relative h-96 bg-cover bg-center' 
        style={{ backgroundImage: `url(${product.Banner})` }}
      >
        <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
          <h1 className='text-white text-5xl font-bold'>{product.title1}</h1>
        </div>
      </div>
      <div className='mt-10 max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='flex flex-col'>
          <img src={product.Img} alt={product.title1} className='w-full h-full object-cover n -[#6082b6] rounded-lg' />
        </div>
        <div className='flex flex-col justify-center space-y-8'>
          <div>
            <h2 className='text-3xl font-bold mb-4 text-[#6082b6]'>{product.title1}</h2>
            <p className='text-l text-white'>{product.description1}</p>
          </div>
          <div>
            <h2 className='text-2xl font-bold mb-4 text-[#8c92ac]'>{product.sub1}</h2>
            <p className='text-l text-white'>{product.subdescription1}</p>
          </div>
        </div>
      </div>
      <div className='max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='flex flex-col justify-center space-y-8'>
          <div>
            <h2 className='text-3xl font-bold mb-4 text-[#6082b6]'>{product.title2}</h2>
            <p className='text-l text-white'>{product.description2}</p>
          </div>
          <div>
            <h2 className='text-2xl font-bold mb-4 text-[#8c92ac]'>{product.sub2}</h2>
            <p className='text-l text-white'>{product.subdescription2}</p>
          </div>
        </div>
        <div className='flex flex-col'>
          <img src={product.Img2} alt={product.title} className='w-full h-full object-cover text-[#6082b6] rounded-lg' />
        </div>
      </div>
      <div className='flex justify-center py-8'>
        <button onClick={handleClick}className='mx-2 mb-4 py-3 px-8 rounded-lg bg-gradient-to-r from-[#4a69bd] to-[#6a89cc] hover:from-[#6a89cc] hover:to-[#4a69bd] hover:scale-105 transform transition duration-500 ease-in-out text-white shadow-lg'>
          Objednat si
        </button>
      </div>
    </div>
  );
};
export default ProductDetail;
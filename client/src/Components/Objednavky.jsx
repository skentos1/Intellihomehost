import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PersonalInfo from './PersonalInfo';
import svetla2 from '../assets/description/Svetla2.jpg';
import SmartLock1 from '../assets/description/SmartLockD.jpg';
import kurenie1 from '../assets/description/kurenie1.jpg';
import kamera1 from '../assets/description/kamera1.jpg';
import brana1 from '../assets/description/brana1.jpg';
import exterior1 from '../assets/description/exterior1.jpg';
import OrderConfirm from './OrderConfirm';

const Objednavky = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [userInfo, setUserInfo] = useState({
    meno: '',
    priezvisko: '',
    email: '',
    mobil: '',
    adresa: '',
    mesto: '',
    psc: ''
  });
  const [step, setStep] = useState(1);
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = [
    {
      id: 1,
      Img: svetla2,
      price: 800,
      discountedPrice: 600,
      title: "Plne inteligentne svetla",
      subtitle: "Ovladanie svetiel pomocou telefonu",
      features: ['-lahke ovladanie', '-plny pristup', '-automaticke vypinanie'],
    },
    {
      id: 2,
      Img: SmartLock1,
      price: 800,
      discountedPrice: 700,
      title: "Elektronicke zamky",
      subtitle: "Kontrola nad dverami telefonom",
      features: ['-otlacok prsta', '-otvaranie pinom', '-ovladanie telefonom'],
    },
    {
      id: 3,
      Img: kurenie1,
      price: 800,
      discountedPrice: 750,
      title: "Inteligentne kurenie",
      subtitle: "Nastavenie teploty pomocou telefonu",
      features: ['-automaticka teplota', '-ovladanie telefonom', '-komplexny termostat'],
    },
    {
      id: 4,
      Img: kamera1,
      price: 800,
      discountedPrice: 650,
      title: 'Bezpecnostny kamerovy system',
      subtitle: 'Kontrolovanie pozemku pomocou telefonu',
      features: ['-ovladanie kamier', '-prehlad v telefone', '-audiokontrola'],
    },
    {
      id: 5,
      Img: brana1,
      price: 800,
      discountedPrice: 700,
      title: 'Ovladanie brany pomocou aplikacie',
      subtitle: 'Ovladatelne pomocou telefonu',
      features: ['-ovladane fotobunkou', '-automaticke vypinanie', '-plny pristup'],
    },
    {
      id: 6,
      Img: exterior1,
      price: 800,
      discountedPrice: 600,
      title: 'Plne inteligentne exterierove svetla',
      subtitle: 'Ovladatelne pomocou telefonu',
      features: ['-ovladane fotobunkou', '-automaticke vypinanie', '-plny pristup'],
    },
  ];

  const handleItemSelection = (id) => {
    setSelectedItems((prevItems) => {
      if (prevItems.includes(id)) {
        return prevItems.filter(itemId => itemId !== id);
      } else {
        return [...prevItems, id];
      }
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value
    });
  };

  const handleSubmitProducts = (e) => {
    e.preventDefault();
    if (selectedItems.length > 0) {
      setStep(2);
    } else {
      alert("Prosim vyberte si aspon jeden produkt.");
    }
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    const orderSummary = content.filter(item => selectedItems.includes(item.id));
    const totalPrice = orderSummary.reduce((total, item) => total + item.discountedPrice, 0);
    const totalDPHPrice = (parseFloat(totalPrice) * 1.2).toFixed(2);

    const orderData = {
      userInfo,
      orderSummary,
      totalPrice,
      totalDPHPrice,
    };

    try {
      const response = await axios.post('http://localhost:3000/api/orders', orderData);
      const { order } = response.data;
      console.log('Order submitted successfully:', response.data);
      setOrderDetails(order);  // Set the order details in state
      setStep(3);  // Set step to 3 to render the ThankYouPage
    } catch (error) {
      console.error('Error submitting order:', error);
    }
  };

  const calculateTotal = () => {
    return selectedItems.reduce((total, id) => {
      const item = content.find(item => item.id === id);
      return total + item.discountedPrice;
    }, 0).toFixed(2);
  };

  return (
    <div className='py-8 w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>
      <h1 className='text-white text-center font-bold text-3xl pt-8'>{step === 1 ? 'Vyskladajte si svoju domacnost' : step === 2 ? 'Vasa objednavka' : ''}</h1>
      <div className='container mx-auto'>
        {step === 1 && (
          <form onSubmit={handleSubmitProducts} className='space-y-8'>
            {content.map((item, index) => (
              <div key={item.id} className='mt-10 max-w-[800px] mx-auto py-8 px-4 space-y-8 border-[#6082b6] border-t'>
                {/* Alternating Layout */}
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${index % 2 === 0 ? '' : 'md:[&>*:nth-child(1)]:order-last'}`}>
                  <div className='flex flex-col justify-center'>
                    <img src={item.Img} alt={item.title} className='w-full h-[200px] object-cover rounded-lg' />
                    <button
                      type='button'
                      onClick={() => handleItemSelection(item.id)}
                      className={`relative mt-6 h-10 w-full md:w-[200px] overflow-hidden border border-[#6082b6] ${
                        selectedItems.includes(item.id) ? 'bg-[#6082b6] text-white' : 'bg-white text-black'
                      } shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-[#6082b6] before:opacity-10 before:duration-700 hover:shadow-[#6082b6] hover:before:-translate-x-40 rounded-md font-bold`}
                    >
                      <span className='relative z-10'>{selectedItems.includes(item.id) ? '✓' : 'Pridat'}</span>
                    </button>
                  </div>
                  <div className='flex flex-col justify-center'>
                    <div>
                      <h2 className='text-3xl font-bold mb-2 text-[#6082b6]'>{item.title}</h2>
                      <p className='text-l text-white mb-4'>{item.subtitle}</p>
                      <ul className='space-y-2'>
                        {item.features.map((feature, i) => (
                          <li key={i} className='text-l text-white'>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className='mt-6 flex items-center'>
                        <span className='text-xl text-white font-bold mr-2 line-through'>€{item.price}</span>
                        <span className='text-xl text-[#6082b6] font-bold'>€{item.discountedPrice}</span>
                      </div>
                      <div className='text-l text-gray-400 mt-2'>alebo mesacne na splatky €{(item.discountedPrice / 12).toFixed(2)}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className='max-w-[800px] mx-auto py-8 px-4 text-center'>
              <h2 className='text-2xl text-white font-bold mb-4'>Cena: €{calculateTotal()}</h2>
              <button type='submit' className='mx-2 mb-4 py-3 px-8 rounded-lg bg-gradient-to-r from-[#4a69bd] to-[#6a89cc] hover:from-[#6a89cc] hover:to-[#4a69bd] hover:scale-105 transform transition duration-500 ease-in-out text-white shadow-lg'>
                Potvrdit produkty
              </button>
            </div>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmitOrder} className='space-y-8 max-w-[800px] mx-auto py-8 px-4'>
            <PersonalInfo userInfo={userInfo} handleInputChange={handleInputChange} cartItems={content.filter(item => selectedItems.includes(item.id))}
              calculateTotal={calculateTotal}/>
            <div className='text-center'>
              <button type='submit' className='mx-2 mb-4 py-3 px-8 rounded-lg bg-gradient-to-r from-[#4a69bd] to-[#6a89cc] hover:from-[#6a89cc] hover:to-[#4a69bd] hover:scale-105 transform transition duration-500 ease-in-out text-white shadow-lg'>
                Odoslat objednavku
              </button>
            </div>
          </form>
        )}
        {step === 3 && orderDetails && (
          <OrderConfirm orderDetails={orderDetails} />  // Render the ThankYouPage component with order details
        )}
      </div>
    </div>
  );
};

export default Objednavky;

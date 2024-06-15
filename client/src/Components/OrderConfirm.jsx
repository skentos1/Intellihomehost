import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const OrderConfirm = ({ orderDetails }) => {
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    if (orderDetails && orderDetails.userInfo) {
      const { adresa, mesto, psc } = orderDetails.userInfo;
      const address = `${adresa}, ${mesto}, ${psc}`;

      console.log('Fetching coordinates for address:', address);

      fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        address
      )}&key=${import.meta.env.VITE_GOOGLE_API}`)
        .then((response) => response.json())
        .then((data) => {
          console.log('Geocode response:', data);
          if (data.results.length > 0) {
            const location = data.results[0].geometry.location;
            console.log('Location found:', location);
            setCoordinates(location);
          } else {
            console.error('No results found for the address.');
          }
        })
        .catch((error) => console.error('Error geocoding address:', error));
    }
  }, [orderDetails]);

  if (!orderDetails) {
    return <div>Loading...</div>;
  }

  const {
    orderNumber,
    userInfo,
    orderSummary,
    shipping,
    totalPrice,
    totalDPHPrice,
  } = orderDetails;

  const safeShipping = (shipping ?? 0).toFixed(2);

  console.log('Order Details:', orderDetails);
  console.log('Coordinates:', coordinates);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
      <h1 className='text-4xl font-bold text-center py-4 text-[#6082b6] pb-8'>Detail Objednavky</h1>
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Dakujeme za vasu objednavku!</h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold">Cislo #{orderNumber}</h2>
          <h2 className="text-xl font-semibold">Dakujeme, {userInfo.meno}!</h2>
        </div>
        
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">Order Updates</h3>
          <p className="text-gray-700">Bol vam odoslany email s platobnymi udajmi na zrealizovanie platby.</p>
        </div>
        
        <div className="mb-8">
          {coordinates ? (
            <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_API}>
              <GoogleMap
                mapContainerStyle={{ width: '100%', height: '300px' }}
                center={coordinates}
                zoom={15}
              >
                <Marker position={coordinates} />
              </GoogleMap>
            </LoadScript>
          ) : (
            <p>Loading map...</p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Kontakt</h3>
            <p className="text-gray-700">{userInfo.email}</p>
            <p className="text-gray-700">{userInfo.meno} {userInfo.priezvisko}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Addresa</h3>
            <p className="text-gray-700">{userInfo.adresa},</p>
            <p className="text-gray-700">{userInfo.mesto}, </p>
            <p className="text-gray-700"> {userInfo.psc}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Platba</h3>
            <p className="text-gray-700">Platobne udaje vam boli poslane na mail.</p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg shadow-inner">
          <h3 className="text-lg font-semibold mb-4">Vasa Objednavka ({orderSummary.length})</h3>
          {orderSummary.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b py-4">
              <div>
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-gray-700">{item.subtitle}</p>
              </div>
              <div className="text-lg font-semibold">€{item.discountedPrice.toFixed(2)}</div>
            </div>
          ))}
          
          <div className="mt-4">
            <div className="flex justify-between py-2">
              <span className="text-gray-700">Cena:</span>
              <span className="text-gray-700">€{totalPrice}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-700">Dodanie</span>
              <span className="text-gray-700">€{safeShipping}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-700 font-semibold">Cena s DPH: </span>
              <span className="text-gray-700 font-semibold">€{totalDPHPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirm;

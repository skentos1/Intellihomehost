import React, { useEffect } from 'react';

const PersonalInfo = ({ userInfo, handleInputChange, cartItems, calculateTotal }) => {
  const total = calculateTotal();
  const tax = (total * 0.2).toFixed(2);
  const totalWithTax = (parseFloat(total) + parseFloat(tax)).toFixed(2);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-8 max-w-[800px] mx-auto py-8 px-4 bg-white rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Customer Info */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-800">Osobne udaje:</h2>
          <input
            type="text"
            name="meno"
            value={userInfo.meno}
            onChange={handleInputChange}
            placeholder="Krstne meno"
            className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            required
          />
          <input
            type="text"
            name="priezvisko"
            value={userInfo.priezvisko}
            onChange={handleInputChange}
            placeholder="Priezvisko"
            className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            required
          />
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            required
          />
          <input
            type="text"
            name="mobil"
            value={userInfo.mobil}
            onChange={handleInputChange}
            placeholder="Telefonne cislo"
            className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            required
          />
          <input
            type="text"
            name="adresa"
            value={userInfo.adresa}
            onChange={handleInputChange}
            placeholder="Adresa"
            className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            required
          />
          <input
            type="text"
            name="mesto"
            value={userInfo.mesto}
            onChange={handleInputChange}
            placeholder="Mesto"
            className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            required
          />
          <input
            type="text"
            name="psc"
            value={userInfo.psc}
            onChange={handleInputChange}
            placeholder="PSC"
            className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            required
          />
        </div>

        {/* Cart Info */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-800">Vase produkty</h2>
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img src={item.Img} alt={item.title} className="w-16 h-16 object-cover rounded-lg" />
                  <div>
                    <p className="text-gray-800 font-bold">{item.title}</p>
                    <p className="text-gray-600">{item.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-800 font-bold">€{item.discountedPrice.toFixed(2)}</p>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center border-t pt-4">
            <span className="text-gray-800 font-bold">Cena:</span>
            <span className="text-gray-800 font-bold">€{total}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-800">Dodanie:</span>
            <span className="text-gray-800">{total === 0 ? '0.00' : 'Zdarma'}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-800">DPH (20%):</span>
            <span className="text-gray-800">€{tax}</span>
          </div>
          <div className="flex justify-between items-center border-t pt-4">
            <span className="text-gray-800 font-bold">Cena s DPH:</span>
            <span className="text-gray-800 font-bold">€{totalWithTax}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;

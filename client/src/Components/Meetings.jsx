import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import Meeting1 from '../assets/Meeting1.avif';
import BratislavaImg from '../assets/Bratislava.jpg';
import KosiceImg from '../assets/Kosice.jpg';
import './meetings.css';

const Meetings = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState('09:00');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('Bratislava');
  const [animate, setAnimate] = useState(false);
  const [bookedSlots, setBookedSlots] = useState([]);

  useEffect(() => {
    setAnimate(true);
  }, []);

  useEffect(() => {
    const fetchBookedSlots = async () => {
      try {
        const response = await axios.get('http://localhost:3000/meeting/booked-slots', {
          params: {
            date: startDate.toISOString().split('T')[0],
            city,
          },
        });
        setBookedSlots(response.data.bookedSlots);
      } catch (error) {
        console.error('Error fetching booked slots:', error);
      }
    };
  
    fetchBookedSlots();
  }, [startDate, city]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const meetingData = {
      date: startDate,
      timeSlot,
      firstName,
      lastName,
      email,
      phoneNumber,
      city,
    };

    try {
      await axios.post('http://localhost:3000/meeting/book-meeting', meetingData);
      alert('Meeting booked successfully!');
    } catch (error) {
      console.error('Error booking meeting:', error);
      alert('Failed to book meeting.');
    }
  };

  const cityDetails = {
    Bratislava: {
      image: BratislavaImg,
      email: 'Intellihome.ba@gmail.com',
      address: 'Ružinov, Námestská 254/12',
      phone: '+421987331256',
    },
    Kosice: {
      image: KosiceImg,
      email: 'Intellihome.ke@gmail.com',
      address: 'Aupark, Nám. Osloboditeľov 254/12',
      phone: '+421987331925',
    },
  };

  const { image, email: cityEmail, address, phone } = cityDetails[city];

  const availableTimeSlots = ['09:00', '11:00', '13:00', '15:00'].filter(slot => !bookedSlots.includes(slot));


  return (
    <div className="min-h-screen flex flex-col items-center  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white">
      <div
        className={`w-full h-96 bg-cover bg-center flex items-center justify-center ${animate ? 'fade-in' : ''}`}
        style={{ backgroundImage: `url(${Meeting1})` }}
      >
        <h1 className="text-4xl font-extrabold px-6 py-4 rounded-lg">
          Dohodnite si osobne stretnuie
        </h1>
      </div>
      <div className="bg-neutral-800 rounded-lg shadow-lg p-10 w-full max-w-4xl mt-8">
        <h2 className="text-2xl font-bold text-[#6082b6] mb-4 text-center">
          Prispôsobte svoj domov s IntelliHome
        </h2>
        <p className="text-gray-300 text-center mb-8">
          Naši odborníci vám pomôžu s inteligentnými riešeniami pre váš domov. Zarezervujte si stretnutie a začnite transformáciu už dnes.
        </p>
        <h3 className="text-xl font-semibold mb-6 text-[#8c92ac]">Vyberte dátum a čas stretnutia</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 mb-2">Dátum:</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="w-full p-3 border border-gray-700 rounded-md bg-neutral-900 text-white"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Čas:</label>
              <select
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                required
                className="w-full p-3 border border-gray-700 rounded-md bg-neutral-900 text-white"
              >
                {availableTimeSlots.map(slot => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 mb-2">Meno:</label>
              <input
                type='text'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full p-3 border border-gray-700 rounded-md bg-neutral-900 text-white"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Priezvisko:</label>
              <input
                type='text'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="w-full p-3 border border-gray-700 rounded-md bg-neutral-900 text-white"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 mb-2">Email:</label>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 border border-gray-700 rounded-md bg-neutral-900 text-white"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Telefónne číslo:</label>
              <input
                type='text'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className="w-full p-3 border border-gray-700 rounded-md bg-neutral-900 text-white"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Vyberte si mesto:</label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              className="w-full p-3 border border-gray-700 rounded-md bg-neutral-900 text-white"
            >
              <option value='Bratislava'>Bratislava</option>
              <option value='Kosice'>Košice</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img src={image} alt={city} className="w-full h-40 object-cover rounded-md" />
            </div>
            <div className="flex flex-col justify-center items-start">
              <p className="text-gray-300 mb-1"><strong>Mesto:</strong> {city}</p>
              <p className="text-gray-300 mb-1"><strong>Adresa:</strong> {address}</p>
              <p className="text-gray-300 mb-1"><strong>Email:</strong> {cityEmail}</p>
              <p className="text-gray-300"><strong>Telefón:</strong> {phone}</p>
            </div>
          </div>
          <button type='submit' className="bg-blue-600 text-white p-3 rounded-md w-full hover:bg-blue-700 transition duration-300">
            Rezervovať stretnutie
          </button>
        </form>
      </div>
    </div>
  );
};

export default Meetings;

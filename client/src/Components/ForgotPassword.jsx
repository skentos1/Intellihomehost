import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3000/auth/forgot-password", { email })
      .then(response => {
        if (response.data.status) {
          alert("Skontrolujte si email, link na resetovanie hesla bol odoslaný!");
          navigate('/login');
        }
      }).catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="sign-up-container flex items-center justify-center min-h-screen">
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl border border-white border-opacity-30 p-8 shadow-lg max-w-md w-full">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold text-white text-center">Zabudnúte heslo</h2>
          
          <div className="relative">
            <input
              type="email"
              id="email"
              className="block w-full p-4 bg-transparent border-b-2 border-white placeholder-white focus:outline-none focus:border-blue-500 text-white"
              placeholder="Váš email"
              required
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button className="w-full py-2 bg-white text-black font-bold rounded-full hover:bg-blue-700 transition-colors duration-300" type="submit">Odoslať</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

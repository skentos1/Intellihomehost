import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../App.css';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3000/auth/reset-password/${token}`, { password })
      .then(response => {
        if (response.data.status) {
          alert("Heslo bolo zmenené");
          navigate("/login");
        }
      }).catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="sign-up-container flex items-center justify-center min-h-screen">
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl border border-white border-opacity-30 p-8 shadow-lg max-w-md w-full">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold text-white text-center">Resetujte si heslo</h2>
          
          <div className="relative">
            <input
              type="password"
              id="password"
              className="block w-full p-4 bg-transparent border-b-2 border-white placeholder-white focus:outline-none focus:border-blue-500 text-white"
              placeholder="Nové heslo"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="w-full py-2 bg-white text-black font-bold rounded-full hover:bg-blue-700 transition-colors duration-300" type="submit">Reset</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;

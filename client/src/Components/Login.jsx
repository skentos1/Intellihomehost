import React, { useState } from 'react';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  Axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/auth/login", { email, password })
      .then(response => {
        if (response.data.status) {
          navigate('/');
        }
      }).catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="sign-up-container flex items-center justify-center min-h-screen mt-[-50px]">  {/* Adjust the mt value as needed */}
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl border border-white border-opacity-30 p-8 shadow-lg max-w-md w-full">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold text-white text-center">Prihlásiť sa</h2>

          <div className="relative">
            <input
              type="email"
              id="email"
              className="block w-full p-4 bg-transparent border-b-2 border-white placeholder-white focus:outline-none focus:border-blue-500 text-white"
              placeholder="Email"
              required
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative">
            <input
              type="password"
              id="password"
              className="block w-full p-4 bg-transparent border-b-2 border-white placeholder-white focus:outline-none focus:border-blue-500 text-white"
              placeholder="Heslo"
              required
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="w-full py-2 bg-white text-black font-bold rounded-full hover:bg-blue-700 transition-colors duration-300" type="submit">Prihlásiť sa</button>
          <div className="flex justify-between text-white text-sm">
            <Link to="/forgot-password" className="hover:underline font-bold text-base">Zabudnuté heslo?</Link>
          </div>

          <p className="text-center text-white">
            Nemáte účet? <Link to="/sign-up" className="font-semibold hover:underline">Zaregistrujte sa</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

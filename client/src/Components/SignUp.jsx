import React, { useState } from 'react';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/auth/signup", { username, email, password })
      .then(response => {
        if (response.data.status) {
          navigate('/login');
        }
      }).catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="sign-up-container flex items-center justify-center min-h-screen p-4">
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl border border-white border-opacity-30 p-8 shadow-lg w-full max-w-lg md:max-w-md">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold text-white text-center">Registrácia</h2>
          
          <div className="relative">
            <input
              type="text"
              id="username"
              className="block w-full p-4 bg-transparent border-b-2 border-white placeholder-white focus:outline-none focus:border-blue-500 text-white"
              placeholder="Meno"
              required
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

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

          <button className="w-full py-2 bg-white text-black font-bold rounded-full hover:bg-blue-700 transition-colors duration-300" type="submit">Zaregistrovať sa</button>

          <p className="text-center text-white">
            Už máte účet? <Link to="/login" className="font-semibold hover:underline">Prihlásiť sa</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

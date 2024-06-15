import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Home from './Components/Home';
import ForgotPassword from './Components/ForgotPassword';
import ResetPassword from './Components/ResetPassword';
import Navbar from './Components/Navbar';
import Produkty from './Components/Produkty';
import AboutUs from './Components/AboutUs';
import Meetings from './Components/Meetings';
import DashBoard from './Components/DashBoard';
import ProductOverview from './Components/ProductOverview';
import Footer from './Components/Footer';
import ProductInfo from './Components/ProductInfo';
import Objednavky from './Components/Objednavky';

function App() {
  return (
    <div className='relative min-h-screen w-full'>
      <div className="absolute top-0 left-0 z-[-2] min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/dashboard' element={<DashBoard/>}/>
          <Route path='/o-nas' element={<AboutUs/>}/>
          <Route path='/stretnutie' element={<Meetings/>}/>
          <Route path='/produkty' element={<Produkty/>} />
          <Route path='/objednavky' element={<Objednavky/>}/>
          <Route path='/product/:id' element={<ProductInfo/>}/>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password/:token' element={<ResetPassword />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

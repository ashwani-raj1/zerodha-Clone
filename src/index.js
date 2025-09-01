import React from 'react';
import ReactDOM from 'react-dom/client';
import{BrowserRouter, Routes , Route} from 'react-router-dom';
import './index.css';
import HomePage from './landingPage/home/HomePage';
import About from './landingPage/about/About';
import SignUp from './landingPage/SignUp/SignUp';
import Product from './landingPage/products/ProductPage';
import Pricing from './landingPage/pricing/PricingPage';
import Support from './landingPage/support/SupportPage';
import Navbar from './landingPage/home/Navbar';
import Footer from './landingPage/Footer';
import Error from './landingPage/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<BrowserRouter>
    <Navbar/> 
  <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='SignUp' element={<SignUp/>}></Route>
    <Route path='About' element={<About/>}></Route>
    <Route path='Product' element={<Product/>}></Route>
    <Route path='Pricing' element={<Pricing/>}></Route>
    <Route path='Support' element={<Support/>}></Route>
    <Route path='*' element={<Error/>}></Route>
  </Routes>
    <Footer/>
</BrowserRouter>
);


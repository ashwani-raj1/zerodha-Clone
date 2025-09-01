import React from 'react'
import Hero from './Hero';
import Pricing from './Pricing';
import Navbar from './Navbar';
import Education from './Education';
import OpenAccount from '../openAccount';
import Footer from '../Footer';
import Trust from './Trust';

function HomePage() {
    return ( 
        <>
        <Navbar/>
        <Hero/>
        <Trust/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        <Footer/>
        </>
     );
}

export default HomePage;
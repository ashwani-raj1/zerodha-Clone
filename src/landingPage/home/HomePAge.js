import React from 'react'
import Hero from './Hero';
import Stats from './Stats';
import Pricing from './Pricing';
import Navbar from './Navbar';
import Awards from './Awards';
import Education from './Education';
import OpenAccount from '../openAccount';
import Footer from '../Footer';

function HomePage() {
    return ( 
        <>
        <Navbar/>
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        <Footer/>
        </>
     );
}

export default HomePage;
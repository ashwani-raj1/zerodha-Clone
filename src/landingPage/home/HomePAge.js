import React from 'react'
import Hero from './Hero';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../openAccount';
import Trust from './Trust';

function HomePage() {
    return ( 
        <>
        <Hero/>
        <Trust/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        </>
     );
}

export default HomePage;
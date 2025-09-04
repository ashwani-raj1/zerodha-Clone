import React from 'react'

function Hero() {
    return ( 
        <div className='container'>
            <div className='text-center' style={{marginTop: "8%"}}>
            <h2 className='fs-3 fw-medium'>Zerodha Products</h2>
            <h5 className='text-muted mt-4 '>Sleek, modern, and intuitive trading platforms</h5>
            <p className='mt-4 fs-5'>Check out our <a href="abcd.org" style={{textDecoration:"none"}}>investment offerings &rarr;</a></p>
            </div>
        </div>
     );
}

export default Hero;
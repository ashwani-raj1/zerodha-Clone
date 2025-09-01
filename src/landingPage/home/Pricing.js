import React from 'react'

function Pricing() {
    return ( 
        <div className='container mt-5'>
            <div className='row' style={{marginLeft:"40px"}}>
                <div className='col-5'>
                <h3>
                    Unbeatable pricing
                </h3>
                <p className='mt-4'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <p className='mt-3'><a href="#" style={{textDecoration:"none",marginLeft:"0"}}>See Pricing &rarr;</a></p>
                </div>
                <div className='col-2'>
                <img className='col-8' style={{height:"100px"}} src='media/images/pricing0.svg' alt="pricing"/ >
                <p className='col-5' style={{fontSize:"10px", marginLeft:"100px",marginTop:"-50px"}}>Free account opening</p>
                </div>
                <div className='col-2'>
                <img className='col-8' style={{height:"100px"}} src='media/images/pricingEquity.svg' alt="pricing"/ >
                <p className='col-8' style={{fontSize:"10px", marginLeft:"110px",marginTop:"-50px"}}> Free equity delivery
and direct mutual funds</p>
                </div>
                <div className='col-2'>
                <img className='col-8' style={{height:"110px",width:"120px"}} src='media/images/intradayTrades.svg' alt="pricing"/ >
                <p className='col-5' style={{fontSize:"10px", marginLeft:"120px",marginTop:"-60px"}}> Intraday and
F&O</p>
                </div>
            </div>
        </div>
     );
}

export default Pricing;
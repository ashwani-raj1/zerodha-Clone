import React from 'react'

function Trust() {
    return ( 
        <div>
        <div className='container mt-5'>
            <div className='row p-5'>
                <div className='col-6' >
                <h4 className='mb-5'>Trust with confidence</h4>
                <h5 className='mt-5'>Customer-first always</h5>
                <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p> 
                <h5 className='mt-5'>No spam or gimmicks</h5>
                <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like <a href="#">Our philosophies</a>.</p>
                <h5 className='mt-5'>The Zerodha universe</h5>
                <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p> 
                <h5 className='mt-5'>Do better with money</h5>
                <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p> 
                </div>
                <div className='col-5'>
                <img className='pb-5' style={{height:"600px", width:"600px", marginTop:"-10px"}} src='media/images/ecosystem1.png' alt="ecosystem"/>
                <div className='row'>
                <div className='col-6'>
                <p style={{fontSize:"18px"}}><a href='#' style={{textDecoration: "none"}}>Explore our products &nbsp;&rarr;</a></p>
                </div>
                <div className='col-5'>
                <p style={{fontSize:"18px"}}><a href="#"style={{textDecoration:"none"}}>Try Kite Demo&nbsp;&rarr;</a></p>
                </div>
                </div>
                </div>
            </div>
        </div>
          <div className='container'>
            <div className='row'>
                <a href='#'  style={{width: "50%", margin: "auto"}}><img src='media/images/pressLogos.png' alt="pressLogos"/></a> 
            </div>
          </div>
        </div>
     );
}

export default Trust;
import React from 'react'

function Education() {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6'>
                <img src='media/images/education.svg' alt="education"/>
                </div>
                <div className='col-5'>
                <h4>Free and open market education</h4>
                <p className='mt-4 mb-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.<br></br><br></br><a className='pt-4' style={{textDecoration: "none" , fontSize:"20px",marginLeft:"0"}} href="#">Varsity &rarr;</a></p>
                <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.<br></br><br></br><a className='pt-4' style={{textDecoration: "none" , fontSize:"20px",marginLeft:"0"}} href="#">TradingQ&A &rarr;</a></p>
                </div>

            </div>
        </div>
     );
}

export default Education;
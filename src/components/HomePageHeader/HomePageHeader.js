import React from 'react';
import './HomePageHeader.css'

const HomePageHeader = () => {
    return (
        <div className='home-banner-bg'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mt-5">
                        <span>Digital Marketing</span>
                        <h2>Accelerating Business Growth in the Digital Age.</h2>
                        <p>Digital Marketing Strategies Unlocking Online Potential, Driving Growth, and Amplifying Your Brand's Presence in the Digital Landscape.</p>
                    </div>
                    <div className="col-lg-6 home-page-img-section">
                        <img src="https://samartheme3.vercel.app/images/main-slider/slider3/pic1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageHeader;
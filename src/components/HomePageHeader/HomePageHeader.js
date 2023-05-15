import React from 'react';
import './HomePageHeader.css'
import Button from './Button';

const HomePageHeader = () => {
    return (
        <div className='home-banner-bg'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 order-details mt-5">
                        <span>Digital Marketing</span>
                        <h2>Accelerating Business Growth in the Digital Age.</h2>
                        <p className='mt-4'>Digital Marketing Strategies Unlocking Online Potential, Driving Growth, and Amplifying Your Brand's Presence in the Digital Landscape.</p>
                        <Button/>
                    </div>
                    <div className="col-lg-6 order-img home-page-img-section">
                        <img src="https://samartheme3.vercel.app/images/main-slider/slider3/pic1.png" alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HomePageHeader;
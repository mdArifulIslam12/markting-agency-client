import React from 'react';
import ContactImg from '../../assets/img3.png'
import './ContactUsFrom.css'
import From from './From';

const ContactUsFrom = () => {
    return (
        <div className='container mb-5'>
            <div className="row">
                <div className="col-lg-6 contact-img-section my-auto">
                    <img src={ContactImg} alt="" />
                </div>
                <div className="col-lg-6">
                    <From/>
                </div>
            </div>
        </div>
    );
};

export default ContactUsFrom;
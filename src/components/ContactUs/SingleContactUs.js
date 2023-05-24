import React from 'react';
import { TfiEmail } from 'react-icons/tfi'
import { FiPhoneCall } from 'react-icons/fi'
import { MdShareLocation } from 'react-icons/md'
import './SingleContact.css'

const SingleContactUs = () => {
    return (
        <div className='container'>
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                <div className="col  ">
                    <div className='d-flex contact-info'>
                        <span className='icon'>
                            <TfiEmail/>
                        </span>
                        <div className='ms-3'>
                            <h5>Mail Here</h5>
                        <p>admin@pungent.com</p>
                    </div>
                    </div>
                    
                </div>
                 <div className="col">
                    <div className='d-flex contact-info'>
                        <span className='icon'>
                            <MdShareLocation/>
                        </span>
                        <div className='ms-3'>
                        <h5>Visit Here</h5>
                        <p>Lalmai,Cumiila,Bangladesh</p>
                    </div>
                    </div>
                   
                </div>
                <div className="col">
                    <div className='d-flex contact-info'>
                        <span className='icon'>
                            <FiPhoneCall/>
                        </span>
                        <div className='ms-3'>
                        <h5>Call Here</h5>
                        <p>+02154712</p>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default SingleContactUs;
import React, { useState } from 'react';
import './From.css'
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com'

const From = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        emailjs.sendForm('service_0gb8yw7', 'template_j1mckmk', event.target, 'GGJcUSYKscponjqL2')
        .then((result) => {
            toast.success('Send your email message Successfully')
            event.target.reset()
        }, (error) => {
            toast.error(`Send message failed ${error} !!`)
        });
        event.target.reset();
      };
    return (
        <div className='contactUs-section-from'>
            <div>
                <h3 className='contact-us-title'>Get In Touch With Us</h3>
            </div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Full Name' required className='w-100 contact-input'/>
                <input type="email" name='email' placeholder='Email Address' required className='w-100 contact-input' />
                <input type="number" name='phone' placeholder="Phone No." required className='w-100 contact-input'/>
                <div className='d-flex'>
                    <input type="text" placeholder='Project Title' name='projectTitle' className='w-50 contact-input me-2' required/>
                    <select class="w-50 contact-input ms-2" name='choose' required >
                         <option value="Social media Ads">Social media Ads</option>
                         <option value="Meta ads">Meta ads</option>
                         <option value="Google ads">Google ads</option>
                         <option value="Web Analytics">Web Analytics</option>
                         <option value="Additional services">Additional services</option>
                         




                    </select>
                </div>
                <textarea name="message" id="" required placeholder='Message' className='w-100 contact-input textarea'></textarea>
                <input type="submit" value="Submit Now" className='w-100 btn contactUs-button' />
            </form>
        </div>
    );
};

export default From;
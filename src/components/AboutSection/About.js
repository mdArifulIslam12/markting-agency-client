import React from 'react';
import './About.css'
import AboutImg from '../../assets/about-img2.jpg'
import { BsCheckCircleFill } from 'react-icons/bs'

const About = () => {
    return (
        <div className='container'>
            <div className="row g-4 mb-5">
                <div className="col-lg-6">
                    <img src={AboutImg} alt="" className='about-img' />
                    <div></div>
                </div>
                <div className="col-lg-6 about-section-details">
                    <h3>About Us</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In incidunt minima molestias veritatis distinctio modi voluptatem, est ut. Perferendis qui est tempore pariatur. Vel maiores, dolorem ad dolore at vitae.</p>
                    <h4>Who We Are</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem alias qui ut voluptate eveniet quidem vitae nihil numquam illum ab expedita, consequuntur error quia vel distinctio laudantium reprehenderit nemo magni.</p>
                    <h4>Our History</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, at!</p>
                    <h4>Our Mission</h4>
                    <p className='about-mission d-flex'><span className='about-icon'><BsCheckCircleFill/></span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, maiores</p>
                    <p className='about-mission d-flex'> <span className='about-icon'><BsCheckCircleFill/></span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, maiores. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, qui. </p>
                    <p className='about-mission d-flex'><span className='about-icon'><BsCheckCircleFill/></span> <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, maiores. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, obcaecati.</span></p>
                </div>
            </div>
        </div>
    );
};

export default About;
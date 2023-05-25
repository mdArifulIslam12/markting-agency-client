import React from 'react';
import FeturesImg from '../../assets/img7.png'
import {FaUserInjured} from 'react-icons/fa'
import './HomeFetures.css'

const HomeFetures = () => {
    return (
        <div className='container HomeFetures'>
             <div className="row d-flex justify-content-center">
                <div className="col-lg-4 text-center">
                    <h2 className='all-title-section  my-4 mb-5 ' id='homeFetures-title'>Our Fetures </h2>
                </div>
            </div>
            <div className="row g-4">
                <div className="col-lg-4">
                    <div className="row">
                        <div className="col-lg-12 mb-3">
                            <div className='row d-flex'>
                                <div className=' col-lg-3 '>
                                    <div className="fetures-icon-setcion">
                                    <FaUserInjured/>
                                    </div>
                                </div>
                                <div className='col-lg-8 fetures-details'>
                                    <h3>Idea & Analysis</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laborum architecto, aspernatur temporibus qui unde.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className='row d-flex'>
                                <div className=' col-lg-3 '>
                                    <div className="fetures-icon-setcion">
                                    <FaUserInjured/>
                                    </div>
                                </div>
                                <div className='col-lg-8 fetures-details'>
                                    <h3>Idea & Analysis</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laborum architecto, aspernatur temporibus qui unde.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <img src={FeturesImg} className='fetures-img-section' alt="" />
                </div>
                <div className="col-lg-4">
                <div className="row">
                        <div className="col-lg-12 mb-3">
                            <div className='row d-flex'>
                            <div className="col-lg-1"></div>
                                <div className=' col-lg-3 '>
                                    <div className="fetures-icon-setcion">
                                    <FaUserInjured/>
                                    </div>
                                </div>
                                <div className='col-lg-8 fetures-details'>
                                    <h3>Idea & Analysis</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laborum architecto, aspernatur temporibus qui unde.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className='row d-flex'>
                                <div className="col-lg-1"></div>
                                <div className=' col-lg-3 '>
                                    <div className="fetures-icon-setcion">
                                    <FaUserInjured/>
                                    </div>
                                </div>
                                <div className='col-lg-8 fetures-details'>
                                    <h3>Idea & Analysis</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laborum architecto, aspernatur temporibus qui unde.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeFetures;
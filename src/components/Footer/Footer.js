import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import { MdEmail, MdLocationPin } from 'react-icons/md'
import { IoCall } from 'react-icons/io5'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <div>
            <footer className="footer">
                <div className="container bottom_border">
                    <div className="row">
                        <div className=" col-sm-4 col-md col-sm-4  col-12 col pt-3">
                            <h5 className="headin5_amrc col_white_amrc pt2" >Find us</h5>

                            <p className="mb10 footer-details">As a digital marketing agency, we leverage data-driven strategies, optimize online campaigns, and engage your target audience to maximize brand visibility, drive traffic, and boost conversions. Partner with us for digital marketing success.</p>

                            <div className='d-flex align-items-center'>
                                <p className='footer-svg'>
                                    <FaFacebookF />
                                </p>
                                <p className='footer-svg'>
                                    <AiOutlineInstagram />
                                </p>
                                <p className='footer-svg'>
                                    <BsTwitter />
                                </p>
                            </div>
                        </div>


                        <div className=" col-sm-4 col-md  col-6 col">
                            <h5 className="headin5_amrc col_white_amrc pt2 footer-title">Quick links</h5>

                            <ul className="footer_ul_amrc">
                                <li><Link to={'/'}>Home</Link></li>
                                <li><Link to={'/about'}>About</Link></li>
                                <li><Link to={'/service'}>Services</Link></li>
                                <li><Link to={'/blog'}>Blog</Link></li>
                                <li><Link to={'/contact'}>Contact</Link></li>
                            </ul>

                        </div>


                        {/* <div className=" col-sm-4 col-md  col-6 col">
                            <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>

                            <ul className="footer_ul_amrc">
                                <li><a href="http://webenlance.com">Remove Background</a></li>
                                <li><a href="http://webenlance.com">Shadows & Mirror Reflection</a></li>
                                <li><a href="http://webenlance.com">Logo Design</a></li>
                                <li><a href="http://webenlance.com">Vectorization</a></li>
                                <li><a href="http://webenlance.com">Hair Masking/Clipping</a></li>
                                <li><a href="http://webenlance.com">Image Cropping</a></li>
                            </ul>

                        </div> */}


                        <div className=" col-sm-4 col-md  col-12 col contact-footer">
                            <h5 className="headin5_amrc col_white_amrc pt2 footer-title">Contact Us</h5>
                            <p className='d-flex align-items-center'><span><MdLocationPin /></span> Harishchar, Lalmai, Cumilla</p>
                            <p className='d-flex align-items-center'><span><IoCall /></span> +016142514 </p>
                            <p className='d-flex align-items-center'><span><MdEmail /> </span> info@example.com  </p>


                            <ul className="footer_ul2_amrc">

                            </ul>

                        </div>
                    </div>
                </div>




            </footer>
            <div className="container-bg">


                <p className="text-center pt-4 text-white pb-4 mb-0">Copyright &copy;{year}  mdArif. All rights reserved</p>
                {/* 
                    <ul className="social_footer_ul">
                        <li><a href="http://webenlance.com"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="http://webenlance.com"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="http://webenlance.com"><i className="fab fa-linkedin"></i></a></li>
                        <li><a href="http://webenlance.com"><i className="fab fa-instagram"></i></a></li>
                    </ul> */}

            </div>
        </div>
    );
};

export default Footer;
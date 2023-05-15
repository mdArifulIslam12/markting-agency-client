import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
    
    const [backgroundColor, setBackgroundColor] = useState(false);
  
    const allScroolId = () => {
      if (window.scrollY >= 8) {
        setBackgroundColor(true);
      } else {
        setBackgroundColor(false);
      }
    };
    window.addEventListener("scroll", allScroolId);
    
  
    return (
      <div className="fixed-top"  id="scroll">
        <nav
          className={
            backgroundColor
              ? `navbar navbar-expand-lg navbar-light  bg-white shadow-lg`
              : `navbar navbar-expand-lg navbar-light  navbar-background `
          }
         
        >
          <div className="container py-2 ">
            <img
              className="header-nav-img"
              src="https://travo.iamabdus.com/v1.0/wp-content/uploads/2021/04/Group-2.svg"
              alt=""
            />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mt-2 mb-lg-0">
                <li className="nav-item">
                  <CustomLink to={"/"} className="navbar-links" id={backgroundColor ? 'black':'white'}>
                    Home
                  </CustomLink>
                </li>
                <li className="nav-item">
                  <CustomLink to={"/service"} className="navbar-links" id={backgroundColor ? 'black':'white'}>
                    Service
                  </CustomLink>
                </li>
                <li className="nav-item">
                  <CustomLink to={"/blog"} className="navbar-links" id={backgroundColor ? 'black':'white'}>
                    Blogs
                  </CustomLink>
                </li>
  
                <li className="nav-item">
                  <CustomLink to={"/about"} className="navbar-links" id={backgroundColor ? 'black':'white'}>
                    About Us
                  </CustomLink>
                </li>
                <li className="nav-item">
                  <CustomLink to={"/contactUs"} className="navbar-links" id={backgroundColor ? 'black':'white'}>
                    Contact Us
                  </CustomLink>
                </li>
  
                {/* <li className="nav-item">
                  {user ? (
                    <a href="" onClick={() => signOut(auth)}>
                      Sign out
                    </a>
                  ) : (
                    <CustomLink to={"/loginV2"} className="navbar-links">
                      Login
                    </CustomLink>
                  )}
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  };
export default Navbar;
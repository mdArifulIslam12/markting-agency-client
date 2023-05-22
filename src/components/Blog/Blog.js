import React, { useState } from 'react';
import './blog.css'
import Button from '../HomePageHeader/Button';
import { Link, useNavigate } from 'react-router-dom';
import {MdDateRange} from 'react-icons/md'

const Blog = ({ bolg}) => {

    const { name, img, details, date, _id } = bolg;
    const navigate = useNavigate()
    const handleNavgate = () =>{
        navigate(`/blog-details/${_id}`)
    }
   
    return (

        <div className="col">
            <div class="card homebolg">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <p className="mt-4 mb-3 homebolg-date d-flex align-items-center"><span className='me-2 date-blog'><MdDateRange/></span><span>{date}</span></p>
                    <h5 class="card-title ">{name}</h5>
                    <p class="card-text my-3">{details.slice(0, 100)}...</p>
                    <div onClick={() => handleNavgate()} > <Button/></div>
                    
                </div>
            </div>
        </div>

    );
};

export default Blog;
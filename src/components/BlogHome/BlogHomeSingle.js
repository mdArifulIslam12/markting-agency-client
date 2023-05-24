import React from 'react';
import {MdDateRange} from 'react-icons/md'
import './BlogHomeSignle.css'
import { Link } from 'react-router-dom';

const BlogHomeSingle = ({blog}) => {
    const {name,img,details,date,_id} = blog
    return (
        <div className='col'>            
            <div className='d-flex blogHome-Signle'>
                <div>
                    <img src={img} alt="" className='blogHome-img' />
                </div>
                <div className='ms-4'>
                    <Link to={`/blog-details/${_id}`}><h4>{name}</h4></Link>
                    <p>{details.slice(0,110)}...</p>
                    <p className="mt-4 mb-3 homebolg-date d-flex align-items-center"><span className='me-2 date-blog'><MdDateRange/></span><span>{date}</span></p>
                </div>
            </div>
        </div>
    );
};

export default BlogHomeSingle;
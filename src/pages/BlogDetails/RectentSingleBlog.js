import React from 'react';
import { Link } from 'react-router-dom';

const RectentSingleBlog = ({bolg}) => {
     
    return (
        <div className='d-flex rec-blog'>
            <div>
               <Link to={`/blog-details/${bolg._id}`}> <img src={bolg.img} alt="" className='rec-img' /></Link>
            </div>
            <div className='ms-3'>
                
                <Link to={`/blog-details/${bolg._id}`} className='rec-details' ><p className='mt-2 mb-1'>{bolg.name}</p></Link>
                <p>{bolg.date}</p>
            </div>
        </div>
    );
};

export default RectentSingleBlog;
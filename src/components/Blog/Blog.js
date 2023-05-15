import React from 'react';
import './blog.css'
import Button from '../HomePageHeader/Button';
import { Link } from 'react-router-dom';

const Blog = ({ bolg }) => {
    const { name, img, details, date,id } = bolg;
    return (
      <div className="col">
        <div class="card homebolg">
          <img src={img} class="card-img-top" alt="..." />
          <div class="card-body">
            <p className="mt-4 mb-3 homebolg-date">{date}</p>
            <h5 class="card-title ">{name}</h5>
            <p class="card-text my-3">{details.slice(0,100)}...</p>
           <Link to={`/blog-details/${id}`}> <Button/></Link>
          </div>
        </div>
      </div>
    );
  };

export default Blog;
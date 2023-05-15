import React, { useEffect, useState } from 'react';
import ShearedBanner from '../../components/ShearedBanner/ShearedBanner';
import Blog from '../../components/Blog/Blog';
import Subscribe from '../../components/Subscribe/Subscribe';
import AutoServiceLogo from '../../components/AutoServiceLogo/AutoServiceLogo';


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
      fetch("blog.json")
        .then((res) => res.json())
        .then((data) => setBlogs(data));
    }, []);
    return (
      <div className="">
        <ShearedBanner title={'Blog'} />
        <div className="container mt-3">
          <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
            {blogs.map((bolg) => (
              <Blog key={bolg.id} bolg={bolg}></Blog>
            ))}
          </div>
        </div>
        <Subscribe/>
        <AutoServiceLogo/>
    </div>
    );
};

export default Blogs;
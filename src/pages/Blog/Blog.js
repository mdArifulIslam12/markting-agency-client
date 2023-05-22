import React, { useEffect, useState } from 'react';
import ShearedBanner from '../../components/ShearedBanner/ShearedBanner';
import Blog from '../../components/Blog/Blog';
import Subscribe from '../../components/Subscribe/Subscribe';
import AutoServiceLogo from '../../components/AutoServiceLogo/AutoServiceLogo';
import { useGetBlogsQuery } from '../../features/blog/blogApi';



const Blogs = () => {
    const {data:blogs,isError,isLoading,isSuccess,error} = useGetBlogsQuery();
    console.log(blogs);
    let content = null;

    if (isLoading) {
      content = <div>Loading...</div>
    }else if( !isLoading &&isError){
      content = <p>{error}</p>
    }else if( !isLoading && !isError && isSuccess && blogs.data?.length === 0){
      content = <p>This No availve blog</p>
    }else if( !isLoading && !isError && isSuccess && blogs.data?.length > 0){
      content = <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
      {blogs.data?.map((bolg) => (
        <Blog key={bolg._id} bolg={bolg}></Blog>
      ))}
    </div>
    }


    return (
      <div className="">
        <ShearedBanner title={'Blog'} />
        <div className="container mt-3">
          {content}
        </div>
        <Subscribe/>
        <AutoServiceLogo/>

    </div>
    );
};

export default Blogs;
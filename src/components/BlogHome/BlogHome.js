import React from 'react';
import { useGetBlogsQuery } from '../../features/blog/blogApi';
import BlogHomeSingle from './BlogHomeSingle';

const BlogHome = () => {
    const {data:blogs,isError,isLoading,isSuccess,error} = useGetBlogsQuery();
    
    let content = null;

    if (isLoading) {
      content = <div>Loading...</div>
    }else if( !isLoading &&isError){
      content = <p>{error}</p>
    }else if( !isLoading && !isError && isSuccess && blogs.data?.length === 0){
      content = <p>This No availve blog</p>
    }else if( !isLoading && !isError && isSuccess && blogs.data?.length > 0){
      content = <>
      {blogs.data?.slice(0,4).map((bolg) => (
        <BlogHomeSingle key={bolg._id} blog={bolg}/>
      ))}
    </>
    }
    return (
        <div className='container my-5'>
            <div className="row d-flex justify-content-center">
                <div className="col-lg-4 text-center">
                    <h2 className='all-title-section  my-4 mb-5 ' id='blogHome-section-title'>Our Blog & News</h2>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {content}
            </div>
        </div>
    );
};

export default BlogHome;
import React from 'react';
import { useParams } from 'react-router-dom';
import ShearedBanner from '../../components/ShearedBanner/ShearedBanner';
import AutoServiceLogo from '../../components/AutoServiceLogo/AutoServiceLogo';
import Subscribe from '../../components/Subscribe/Subscribe';
import { useGetSingleBlogQuery } from '../../features/blog/blogApi';
import DetailsBlogSingle from './DetailsBlogSingle';
import './BlogDetails.css'

const BlogDetails = () => {
    const { id } = useParams()
    const {data:blog,isError,isLoading,isSuccess,error} = useGetSingleBlogQuery(id)
    let content = null;

    if (isLoading) {
      content = <div>Loading...</div>
    }else if( !isLoading &&isError){
      content = <p>{error}</p>
    }else if( !isLoading && !isError && isSuccess && blog?.data === {}){
      content = <p>This No availve blog</p>
    }else if( !isLoading && !isError && isSuccess && blog?.data){
      content =<DetailsBlogSingle blog={blog?.data}/>
    }
    return (
        <div className=''>
            <div className="shareHeaderBanner">
                <div className="container">
                    <div className="row d-flex justify-content-center text-center">
                        <div className="col-lg-6 text-white">
                            <h2>Blog Details</h2>
                            <h5>Home / Blog Details</h5>
                        </div>
                    </div>
                </div>
            </div>
            {content}
            <Subscribe />
            <AutoServiceLogo />
        </div>
    );
};

export default BlogDetails;
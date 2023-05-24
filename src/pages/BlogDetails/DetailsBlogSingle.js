import React from 'react';
import {MdDateRange} from 'react-icons/md'
import { useSelector } from 'react-redux';
import Blog from '../../components/Blog/Blog';
import { useGetBlogsQuery } from '../../features/blog/blogApi';
import moment from 'moment/moment';
import RectentSingleBlog from './RectentSingleBlog';

const DetailsBlogSingle = ({blog}) => {
    const {img,name,details,date} = blog
    const {data:blogs,isError,isLoading,isSuccess,error} = useGetBlogsQuery();
    let content = null;
    console.log(moment(new Date()).format('ll'));
    if (isLoading) {
      content = <div>Loading...</div>
    }else if( !isLoading &&isError){
      content = <p>{error}</p>
    }else if( !isLoading && !isError && isSuccess && blogs.data?.length === 0){
      content = <p>This No availve blog</p>
    }else if( !isLoading && !isError && isSuccess && blogs.data?.length > 0){
      content = <div className="row row-cols-1 row-cols-md-1 g-4 my-5">
      {blogs.data?.slice()     
      .sort(function(a,b) {
        var aComps = moment(a.date).format('L').split("/");
        var bComps = moment(b.date).format('L').split("/");
        var aDate = new Date(aComps[2], aComps[1], aComps[0]);
        var bDate = new Date(bComps[2], bComps[1], bComps[0]);
        return  bDate.getTime() - aDate.getTime();
    })
    .slice(0,5)
      .map((bolg) => (        
        <RectentSingleBlog key={bolg._id} bolg={bolg}></RectentSingleBlog>
      ))}
    </div>
    }
    return (
        <div className='container '>
            <div className="row">
                <div className="col-lg-4 detalsBlog-1">
                <h2 className='all-title-section'>Rectent Blog</h2>
                {content}
                </div>
                <div className="col-lg-8 mb-5 detalsBlog-2">
                    <img src={img} alt="" className='blog-details-img-section' />
                    <p className="mt-4 mb-3 homebolg-date d-flex align-items-center"><span className='me-2 date-blog'><MdDateRange/></span><span>{date}</span></p>
                    <h2>{name}</h2>
                    <p>{details}</p>
                </div>
            </div>
        </div>
    );
};

export default DetailsBlogSingle;
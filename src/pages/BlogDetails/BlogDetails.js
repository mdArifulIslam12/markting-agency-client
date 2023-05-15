import React from 'react';
import { useParams } from 'react-router-dom';
import ShearedBanner from '../../components/ShearedBanner/ShearedBanner';
import AutoServiceLogo from '../../components/AutoServiceLogo/AutoServiceLogo';
import Subscribe from '../../components/Subscribe/Subscribe';

const BlogDetails = () => {
    const {id} = useParams()
    console.log(id);
    return (
        <div>
            <ShearedBanner title={'Blog Details'}/>
            <Subscribe/>
            <AutoServiceLogo/>
        </div>
    );
};

export default BlogDetails;
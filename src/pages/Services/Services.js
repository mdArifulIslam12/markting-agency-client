import React from 'react';
import ShearedBanner from '../../components/ShearedBanner/ShearedBanner';
import Subscribe from '../../components/Subscribe/Subscribe';
import Testmonals from '../../components/Testmonals/Testmonals';
import BlogHome from '../../components/BlogHome/BlogHome';
import AutoServiceLogo from '../../components/AutoServiceLogo/AutoServiceLogo';

const Services = () => {
    return (
        <div>
            <ShearedBanner title={'Services'}/>
            <Subscribe/>
            <Testmonals/>
            <BlogHome/>
            <AutoServiceLogo/>
        </div>
    );
};

export default Services;
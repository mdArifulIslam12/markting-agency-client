import React from 'react';
import ShearedBanner from '../../components/ShearedBanner/ShearedBanner';
import AboutUs from '../../components/AboutSection/About';
import VideoSection from '../../components/Video/VideoSection';
import AutoServiceLogo from '../../components/AutoServiceLogo/AutoServiceLogo';
import AboutAsncySection from '../../components/AboutSection/AboutAsncySection';
import BlogHome from '../../components/BlogHome/BlogHome';
import Subscribe from '../../components/Subscribe/Subscribe';

const About = () => {
    return (
        <div>
            <ShearedBanner title={'About Us'}/>
            <AboutUs/>
            <VideoSection/>
            <AboutAsncySection/>
            <Subscribe/>
            <BlogHome/>
            <AutoServiceLogo/>
        </div>
    );
};

export default About;
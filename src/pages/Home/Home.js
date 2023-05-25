import React from 'react';
import Outstanding from '../../components/outstanding/Outstanding';
import HomePageHeader from '../../components/HomePageHeader/HomePageHeader';
import AutoServiceLogo from '../../components/AutoServiceLogo/AutoServiceLogo';
import BlogHome from '../../components/BlogHome/BlogHome';
import Subscribe from '../../components/Subscribe/Subscribe';
import AboutAsncySection from '../../components/AboutSection/AboutAsncySection';
import HomeFetures from '../../components/HomeFetures/HomeFetures';

const Home = () => {
    return (
        <div>
            <HomePageHeader/>
            <Outstanding/>
            <AboutAsncySection/>
            <HomeFetures/>
            <Subscribe/>
            <BlogHome/>
            <AutoServiceLogo/>
        </div>
    );
};

export default Home;
import React from 'react';
import Outstanding from '../../components/outstanding/Outstanding';
import HomePageHeader from '../../components/HomePageHeader/HomePageHeader';
import AutoServiceLogo from '../../components/AutoServiceLogo/AutoServiceLogo';
import BlogHome from '../../components/BlogHome/BlogHome';
import Subscribe from '../../components/Subscribe/Subscribe';
import AboutAsncySection from '../../components/AboutSection/AboutAsncySection';
import HomeFetures from '../../components/HomeFetures/HomeFetures';
import Testmonals from '../../components/Testmonals/Testmonals';
import Service from '../../components/Service/Service';

const Home = () => {
    return (
        <div>
            <HomePageHeader/>
            <Service/>
            <Outstanding/>
            <AboutAsncySection/>
            <HomeFetures/>
            <Subscribe/>
            <Testmonals/>
            <BlogHome/>
            <AutoServiceLogo/>
        </div>
    );
};

export default Home;
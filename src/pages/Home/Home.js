import React from 'react';
import Outstanding from '../../components/outstanding/Outstanding';
import HomePageHeader from '../../components/HomePageHeader/HomePageHeader';

const Home = () => {
    return (
        <div>
            <HomePageHeader/>
            <Outstanding/>
        </div>
    );
};

export default Home;
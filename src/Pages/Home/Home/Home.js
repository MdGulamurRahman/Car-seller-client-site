import React from 'react';
import Header from '../Header/Header';
import Performance from '../Performance/Performance';
import HomeProducts from '../HomeProducts/HomeProducts';
import Navigation from '../../../Shared/Navigation/Navigation';
import Ratings from '../Ratings/Ratings';
const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Header></Header>
            <HomeProducts></HomeProducts>
            <Performance></Performance>
            <Ratings></Ratings>
        </div>
    );
};

export default Home;
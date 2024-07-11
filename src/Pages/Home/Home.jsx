import React from 'react';
import Banner from './Banner';
import Category from './Category';
import PopularMenu from './PopularMenu';
import Feature from './Feature';
import Testimonial from './Testimonial';
import { Helmet } from 'react-helmet-async';
import CallUs from './CallUs';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className='max-w-7xl mx-auto'>
                <Category></Category>
                <PopularMenu></PopularMenu>
            </div>
            <CallUs></CallUs>
            <Feature></Feature>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;
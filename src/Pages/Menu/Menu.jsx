import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import MenuCategory from './MenuCategory';
import menuBG from '../../assets/menu/banner3.jpg';
import dessertBG from '../../assets/menu/dessert-bg.jpeg';
import pizaBG from '../../assets/menu/pizza-bg.jpg';
import saladBG from '../../assets/menu/salad-bg.jpg';
import soupBG from '../../assets/menu/soup-bg.jpg';
import SectionTitle from '../../Components/SectionTitle';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuBG} title={"Our Menu"}></Cover>
            <section className='mb-8'>
                <SectionTitle heading={"Today's Offer"} subHeading={"Dont Miss"}></SectionTitle>
                <MenuCategory categoryType="offered"></MenuCategory>
            </section>
            <section className='mb-8'>
                <Cover img={saladBG} title={"Salad"}></Cover>
                <MenuCategory categoryType="salad"></MenuCategory>
            </section>
            <section className='mb-8'>
                <Cover img={dessertBG} title={"Dessert"}></Cover>
                <MenuCategory categoryType="dessert"></MenuCategory>
            </section>
            <section className='mb-8'>
                <Cover img={pizaBG} title={"Pizza"}></Cover>
                <MenuCategory categoryType="pizza"></MenuCategory>
            </section>
            <section className='mb-8'>
                <Cover img={soupBG} title={"Soup"}></Cover>
                <MenuCategory categoryType="soup" ></MenuCategory>
            </section>
            <section className='mb-8'>
                <Cover img={soupBG} title={"Drinks"}></Cover>
                <MenuCategory categoryType="drinks" ></MenuCategory>
            </section>
        </div>
    );
};

export default Menu;
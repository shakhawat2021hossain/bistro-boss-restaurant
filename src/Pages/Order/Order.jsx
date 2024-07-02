import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import coverBG from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';


const Order = () => {
    const categories = ["salad", "pizza", "soup", "dessert", "drinks"]
    const {category} = useParams()
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const salad = menu.filter(item => item.category == 'salad')
    const pizza = menu.filter(item => item.category == 'pizza')
    const soup = menu.filter(item => item.category == 'soup')
    const dessert = menu.filter(item => item.category == 'dessert')
    const drink = menu.filter(item => item.category == 'drinks')


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order</title>
            </Helmet>
            <Cover img={coverBG} title={"Order Food"}></Cover>
            <Tabs className='max-w-7xl mx-auto mb-8' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} >
                <TabList>
                    <Tab>Salads</Tab>
                    <Tab>Pizzas</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel className="w-5/6 mx-auto">
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel className="w-5/6 mx-auto">
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel className="w-5/6 mx-auto">
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel className="w-5/6 mx-auto">
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel className="w-5/6 mx-auto">
                    <OrderTab items={drink}></OrderTab>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Order;
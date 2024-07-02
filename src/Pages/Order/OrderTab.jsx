import React from 'react';
import FoodCard from '../Shared/FoodCard';

const OrderTab = ({ items }) => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-8'>
            {
                items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;
import React from 'react';

const CommonMenu = ({ item }) => {
    const { name, image, recipe, price } = item
    return (
        <div className='flex'>
            <img style={{borderRadius: '0 200px 200px 200px'}} className='w-[100px] h-[100px]' src={image} alt="" />
            <div className='ml-4'>
                <h1 className='text-2xl uppercase'>{name} --------</h1>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>${price}</p>
        </div>
    );
};

export default CommonMenu;
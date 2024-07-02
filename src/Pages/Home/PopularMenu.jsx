import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import MenuCategory from '../Menu/MenuCategory';

const PopularMenu = () => {
    
    return (
        <div className='mb-12'>
            <SectionTitle
                heading={"Popular Items"} subHeading={"From Our Menu"}>
            </SectionTitle>
            <MenuCategory categoryType="popular"></MenuCategory>
        </div>
    );
};

export default PopularMenu;
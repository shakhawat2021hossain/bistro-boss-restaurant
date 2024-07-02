import React from 'react';
import useMenu from '../../Hooks/useMenu';
import CommonMenu from '../Shared/CommonMenu';
import { Link } from 'react-router-dom';

const MenuCategory = ({ categoryType }) => {
    const [menu, loading] = useMenu()
    if (loading) {
        return <div className='mx-auto text-center'>
            <span className="loading loading-spinner loading-lg"></span>
        </div>

    }
    const categorizedMenu = menu.filter(item => item.category == categoryType)

    return (
        <div className='py-12'>
            <div className='grid md:grid-cols-2 gap-10 w-3/4 mx-auto'>
                {
                    categorizedMenu.map(item => <CommonMenu key={item._id} item={item}></CommonMenu>)
                }
            </div>
            <div className='text-center'>
                <Link to={`/order/${categoryType}`}>
                    <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Your Favorite Food</button>
                </Link>

            </div>
        </div>

    );
};

export default MenuCategory;
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { FaCartPlus } from 'react-icons/fa';
import useCart from '../../Hooks/useCart';
import useAdmin from '../../Hooks/useAdmin';

const Navbar = () => {
    const { user, logOut } = useAuth()
    const [isAdmin, adminLoading] = useAdmin();

    const [cart] = useCart()
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }
    const menu = <>
        <li><NavLink className='text-lg' to='/'>Home</NavLink></li>
        <li><NavLink className='text-lg' to='/menu'>Menu</NavLink></li>
        <li><NavLink className='text-lg' to='/order'>Order</NavLink></li>
        <li><NavLink className='text-lg' to='/contact'>Contact</NavLink></li>

        {
            user ? <>
                <li className='mr-2'>
                    <NavLink className='text-lg' to='/dashboard/cart'>
                        <FaCartPlus></FaCartPlus>+{cart.length}
                    </NavLink>
                </li>
                <li><button className='bg-orange-500 px-4 rounded-sm text-lg mr-2' onClick={handleLogOut}>Logout</button></li>

            </> :
                <>
                    <li><button className='bg-orange-500 px-4 rounded-sm text-lg'><NavLink to='/login'>Login</NavLink></button></li>
                </>

        }
        {
            user && isAdmin && <li><NavLink className='text-lg bg-orange-500 px-4 rounded-sm mr-2' to='/dashboard/admin-home'>Dashboard</NavLink></li>

        }
        {
            user && !isAdmin && <li><NavLink className='text-lg bg-orange-500 px-4 rounded-sm mr-2' to='/dashboard/user-home'>Dashboard</NavLink></li>

        }
    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-slate-600 shadow rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl">Bistro Boss</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menu}
                </ul>
            </div>
            
        </div>
    );
};

export default Navbar;
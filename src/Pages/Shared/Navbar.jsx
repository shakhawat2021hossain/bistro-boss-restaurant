import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { FaCartPlus } from 'react-icons/fa';
import useCart from '../../Hooks/useCart';

const Navbar = () => {
    const { user, logOut } = useAuth()
    const [cart] = useCart()
    // console.log(data);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }
    const menu = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Menu</Link></li>
        <li><Link to='/order'>Order</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/secret'>Secret</Link></li>
        <li><Link to='/dashboard/cart'>
            <button className="btn">
                <FaCartPlus></FaCartPlus>
                <div className="badge badge-secondary">+{cart.length}</div>
            </button>
        </Link></li>
        {
            user ? <>
                <li><button className='btn btn-ghost' onClick={handleLogOut}>Logout</button></li>

            </> :
                <>
                    <li><Link to='/login'>Login</Link></li>
                </>

        }
    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;
import React from 'react';
import { FaAd, FaBook, FaCalendar, FaComment, FaEnvelope, FaHistory, FaHome, FaList, FaPaypal, FaShoppingCart, FaUser, FaUtensils } from 'react-icons/fa';
import { FaShop } from 'react-icons/fa6';
import { IoMdMenu } from 'react-icons/io';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
    const [isAdmin, adminLoading] = useAdmin();
    // const isAdmin = true
    if (adminLoading) {
        return <div className='flex items-center justify-center'>
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }
    return (
        <div className='flex'>
            <div className="w-1/6 min-h-screen bg-orange-600">
                <ul className='menu p-4 text-white'>
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/admin-home">
                                    <FaHome></FaHome> Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/add-item"><FaUtensils></FaUtensils> Add Item</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manage-items"><FaList></FaList> Manage Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/payment-history"><FaHistory></FaHistory>Payment History</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users"><FaUser></FaUser> All Users</NavLink>
                            </li>
                            <div className="border-t border-white my-4"></div>
                            <li>
                                <NavLink to="/"><FaHome></FaHome>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/menu"><IoMdMenu></IoMdMenu>Menu</NavLink>
                            </li>
                            <li>
                                <NavLink to="/order"><FaShop></FaShop>Order</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact"><FaEnvelope></FaEnvelope> Contact</NavLink>
                            </li>

                        </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/user-home">
                                        <FaHome></FaHome> User Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart> Cart</NavLink>
                                </li>
                                {/* <li>
                                    <NavLink to="/dashboard/reservation"><FaCalendar></FaCalendar> Reservation</NavLink>
                                </li> */}
                                <li>
                                    <NavLink to="/dashboard/add-review"><FaComment></FaComment> Add Review</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/payment-history"><FaPaypal></FaPaypal> Payment History</NavLink>
                                </li>
                                {/* <li>
                                    <NavLink to="/dashboard/booking"><FaAd></FaAd> My Booking</NavLink>
                                </li> */}
                                <div className='divider divider-error'></div>
                                <li>
                                    <NavLink to="/"><FaHome></FaHome>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/menu"><IoMdMenu></IoMdMenu>Menu</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/order"><FaShop></FaShop>Order</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact"><FaEnvelope></FaEnvelope> Contact</NavLink>
                                </li>
                            </>
                    }

                </ul>
            </div>
            <div className='w-5/6'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
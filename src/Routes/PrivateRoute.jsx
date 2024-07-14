import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()
    // console.log(location);
    if (loading) {
        return <div className='flex items-center justify-center'>

            <span className="loading loading-dots loading-lg"></span>
        </div>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>


};

export default PrivateRoute;
import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()
    // console.log(location);
    if (loading) {
        return <span className="loading loading-ring loading-lg"></span>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>


};

export default PrivateRoute;
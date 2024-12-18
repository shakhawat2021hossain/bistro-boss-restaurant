import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import useAuth from '../Hooks/useAuth';

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const [isAdmin, adminLoading] = useAdmin()
    const location = useLocation()
    if (loading || adminLoading) {
        return <div className='flex items-center justify-center'>

            <span className="loading loading-dots loading-lg"></span>
        </div>
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;
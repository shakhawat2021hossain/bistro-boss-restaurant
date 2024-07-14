import React from 'react';
import useAuth from '../../Hooks/useAuth';
import SectionTitle from '../../Components/SectionTitle';

const AdminHome = () => {
    const { user } = useAuth()
    return (
        <div className='my-8'>
            <SectionTitle heading={"User Home"} subHeading={"Welcome to"}></SectionTitle>
            <div>
                <h1 className="text-3xl"> <span>Hi, Welcome </span>

                    {
                        user?.displayName ? user.displayName : 'Back'
                    }
                </h1>
            </div>
        </div>
    );
};

export default AdminHome;
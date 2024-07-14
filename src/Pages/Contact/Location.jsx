import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { FaClock, FaPhone } from 'react-icons/fa';
import { FaMapLocation } from 'react-icons/fa6';

const Location = () => {
    return (
        <div className='my-8'>
            <SectionTitle heading={"Our Location"} subHeading={"Visit Us"}></SectionTitle>
            <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className='b-1 border h-34'>
                    <div className='p-4 bg-orange-400 text-center text-white flex justify-center'>
                        <h1 className='text-6xl'><FaPhone></FaPhone></h1>
                    </div>
                    <div className='flex flex-col items-center justify-center bg-base-200 ml-3 mr-3 mb-3 text-center p-4 h-36'>
                        <h1 className="text-2xl uppercase">Phone</h1>
                        <p className="">+01990680907</p>
                    </div>
                </div>
                <div className='b-1 border'>
                    <div className='p-4 bg-orange-400 text-center text-white flex justify-center'>
                        <h1 className='text-6xl'><FaMapLocation></FaMapLocation></h1>
                    </div>
                    <div className='flex flex-col items-center justify-center bg-base-200 ml-3 mr-3 mb-3 text-center p-4 h-36'>
                        <h1 className="text-2xl uppercase">Adress</h1>
                        <p className="">Lalmonirhat, Bangladesh</p>
                    </div>
                </div>
                <div className='b-1 border'>
                    <div className='p-4 bg-orange-400 text-center text-white flex justify-center'>
                        <h1 className='text-6xl'><FaClock></FaClock></h1>
                    </div>
                    <div className='flex flex-col items-center justify-center bg-base-200 ml-3 mr-3 mb-3 text-center p-4 h-36'>
                        <h1 className="text-2xl uppercase">Working Hours</h1>
                        <p className="">Mon - Fri: 08:00 - 22:00 <br />
                            Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Location;
import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import featureImg from '../../assets/home/featured.jpg';
import './Home.css'

const Feature = () => {

    return (
        <div className="feature text-white bg-fixed mb-8">
            <div className='relative bg-black bg-opacity-50 h-full w-full py-10'>
                <SectionTitle
                    heading={"From Our Menu"}
                    subHeading={"Check It Out"}
                ></SectionTitle>
                <div className='grid md:grid-cols-2 gap-12 w-3/4 mx-auto'>

                    <img src={featureImg} alt="" />
                    <div className='my-auto'>
                        <h2 className='text-2xl'>March 20, 2023</h2>
                        <h3 className='uppercase'>Where Can I get Some?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quisquam obcaecati nulla, numquam maiores adipisci similique dolor rem, amet eius, voluptatibus impedit ex laborum nisi unde officia odit culpa maxime?</p>
                        <button className="btn btn-outline border-0 border-b-4">Order Now</button>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Feature;
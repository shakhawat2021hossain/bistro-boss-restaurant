import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

// TODO
const stripePromise = loadStripe(import.meta.env.VITE_Stripe_PK)

const Payment = () => {
    return (
        <div className='max-w-4xl mx-auto my-8'>
            <SectionTitle heading={"Payment"} subHeading={"Please Pay to Eat"}></SectionTitle>
            <div className='my-8'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
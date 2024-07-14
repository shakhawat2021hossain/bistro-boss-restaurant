import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useCart from '../../../Hooks/useCart';
import useAuth from '../../../Hooks/useAuth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transactionID, setTransactionID] = useState('')
    const axiosSecure = useAxiosSecure()

    const { user } = useAuth()

    const navigate = useNavigate()

    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((accu, curr) => accu + curr.price, 0)

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                    // console.log(clientSecret)
                })
        }
    }, [axiosSecure, totalPrice])

    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if (card == null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error:', error);
            setError(error.message)
        }
        else {
            console.log('payment method', paymentMethod);
            setError(' ')
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'annonymous',
                    email: user?.email || "annonymous"
                }
            }
        })

        if (confirmError) {
            console.log('confirm error:', confirmError);
        }
        else {
            console.log('payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                toast.success("Transaction completed successfully.")
                setTransactionID(paymentIntent.id)

                // save payment in the database
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    date: new Date(), //utc convert momentJS
                    status: 'pending',
                    transactionID: paymentIntent.id,
                    cartIDs: cart.map(item => item._id),
                    menuIDs: cart.map(item => item.menuId)
                }
                const res = await axiosSecure.post('/payments', payment)
                // console.log(res.data);
                if(res.data?.paymentResult?.insertedId){
                    toast.success("Check your payment history")
                    navigate('/dashboard/payment-history')
                    refetch()
                }
            }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-sm my-4 rounded-sm btn-primary' type="submit" disabled={!stripe}>
                Pay
            </button>
            <p className='text-red-600'>{error}</p>
            {transactionID && <p className='text-green-600'>Transaction ID: {transactionID}</p>}

        </form>
    );
};

export default CheckoutForm;
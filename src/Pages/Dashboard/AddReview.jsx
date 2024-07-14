import React, { useState } from 'react';
import SectionTitle from '../../Components/SectionTitle';
import ReactStars from "react-rating-stars-component";


const AddReview = () => {
    const [ratting, setRatting] = useState(0)
    const ratingChanged = (newRating) => {
        setRatting(newRating);
    };
    const handleReview = e => {
        e.preventDefault()
        const form = e.target
        const details = form.details.value;
        const review = {ratting: ratting, details: details}
        console.log(review);
    }
    return (
        <div className='my-8'>
            <SectionTitle heading={"Give a Review"} subHeading={"Sharing is Caring"}></SectionTitle>
            <div className='max-w-4xl mx-auto bg-base-200 p-4'>
                <div className='flex justify-center'>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={60}
                        activeColor="#ffd700"
                    />

                </div>
                    <h1 className="text-4xl uppercase text-center">Rate Us!</h1>

                <form onSubmit={handleReview}>
                    <div className="mb-4">
                        <label htmlFor="like" className="block text-gray-700 mb-2 font-bold">Which recipe you liked most?</label>
                        <input
                            type="text"
                            id="like"
                            name='like'
                            className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Recipe you liked most"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="suggestion" className="block text-gray-700 mb-2 font-bold">Do you have any suggestion for us?</label>
                        <input
                            type="text"
                            id="suggestion"
                            name='suggestion'
                            className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Suggestion"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="details" className="block text-gray-700 mb-2 font-bold">Kindly express your care in a short way.</label>
                        <textarea
                            type="text"
                            id="details"
                            name='details'
                            className="w-full h-24 px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Review Details"
                        />
                    </div>
                    <input type="submit" value="Login" className='bg-orange-500 text-white py-2 px-4 rounded-sm hover:bg-orange-700 transition duration-200'/>

                </form>

            </div>
        </div>
    );
};

export default AddReview;
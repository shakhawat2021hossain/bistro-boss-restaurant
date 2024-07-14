import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <SectionTitle
                heading={"Testimonials"}
                subHeading={"What Our Client Say"}
            ></SectionTitle>
            <div className='mx-auto lg:w-3/4'>

                <Swiper navigation={true} modules={[Navigation]} className="mySwiper my-6 text-center">

                    {
                        reviews.map(review => <SwiperSlide
                            key={review.reviewID} className='px-14'
                        >
                            <div className='flex flex-col items-center space-y-4'>

                                <Rating style={{ maxWidth: 300 }} value={review.rating} />
                                <div>
                                    <p>{review.details}</p>
                                    <h2 className='text-orange-400 text-3xl'>{review.name}</h2>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>

            </div>
        </div>
    );
};

export default Testimonial;
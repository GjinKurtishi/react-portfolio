import React from "react";
import "./testimonials.css";
import {data} from  './testimonialsData'

// import Swiper core and required modules
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
    return (
        <section id='Testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className='container testimonials__container'
                // install Swiper modules
                    modules={[ Pagination ]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{ clickable: true }}>
                {
                    data.map((data) => {
                        return (
                            <SwiperSlide className='testimonial'>
                                <div className='client__avatar'>
                                    <img src={data.avatar} alt='Avatar'/>
                                </div>
                                <h5 className='client__name'>{data.name}</h5>
                                <small className='client__review'>{data.review}</small>
                            </SwiperSlide>
                        );
                        }
                    )
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;

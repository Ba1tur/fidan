import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Keyboard, Navigation, Pagination} from "swiper";
import {customerReviewsData} from "../../../utils/CustomerReviewsData";

import arrow from '../../../assets/image/icons/greenLinkArrow.svg'
import './CustomerReviewsSlider.css'

const CustomerReviewsSlider = () => {
    return (
        <section id={'customer-reviews-slider'}>
            <div className="customer-reviews__title">
                <h2>Что о нас говорят?</h2>
                <h4>Отзывы</h4>
            </div>
            <Swiper
                navigation={true}
                keyboard={true}
                pagination={true}
                loop={true}
                modules={[Navigation, Keyboard, Pagination]}
                className="mySwiper">
                {customerReviewsData?.map(el => {
                    return (
                        <SwiperSlide key={el.id}>
                            <div className="container customer-reviews__container">
                                <div className="customer-reviews__row">
                                    <div className={'customer-reviews__left'}>
                                        <img src={el.img} alt="person"/>
                                    </div>
                                    <div className={'customer-reviews__right'}>
                                        <h3>{el.name}</h3>
                                        <span>{el.position}</span>
                                        <p className={'customer-reviews__right__rating'}>{`rating: ${el.rating}/5`}</p>
                                        <p className={'customer-reviews__right__comment'}>{el.comment}</p>
                                        <div className={'customer-reviews__right__button'}>
                                            <p>Смотреть больше</p>
                                            <img src={arrow} alt="icon"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>

            <div className={'customer-reviews__button'}>
                <button>Все отзывы</button>
            </div>
        </section>
    );
};

export default CustomerReviewsSlider;
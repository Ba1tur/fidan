import React from 'react';

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Keyboard} from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import {reviewSliderData} from "../../../utils/ReviewSliderData";

import linkArrow from '../../../assets/image/icons/linkArrow.svg'
import './ReviewSlider.css'

const ReviewSlider = () => {
    return (
        <section id={'review-slider'}>
            <Swiper
                navigation={true}
                keyboard={true}
                loop={true}
                modules={[Navigation, Keyboard]}
                className="mySwiper">
                {reviewSliderData?.map(el => {
                    return (
                        <SwiperSlide key={el.id}>
                            <div
                                className={'slide'}
                                style={{backgroundColor:el.color}}
                            >
                                <h4 className={'review-slider__shadow-text'}>Fidan</h4>
                                <div className={'slide-img'}>
                                    <img src={el.img} alt="slide"/>
                                </div>
                                <div className={'slide-content'}>
                                    <div className={'review-slider__container'}>
                                        <h4>Global</h4>
                                        <p className={'slide-content-desc'}>{el.description}</p>
                                        <div className={'slide-content__box'}>
                                            <p className={'slide-content-link'}>Узнать больше</p>
                                            <img src={linkArrow} alt="icon"/>
                                        </div>
                                        <button className={`slide-content-button ${el.className}`}>Посмотреть каталог</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    );
};

export default ReviewSlider;
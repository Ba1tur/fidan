import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Keyboard, Navigation} from "swiper";
import {ourTeamSliderData, ourTeamSliderIconData} from "../../../utils/OurTeamSliderData";

import linkArrow from "../../../assets/image/icons/linkArrow.svg";
import './OurTeamSlider.css'

const OurTeamSlider = () => {
    return (
        <section id={'ourTeam-slider'}>
            <div className="ourTeam-slider__title">
                <h2>Наша команда</h2>
                <h4>Fidan Global</h4>
            </div>
            <Swiper
                navigation={true}
                keyboard={true}
                loop={true}
                modules={[Navigation, Keyboard]}
                className="mySwiper">
                {ourTeamSliderData?.map(el => {
                    return (
                        <SwiperSlide key={el.id}>
                            <div className={'ourTeam-slider__container'}>
                                <div className={'ourTeam-slider__row'}>
                                    <div className={'col-2'}>
                                        <div className={'ourTeam-slider__left'}>
                                            <img src={el.img} alt="person"/>
                                        </div>
                                    </div>
                                    <div className={'col-2'}>
                                        <div className={'ourTeam-slider__right'}>
                                            <h3>{el.name}</h3>
                                            <span>{el.position}</span>
                                            <p>{el.description}</p>
                                            <div className={'ourTeam-slider__link-box'}>
                                                <p>узнать больше</p>
                                                <img src={linkArrow} alt="icon"/>
                                            </div>
                                            <div className={'ourTeam-slider__person-links'}>
                                                {ourTeamSliderIconData?.map((item, index) => {
                                                    return <img key={index} src={item.icon} alt="icon"/>
                                                })}
                                            </div>
                                        </div>
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

export default OurTeamSlider;
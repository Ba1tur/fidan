import React from 'react';

import phone from '../../assets/image/icons/phone.svg'

import FeedbackForm from "./FeedbackForm/FeedbackForm";
import './Feedback.css'

const Feedback = ({mark}) => {
    return (
        <section
            id={'feedback'}
            className={mark ?'pt-200px' : ''}
        >
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <div className="feedback__box feedback__left-box">
                            <h4>Свяжитесь с нами</h4>
                            <span>Оставьте контактные данные и мы свяжемся с вами.</span>
                            <div className={'feedback__left-box__contact'}>
                                <img src={phone} alt="icon"/>
                                <p>+996 502 472 760</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="feedback__box feedback__right-box">
                            <FeedbackForm/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedback;
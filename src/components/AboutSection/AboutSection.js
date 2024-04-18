import React from 'react';
import TitleH3 from "../UI/TitleH3/TitleH3";


import linkArrow from '../../assets/image/icons/linkArrow.svg'
import download from '../../assets/image/icons/download.svg'
import img from '../../assets/image/aboutSectionImage.jpg'
import playButton from '../../assets/image/icons/video-play.svg'
import './AboutSection.css'

const AboutSection = () => {
    return (
        <section id={'about'}>
            <div className="container about__container">
                <div className={'about__left'}>
                    <TitleH3 text={'Fidan Global'}/>
                    <p>
                        В мире садоводство изо дня в день обновляется, и методы, используемые в современном садоводстве,
                        постоянно развиваются. Как Fidan Global, одна из наших целей — следить за развитием и
                        обновлением современных методов выращивания фруктов в мире и делиться ими с вами, нашими
                        уважаемыми производителями.
                    </p>
                    <div className={'about__left-buttons'}>
                        <button>
                            Узнать больше о нас
                            <img src={linkArrow} alt="icon"/>
                        </button>
                        <button>
                            Скачать каталог
                            <img src={download} alt="icon"/>
                        </button>
                    </div>
                </div>
                <div className="about__right">
                    <img src={img} alt="img"/>
                    <div className={'about-play__button'}>
                        <img src={playButton} alt="icon"/>
                    </div>
                </div>
                <div className={'shadow-text'}>
                    <h6>Кто мы?</h6>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
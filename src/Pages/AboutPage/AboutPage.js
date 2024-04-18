import React from 'react';
import Header from "../../components/Header/Header";
import AboutSection from "../../components/AboutSection/AboutSection";
import ProductsAccordion from "../../components/ProductsAccordion/ProductsAccordion";
import Statistics from "../../components/Statistics/Statistics";
import OurTeamSlider from "../../components/Sliders/OurTeamSlider/OurTeamSlider";
import Feedback from "../../components/Feedback/Feedback";
import Footer from "../../components/Footer/Footer";
import TextSection from "../../components/UI/textSection/textSection";
import AboutSectionRevers from "../../components/AboutSection/AboutSectionRevers";

import about from "../../assets/image/cover/about1.jpg";

const AboutPage = () => {
    return (
        <>
            <Header background={about} title={'О нас'}/>
            <AboutSection/>
            <Statistics/>
            <ProductsAccordion/>
            <AboutSectionRevers/>
            <TextSection/>
            <AboutSection/>
            <OurTeamSlider/>
            <Feedback/>
            <Footer/>
        </>
    );
};

export default AboutPage;
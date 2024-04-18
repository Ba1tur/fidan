import React from 'react';

import Header from "../../components/Header/Header";
import AboutSection from "../../components/AboutSection/AboutSection";
import Statistics from "../../components/Statistics/Statistics";
import ProductsAccordion from "../../components/ProductsAccordion/ProductsAccordion";
import ReviewSlider from "../../components/Sliders/ReviewSlider/ReviewSlider";
import OurTeamSlider from "../../components/Sliders/OurTeamSlider/OurTeamSlider";
import BlogSection from "../../components/BlogSection/BlogSection";
import CustomerReviewsSlider from "../../components/Sliders/CustomerReviewsSlider/CustomerReviewsSlider";
import Feedback from "../../components/Feedback/Feedback";
import Footer from "../../components/Footer/Footer";

import main from "../../assets/image/cover/main.jpg";

const MainPage = () => {
    return (
        <>
            <Header background={main} title={'Fidan Global'}/>
            <AboutSection/>
            <ProductsAccordion/>
            <Statistics/>
            <ReviewSlider/>
            <OurTeamSlider/>
            <BlogSection/>
            <CustomerReviewsSlider/>
            <Feedback/>
            <Footer/>
        </>
    );
};

export default MainPage;
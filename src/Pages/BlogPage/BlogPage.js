import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


import blog from '../../assets/image/cover/blog.jpg'
import BlogFeed from "../../components/BlogFeed/BlogFeed";
import Feedback from "../../components/Feedback/Feedback";
const BlogPage = () => {
    return (
        <>
            <Header background={blog} title={'Блог'}/>
            <BlogFeed/>
            <Feedback/>
            <Footer/>
        </>
    );
};

export default BlogPage;
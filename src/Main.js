import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import BlogPage from "./Pages/BlogPage/BlogPage";
import ContactsPage from "./Pages/ContactsPage/ContactsPage";

const Main = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainPage/>}/>
            <Route path={'/about'} element={<AboutPage/>}/>
            <Route path={'/blog'} element={<BlogPage/>}/>
            <Route path={'/contacts'} element={<ContactsPage/>}/>
        </Routes>
    );
};

export default Main;
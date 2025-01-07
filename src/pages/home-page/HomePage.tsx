import React from 'react';
import Header from "../../components/header/Header";
import HeroSection from "../../components/hero-section/HeroSection";
import Offers from "../../components/offers/Offers";
import Footer from "../../components/footer/Footer";

const HomePage = () => {
    return (
        <>
            <Header/>
            <HeroSection/>
            <Offers/>
            <Footer />
        </>
    );
};

export default HomePage;
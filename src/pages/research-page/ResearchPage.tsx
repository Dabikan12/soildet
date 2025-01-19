import React from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ResearchForm from "../../components/research-form/ResearchForm";
import  "./ResearchPage.css";


const ResearchPage = () => {
    return (
        <>
            <Header/>
            <ResearchForm/>
            <Footer/>
        </>
    );
};

export default ResearchPage;
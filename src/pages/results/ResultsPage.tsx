import React from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ResearchForm from "../../components/research-form/ResearchForm";
import ResearchButton from "../../components/researchbutton/ResearchButton";
import  "./ResultsPage.css";


const ResultsPage = () => {
    return (
        <>
            <Header/>
            <ResearchForm />
            <ResearchButton/>
            <Footer/>
        </>
    );
};

export default ResultsPage;
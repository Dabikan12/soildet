import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import ResultDisplay from "../../components/result-display/ResultDisplay";
import Footer from "../../components/footer/Footer";

const ResultPage = () => {
    const location = useLocation();
    const { results } = location.state || { results: [] };

    return (
        <>
            <Header/>
            <ResultDisplay results={results} />
            <Footer/>
        </>
    );
};

export default ResultPage;
import React from "react";
import "./ResultDisplay.css";

interface Result {
    culture: string;
    matchCount: number;
}

interface ResultDisplayProps {
    results: Result[];
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ results }) => {
    return (
        <div className="results-container">
            {results.map((result, index) => {
                const matchClass =
                    result.matchCount > 6
                        ? "green"
                        : result.matchCount >= 3
                            ? "yellow"
                            : "red";

                return (
                    <div key={index} className={`result-card ${matchClass}`}>
                        <h2>{result.culture}</h2>
                        <p>Збігів: {result.matchCount}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default ResultDisplay;
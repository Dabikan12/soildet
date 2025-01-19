import React from "react";
import "./ResearchButton.css";

interface ResearchButtonProps {
    onClick?: () => void; // Опціональна функція, яка викликається при натисканні
}

const ResearchButton: React.FC<ResearchButtonProps> = ({ onClick }) => {
    return (
        <div className="button-wrapper">
            <button className="button">
                <span className="button-title">ОБРОБИТИ</span>
            </button>
        </div>
    );
};

export default ResearchButton;

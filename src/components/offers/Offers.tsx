import React from 'react';
import './Offers.css'
import paperClipIcon from "../../assets/icons/paperClipIcon.svg";
import processIcon from "../../assets/icons/processingIcon.svg";
import recomendationIcon from "../../assets/icons/recomendationIcon.svg";

const Offers = () => {

    return (
        <div className="offers-wrapper">
            <div className="beanie">
                <h1 className="offers-headline">
                    що ми пропонуємо?
                </h1>
                <p className="description">
                    основні функції проєкту <span className="project-name">Soildet</span>
                </p>
            </div>
            <div className="offers">
                <div className="offer">
                    <img src={paperClipIcon} alt="Paper Clip Icon" className="offers-clip-icon"/>
                    <h2 className="offer-title">
                        Прийом результатів
                    </h2>
                    <p className="offer-description">
                        Аналіз ґрунту, зроблений в лабораторії, можна завантажити в окремому полі сайту, через особистий кабінет.
                    </p>
                </div>
                <div className="offer">
                    <img src={processIcon} alt="Process Icon" className="offers-process-icon"/>
                    <h2 className="offer-title">
                        Обробка
                    </h2>
                    <p className="offer-description">
                        Після завантаження, здійснюється оброрбка результатів аналізу.
                    </p>
                </div>
                <div className="offer">
                    <img src={recomendationIcon} alt="Recommendation Icon" className="offers-recommendation-icon"/>
                    <h2 className="offer-title">
                        Надання рекомендацій
                    </h2>
                    <p className="offer-description">
                        Після обробки, ви отримуєте відповідні рекомендації щодо покращення умов вашого ґрунту.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Offers;
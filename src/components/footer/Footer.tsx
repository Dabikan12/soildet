import React from 'react';
import "./Footer.css"
import {FaInstagram} from "react-icons/fa";
import {BiLogoGmail} from "react-icons/bi";
import {MdLocalPhone} from "react-icons/md";

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-content-container">
                <div className="about">
                    <h2 className="title">
                        Про нас
                    </h2>
                    <p className="about-description">
                        SoilDet — це проєкт, що допомагає аграріям вибирати культури на основі аналізу ґрунту. Проєкт
                        визначає, які елементи та поживні речовини в ґрунті найбільше підходять для різних культур, і
                        дає рекомендації щодо вибору. Якщо обрана культура не відповідає ідеальним умовам, SoilDet
                        пропонує поради щодо корекції ґрунту за допомогою оптимальних добрив.
                    </p>
                </div>
                <div className="contacts">
                    <h2 className="title">
                        контакти
                    </h2>
                    <section className="footer-contacts">
                        <div className="contact">
                            <FaInstagram className="contact-icon"/>
                            <p className="contact-info">
                                Instagram
                            </p>
                        </div>
                        <div className="contact">
                            <BiLogoGmail className="contact-icon"/>
                            <p className="contact-info">
                                Пошта
                            </p>
                        </div>
                        <div className="contact">
                            <MdLocalPhone className="contact-icon"/>
                            <p className="contact-info">
                                Телефон
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Footer;
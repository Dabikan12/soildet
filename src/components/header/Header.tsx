import React, {useState} from "react";
import "./Header.css";
import {ReactComponent as Logo} from "../../assets/icons/logo.svg";
import {Link} from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={`header ${isOpen ? "open" : ""}`}>
            <div className="header-content-container">
                <button className="header__burger-btn" onClick={toggleMenu}>
                    <span></span><span></span><span></span>
                </button>

                <Logo className="header-logo"/>

                <nav className="header-links">
                    <Link to="/results" className="header-link">
                        <span className="link">Обробка результатів</span>
                    </Link>
                    <Link to="/contacts" className="header-link">
                        <span className="link">Контакти</span>
                    </Link>
                    <Link to="/about" className="header-link">
                        <span className="link">Про нас</span>
                    </Link>
                </nav>

                <nav className="header_nav">
                    <Link to="/results" onClick={toggleMenu}>
                        Обробка результатів
                    </Link>
                    <Link to="/contacts" onClick={toggleMenu}>
                        Контакти
                    </Link>
                    <Link to="/about" onClick={toggleMenu}>
                        Про нас
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;

import React, {useState, useEffect} from "react";
import "./Header.css";
import {ReactComponent as Logo} from "../../assets/icons/logo.svg";
import {Link} from "react-router-dom";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    const toggleMenu = (): void => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = (): void => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            id="header"
            className={`header ${isScrolled ? "scrolled" : ""} ${isOpen ? "open" : ""}`}
        >
            <div className="header-content-container">
                <button className="header__burger-btn" onClick={toggleMenu}>
                    <span></span><span></span><span></span>
                </button>

                <Logo className="header-logo"/>

                <nav className="header-links">
                    <Link to="/research" className="header-link">
                        <span className="link">Обробка результатів</span>
                    </Link>
                    <Link to="/about" className="header-link">
                        <span className="link">Про нас</span>
                    </Link>
                </nav>

                <nav className="header_nav">
                    <Link to="/results" onClick={toggleMenu}>
                        Обробка результатів
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

import './Header.css';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import likelion_logo from '../assets/likelion_logo.svg';
import hamburger_bars_icon from '../assets/hamburger_bars_icon.svg';

const Header = () => {
	const navigate = useNavigate();
    const [isMenuActive, setIsMenuActive] = useState(false);

    const toggleMenu = () => {
		setIsMenuActive(!isMenuActive);
	};

    const handleHome = () => {
        navigate('/');
    };

    const handleRecruit = () => {
        navigate('/recruit');
    };

    const handleResult = () => {
        navigate('/result');
    };

	return (
		<header>
            <nav className="navbar">
                <div className="navbar_logo">
                    <img className="likelion_logo" src={likelion_logo}  onClick={handleHome} alt="멋사 로고" />
                </div>
                <ul className={`navbar_menu ${isMenuActive ? 'active' : ''}`}>
                    <li><a href="" onClick={handleHome}>Home</a></li>
                    <li><a href="" onClick={handleRecruit}>Recruit</a></li>
                    <li><a href="" onClick={handleResult}>Result</a></li>
                </ul>
                <a href="#" onClick={toggleMenu} className="navbar_toggleBtn">
                    <img className="hamburger_bars_icon" src={hamburger_bars_icon} alt="햄버거 바 아이콘" />
                </a>
            </nav>
		</header>
	);
};

export default Header;

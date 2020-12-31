import React from 'react';
import heart_icon from './heart_icon.svg'
import '../../App.css';

const Footer = () => {
    return (
        <div className="footer-main">
            <div className="outro">
                <span id="footer-text">Developed with <img src={heart_icon} alt="" height="15px" width="20px"/> by <a href="https://www.linkedin.com/in/arun-kumar-49776818b/">Arun Kumar</a></span>
            </div>
            <div className="social-icons">
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/arun-kumar-49776818b/"><i className="fab fa-linkedin fa-2x icons"></i></a>
                <a target="_blank" rel="noreferrer" href="https://github.com/arunkumar198857"><i className="fab fa-github fa-2x icons"></i></a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/charmander_og/"><i className="fab fa-instagram fa-2x icons"></i></a>
            </div>
        </div>
    )
}

export default Footer;

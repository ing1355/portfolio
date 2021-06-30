import React from 'react';
import '../../css/Footer.css'

const Footer = props => {
    return (
        <div className="footer-container">
            <div className="footer-link-container">
                <a className="footer-link-item">
                    test
                </a>
                <a className="footer-link-item">
                    test
                </a>
                <a className="footer-link-item">
                    test
                </a>
                <a className="footer-link-item">
                    test
                </a>
            </div>
            <button className="footer-top-btn" onClick={() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }}>
                Up
            </button>
            <div className="footer-author">
                MATTHEW WILLIAMS
            </div>
        </div>
    )
}

export default Footer;
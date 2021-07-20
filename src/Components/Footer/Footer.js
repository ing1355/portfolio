import React from 'react';
import '../../css/Footer.css'
import {FacebookOutlined, InstagramOutlined, CodepenOutlined, LinkedinOutlined, DoubleRightOutlined} from '@ant-design/icons'

const Footer = props => {
    return (
        <div className="footer-container">
            <div className="footer-link-container flex">
                <a className="footer-link-item">
                    <LinkedinOutlined className="footer-link-icon"/>
                </a>
                <a className="footer-link-item">
                    <FacebookOutlined className="footer-link-icon"/>
                </a>
                <a className="footer-link-item">
                    <InstagramOutlined className="footer-link-icon"/>
                </a>
                <a className="footer-link-item">
                    <CodepenOutlined className="footer-link-icon"/>
                </a>
            </div>
            <button className="footer-top-btn" onClick={() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }}>
                <DoubleRightOutlined style={{fontSize:'2.5rem', transform:'rotate(-90deg)'}}/>
            </button>
            <div className="footer-author">
                MATTHEW WILLIAMS
            </div>
        </div>
    )
}

export default Footer;
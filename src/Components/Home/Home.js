import { ArrowRightOutlined } from '@ant-design/icons';
import React, { useEffect } from 'react';
import '../../css/Home.css'
import '../../scss/bubble.scss'
import $ from 'jquery';
import gif from '../../assets/homeGif.gif';

const Home = props => {
    return (
        <section id='home' className="flex">
            <div className="bubbles">
                {
                    new Array(50).fill(1).map(() => <div className="bubble"/>)
                }
            </div>
            {/* <img src={gif} className="homegif" /> */}
            {/* <div id="stars"/>
            <div id="stars2"/>
            <div id="stars3"/>
            <div id="stars" className="left"/>
            <div id="stars2" className="left"/>
            <div id="stars3" className="left"/> */}
            <div className="home-text">
                Hello, I'm
                <span className="home-text-span"> Matthew Williams</span>.<br />
                I'm a full-stack web developer.
            </div>
            <button className="home-btn"
                onMouseEnter={e => {
                    document.getElementById('home-btn-icon').style.transform = 'rotate(90deg)';
                }} onMouseLeave={e => {
                    document.getElementById('home-btn-icon').style.transform = '';
                }} onClick={() => {
                    window.scrollTo({
                        top: document.getElementById('about').offsetTop + 53,
                        behavior: 'smooth'
                    })
                }}>
                View my work <ArrowRightOutlined className="home-btn-icon" id="home-btn-icon" />
            </button>
        </section>
    )
}

export default Home;
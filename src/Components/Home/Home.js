import { ArrowRightOutlined, DoubleRightOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { Waypoint } from 'react-waypoint';
import '../../css/Home.css'
import '../../scss/bubble.scss'
import $ from 'jquery';

const Home = props => {
    const [init, setInit] = useState(false)

    function animationEnableFunc() {
        var elem = $('#home-bottom-arrow'),
            animationClass = elem.attr('trigger');
        if (!init) {
            setInit(true);
            elem.addClass(animationClass);
        } else {
            elem.css('visibility', 'visible')
        }
    }

    function animationDisableFunc() {
        var elem = $('#home-bottom-arrow');
        elem.css('visibility', 'hidden')
    }

    return (
        <section id='home' className="flex">
            <Waypoint onEnter={e => {
                animationEnableFunc();
            }} />
            <div className="bubbles">
                {
                    new Array(50).fill(1).map(() => <div className="bubble" />)
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
                A Tribe Called <span className="home-text-span"> Sungwon Moon.</span><br />
                Any Interest?
            </div>
            {/* <button className="home-btn"
                onMouseEnter={e => {
                    document.getElementById('home-btn-icon').style.transform = 'rotate(90deg)';
                }} onMouseLeave={e => {
                    document.getElementById('home-btn-icon').style.transform = '';
                }} onClick={() => {
                    window.scrollTo({
                        top: document.getElementById('about').offsetTop + 43,
                        behavior: 'smooth'
                    })
                }}>
                View my work <ArrowRightOutlined className="home-btn-icon" id="home-btn-icon" />
            </button> */}
            <div className="home-arrow-container" id="home-bottom-arrow" trigger="arrow-up-down" onClick={() => {
                window.scrollTo({
                    top: document.getElementById('about').offsetTop + 43,
                    behavior: 'smooth'
                })
            }}>
                <div>
                    YEAH!
                </div>
                <div>
                    <DoubleRightOutlined className="home-bottom-arrow" />
                </div>
            </div>
            <Waypoint onLeave={e => {
                animationDisableFunc();
            }} />
        </section>
    )
}
export default Home;
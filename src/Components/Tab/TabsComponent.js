import React, { useEffect, useRef, useState } from 'react';
import '../../css/TabsComponent.css'
import {MenuOutlined} from '@ant-design/icons';
import $ from 'jquery'

const TabsComponent = props => {
    const scrollRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        window.onscroll = e => {
            if (scrollRef.current === 1) {
                if (window.scrollY > document.getElementById('home').offsetHeight) {
                    document.getElementById('tabs-container').classList.add('fixed')
                } else {
                    document.getElementById('tabs-container').classList.remove('fixed')
                }
            }
        }
        window.onload = e => {
            scrollRef.current = 1;
            if (window.scrollY > document.getElementById('home').offsetHeight) {
                document.getElementById('tabs-container').classList.add('fixed')
            }
        }
    }, [])

    function getOffsetTop(el) {
        var top = 0;
        if (el.offsetParent) {
            do {
                top += el.offsetTop;
            } while (el = el.offsetParent);
            return top;
        }
    }

    const tabClick = elementName => {
        setMenuOpen(false);
        window.scrollTo({
            top: getOffsetTop(document.getElementById(elementName)),
            behavior: 'smooth'
        })
    }

    return (
        <nav className="tabs-container flex" id="tabs-container">
            <div className={"tabs-sub-container " + (menuOpen ? 'opened' : '')}>
                <div className="tabs-menu-item active" onClick={() => { tabClick('home') }} dest='home'>
                    HOME
                </div>
                <div className="tabs-menu-item" onClick={() => { tabClick('about') }} dest='about'>
                    ABOUT
                </div>
                <div className="tabs-menu-item" onClick={() => { tabClick('career') }} dest='career'>
                    CAREER
                </div>
                <div className="tabs-menu-item" onClick={() => { tabClick('works') }} dest='works'>
                    WORKS
                </div>
                <div className="tabs-menu-item" onClick={() => { tabClick('blog') }} dest='blog'>
                    BLOG
                </div>
                <div className="tabs-menu-item" onClick={() => { tabClick('contact') }} dest='contact'>
                    CONTACT
                </div>
            </div>
            <div className={"mobile-menu-icon flex"}>
                <MenuOutlined onClick={() => {
                    setMenuOpen(!menuOpen);
                }}/>
            </div>
        </nav>
    )
}

export default TabsComponent;
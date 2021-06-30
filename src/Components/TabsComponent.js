import React, { useEffect } from 'react';
import '../css/TabsComponent.css'

const TabsComponent = props => {
    useEffect(() => {
        window.onscroll = e => {
            if (window.scrollY > document.getElementById('home').offsetHeight) {
                document.getElementById('tabs-container').classList.add('fixed')
            } else {
                document.getElementById('tabs-container').classList.remove('fixed')
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
        window.scrollTo({
            top: getOffsetTop(document.getElementById(elementName)),
            behavior: 'smooth'
        })
    }

    return (
        <nav className="tabs-container" id="tabs-container">
            <div className="tabs-sub-container">
                <div className="tabs-menu-item" onClick={()=>{tabClick('home')}}>
                    HOME
                </div>
                <div className="tabs-menu-item" onClick={()=>{tabClick('about')}}>
                    ABOUT
                </div>
                <div className="tabs-menu-item" onClick={()=>{tabClick('works')}}>
                    WORKS
                </div>
                <div className="tabs-menu-item" onClick={()=>{tabClick('blog')}}>
                    BLOG
                </div>
                <div className="tabs-menu-item" onClick={()=>{tabClick('contact')}}>
                    CONTACT
                </div>
            </div>
        </nav>
    )
}

export default TabsComponent;
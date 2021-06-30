import React from 'react';
import '../css/MainComponent.css';
import About from './About/About';
import Contact from './Contact/Contact';
import Works from './Works/Works';
import Blog from './Blog/Blog';
import Footer from './Footer/Footer';

const MainComponent = props => {
    return (
        <>
            <About/>
            <Works/>
            <Blog/>
            <div className="btn-load-more">
                Load more
            </div>
            <Contact/>
            <Footer/>
        </>
    )
}

export default MainComponent;
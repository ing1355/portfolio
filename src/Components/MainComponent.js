import React from 'react';
import '../css/MainComponent.css';
import About from './About/About';
import Contact from './Contact/Contact';
import Works from './Works/Works';
import Blog from './Blog/Blog';
import Footer from './Footer/Footer';
import Career from './Career/Career';

const MainComponent = props => {
    return (
        <>
            <About/>
            <Career/>
            <Works/>
            <Blog/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default MainComponent;
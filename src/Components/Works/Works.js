import React from 'react';
import '../../css/Works.css'
import TitleComponent from '../TitleComponent';

const Works = props => {
    return (
        <section id="works">
            <div className="works container flex">
                <TitleComponent title="works"/>
            </div>
        </section>
    )
}

export default Works;
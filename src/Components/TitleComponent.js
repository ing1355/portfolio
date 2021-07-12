import React from 'react';
import $ from 'jquery';
import CustomWaypoint from './CustomWaypoint';

const TitleComponent = ({ title }) => {
    return (
        <CustomWaypoint elemId={title + 'component'}>
            <div className={title + " title trigger"} trigger="slide-in-left" id={title + 'component'}>
                {title.charAt(0).toUpperCase() + title.slice(1)}
            </div>
            {/* <div className={title + " title-bar animated slide-in-left"} style={{animationDelay:'0.5s'}}/> */}
        </CustomWaypoint>
    )
}

export default TitleComponent;
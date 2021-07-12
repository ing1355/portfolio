import React, { useEffect, useState } from 'react';
import { Waypoint } from 'react-waypoint';
import $ from 'jquery';

const CustomWaypoint = ({ elemId, children }) => {
    function animationActivate() {
        var elem = $('#' + elemId),
            animationClass = elem.attr('trigger'),
            animationDelay = elem.attr('trigger-delay');
        if (animationDelay) {
            elem.css({
                '-webkit-animation-delay': animationDelay,
                '-moz-animation-delay': animationDelay,
                'animation-delay': animationDelay
            });
        }
        elem.addClass('trigger').addClass('animated');
        elem.addClass('trigger').addClass(animationClass);
        if (elemId === 'about-waypoint-10') {
            $('.ability-bar').map(function () {
                setTimeout(() => {
                    this.style.width = this.dataset.width
                }, this.dataset.delay);
            })
        }
    }

    return (
        <>
            <Waypoint bottomOffset="350px" onEnter={({ previousPosition, currentPosition, event, waypointTop }) => {
                animationActivate();
            }}>
                {children}
            </Waypoint>
        </>
    )
}

export default CustomWaypoint;
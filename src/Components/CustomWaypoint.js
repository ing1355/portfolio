import React from 'react';
import { Waypoint } from 'react-waypoint';
import $ from 'jquery';
import AnimationActivate from './Functions.js/AnimationActivate';

const CustomWaypoint = ({ elemId, children }) => {

    return (
        <>
            <Waypoint bottomOffset="300px" onEnter={({ previousPosition, currentPosition, event, waypointTop }) => {
                AnimationActivate(elemId);
            }}>
                {children}
            </Waypoint>
        </>
    )
}

export default CustomWaypoint;
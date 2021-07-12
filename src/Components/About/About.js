import React, { useEffect, useState } from 'react';
import '../../css/About.css';
import { Row, Col } from 'antd';
import TitleComponent from '../TitleComponent';
import CustomWaypoint from '../CustomWaypoint';
import { items } from './AboutItems';

const About = props => {
    const abilities = {
        Python: '90%',
        PyTorch: '80%',
        Tensorflow: '70%',
        'C & C++': '50%'
    }

    const tags = [
        'Deep Learning', 'Natural Language Processing', 'Computer Vision', 'Machine Transition',
        'Image Transition', 'Sign Language Processing', 'Human Pose Estimation', 'Optical Character Recognition', 'Document Recognition'
    ]

    const profile = {
        profile_imgSrc : 'https://cdn.pixabay.com/photo/2017/05/13/23/05/emoji-2310895_960_720.png',
        profile_title : "Who's this guy?",
        profile_description :  <>I'm a Front-End Developer for <span style={{ color: '#FF8D00' }}>ChowNow</span> in Los Angeles, CA.<br />
        I have serious passion for UI effects, animations and creating<br />intuitive, dynamic user experiences.<br />
        <span style={{ color: '#FF8D00' }}>Let's make something special.</span></>
    }

    return (
        <section id="about">
            <div className="about container flex">
                <TitleComponent title="about" />
                <Row className="about-characteristics-container">
                    {
                        items.map((item,ind) => {
                            const { imgId, trigger_delay, imgSrc, textId, text, subText } = item;
                            return (
                                <Col xs={12} sm={12} md={12} lg={6} className="about-characteristics-item" key={'about-item' + ind}>
                                    <CustomWaypoint elemId={imgId}>
                                        <img className='about-characteristics-item-img trigger' trigger='flipInX'
                                            src={imgSrc} id={imgId} trigger-delay={trigger_delay} />
                                    </CustomWaypoint>
                                    <CustomWaypoint elemId={textId}>
                                        <div className='trigger' trigger='fadeIn' id={textId} trigger-delay={trigger_delay}>
                                            <div className='about-characteristics-item-text'>
                                                {text}
                                            </div>
                                            <div className='about-characteristics-item-subtext'>
                                                {subText}
                                            </div>
                                        </div>
                                    </CustomWaypoint>
                                </Col>
                            )
                        })
                    }
                </Row>
                <Row className="about-profile-container" gutter={[32, 64]}>
                    <CustomWaypoint elemId="about-waypoint-9">
                        <Col xs={24} sm={24} md={24} lg={12} className="trigger" trigger="slide-in-left" id="about-waypoint-9">
                            <img className="about-profile-img" src={profile.profile_imgSrc} />
                            <div className="about-profile-text">
                                {profile.profile_title}
                            </div>
                            <div>
                                {profile.profile_description}
                            </div>
                        </Col>
                    </CustomWaypoint>
                    <CustomWaypoint elemId='about-waypoint-10'>
                        <Col xs={24} sm={24} md={24} lg={12} className="about-ability-container trigger" trigger="slide-in-right" id="about-waypoint-10">
                            {Object.keys(abilities).map((ab, ind) => {
                                return <div className="ability flex" key={ab + ind}>
                                    <div className="ability-bar" data-width={abilities[ab]} data-delay={(ind + 2) * 100}>
                                        <div className="ability-name flex">
                                            {ab}
                                        </div>
                                    </div>
                                    <span className="ability-percentage">
                                        {abilities[ab]}
                                    </span>
                                </div>
                            })}
                            {tags.map((tag, ind) => {
                                return <div className="ability-tag" key={tag + ind}>{tag}</div>
                            })}
                        </Col>
                    </CustomWaypoint>
                </Row>
            </div>
        </section>
    )
}

export default About;
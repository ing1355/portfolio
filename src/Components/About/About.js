import React from 'react';
import '../../css/About.css';
import { Row, Col } from 'antd';
import TitleComponent from '../TitleComponent';
import CustomWaypoint from '../CustomWaypoint';
import { items } from './AboutItems';
import profileImg from '../../assets/profile.jpg'

const About = props => {
    const abilities = {
        Python: '90%',
        PyTorch: '80%',
        Tensorflow: '70%',
        'C & C++': '50%',
        Photoshop: '80%'
    }

    const tags = [
        'Natural Language Processing', 'Computer Vision', 'Machine Transition', 'OCR', 'Document Recognition',
        'Synthesis Data Generation', 'Sign Language Translation', 'Human Pose Estimation'
    ]

    const profile = {
        profile_imgSrc : profileImg,
        profile_title : "Sungwon Moon",
        profile_description :  <>Deep Learning Researcher for <a style={{color:'#d4352c', textDecoration:'underline'}} href="https://www.lomin.ai/">Lomin</a>.<br/>
        I am very interested in solving the world’s problems<br/>
        with HIGH-LEVEL technology, such as DL!</>
    }

    return (
        <section id="about">
            <div className="about container flex">
                {/* <TitleComponent title="about" />
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
                </Row> */}
                <Row className="about-profile-container" justify="center">
                    <CustomWaypoint elemId="about-waypoint-9">
                        <Col xs={24} sm={24} md={24} lg={12} className="trigger" trigger="slide-in-left" id="about-waypoint-9">
                            <img className="about-profile-img" src={profile.profile_imgSrc} />
                            <div className="about-profile-text kopubbatang">
                                {profile.profile_title}
                            </div>
                            <div>
                                {profile.profile_description}
                            </div>
                        </Col>
                    </CustomWaypoint>
                </Row>
                <Row className="about-profile-container" gutter={[0, 64]} justify="center">
                    {/* <CustomWaypoint elemId="about-waypoint-9">
                        <Col xs={24} sm={24} md={24} lg={12} className="trigger" trigger="slide-in-left" id="about-waypoint-9">
                            <img className="about-profile-img" src={profile.profile_imgSrc} />
                            <div className="about-profile-text">
                                {profile.profile_title}
                            </div>
                            <div>
                                {profile.profile_description}
                            </div>
                        </Col>
                    </CustomWaypoint> */}
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
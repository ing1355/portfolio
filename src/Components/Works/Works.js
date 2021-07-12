import { Row, Col, Modal } from 'antd';
import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import '../../css/Works.css'
import CustomWaypoint from '../CustomWaypoint';
import TitleComponent from '../TitleComponent';
import $ from 'jquery';
import WorksModal from './WorksModal';
import imgSrc from '../../assets/dummy1.jpg';

const Works = props => {
    const tabs = ['ALL', 'RUBY/RAILS', 'REACT-JS', 'JAVASCRIPT'];
    const [currentTab, setCurrentTab] = useState(tabs[0]);
    const [modalOpen, setModalOpen] = useState(false);
    const items = [
        {
            title: 'ChowNow Ordering',
            subTitle: 'React JS / Python',
            modalTitle: 'NeverSurrender',
            modalSubTitle: 'ALS AWARENESS',
            modalContent: 'NeverSurrender is a platform for the new ALS foundation mobile app in hopes to raise awareness and research funding to fight ALS. Pure JavaScript marketing site to promote the new ALS NeverSurrender app.',
            modalImgSrc: imgSrc
        }, {
            title: 'ChowNow Ordering',
            subTitle: 'React JS / Python',
            modalTitle: 'NeverSurrender',
            modalSubTitle: 'ALS AWARENESS',
            modalContent: 'NeverSurrender is a platform for the new ALS foundation mobile app in hopes to raise awareness and research funding to fight ALS. Pure JavaScript marketing site to promote the new ALS NeverSurrender app.',
            modalImgSrc: imgSrc
        }, {
            title: 'ChowNow Ordering',
            subTitle: 'React JS / Python',
            modalTitle: 'NeverSurrender',
            modalSubTitle: 'ALS AWARENESS',
            modalContent: 'NeverSurrender is a platform for the new ALS foundation mobile app in hopes to raise awareness and research funding to fight ALS. Pure JavaScript marketing site to promote the new ALS NeverSurrender app.',
            modalImgSrc: imgSrc
        },
        {
            title: 'ChowNow Ordering',
            subTitle: 'React JS / Python',
            modalTitle: 'NeverSurrender',
            modalSubTitle: 'ALS AWARENESS',
            modalContent: 'NeverSurrender is a platform for the new ALS foundation mobile app in hopes to raise awareness and research funding to fight ALS. Pure JavaScript marketing site to promote the new ALS NeverSurrender app.',
            modalImgSrc: imgSrc
        }, {
            title: 'ChowNow Ordering',
            subTitle: 'React JS / Python',
            modalTitle: 'NeverSurrender',
            modalSubTitle: 'ALS AWARENESS',
            modalContent: 'NeverSurrender is a platform for the new ALS foundation mobile app in hopes to raise awareness and research funding to fight ALS. Pure JavaScript marketing site to promote the new ALS NeverSurrender app.',
            modalImgSrc: imgSrc
        }, {
            title: 'ChowNow Ordering',
            subTitle: 'React JS / Python',
            modalTitle: 'NeverSurrender',
            modalSubTitle: 'ALS AWARENESS',
            modalContent: 'NeverSurrender is a platform for the new ALS foundation mobile app in hopes to raise awareness and research funding to fight ALS. Pure JavaScript marketing site to promote the new ALS NeverSurrender app.',
            modalImgSrc: imgSrc
        },
        {
            title: 'ChowNow Ordering',
            subTitle: 'React JS / Python',
            modalTitle: 'NeverSurrender',
            modalSubTitle: 'ALS AWARENESS',
            modalContent: 'NeverSurrender is a platform for the new ALS foundation mobile app in hopes to raise awareness and research funding to fight ALS. Pure JavaScript marketing site to promote the new ALS NeverSurrender app.',
            modalImgSrc: imgSrc
        }, {
            title: 'ChowNow Ordering',
            subTitle: 'React JS / Python',
            modalTitle: 'NeverSurrender',
            modalSubTitle: 'ALS AWARENESS',
            modalContent: 'NeverSurrender is a platform for the new ALS foundation mobile app in hopes to raise awareness and research funding to fight ALS. Pure JavaScript marketing site to promote the new ALS NeverSurrender app.',
            modalImgSrc: imgSrc
        }, {
            title: 'ChowNow Ordering',
            subTitle: 'React JS / Python',
            modalTitle: 'NeverSurrender',
            modalSubTitle: 'ALS AWARENESS',
            modalContent: 'NeverSurrender is a platform for the new ALS foundation mobile app in hopes to raise awareness and research funding to fight ALS. Pure JavaScript marketing site to promote the new ALS NeverSurrender app.',
            modalImgSrc: imgSrc
        }
    ]
    return (
        <section id="works" style={{ background: '#f5f5f5' }}>
            <div className="works container flex">
                <TitleComponent title="works" />
                <CustomWaypoint elemId="works-waypoint-1">
                    <div className="trigger works-tabs-container" trigger="fadeIn" id="works-waypoint-1">
                        <div className="flex works-tabs-item-container">
                            {tabs.map((tab, ind) => {
                                return <div key={tab + ind} className={"works-tab-item" + (currentTab === tab ? ' active' : '')} onClick={() => {
                                    setCurrentTab(tab)
                                }}>{tab}</div>
                            })}
                        </div>
                    </div>
                </CustomWaypoint>
                <Waypoint bottomOffset="350px" onEnter={() => {
                    items.map((item, ind) => {
                        var elem = $('#works-waypoint-' + (2 + ind)),
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
                    })

                }} />
                <div className="works-item-container">
                    <Row className="works-items-row-container">
                        {items.map((item, ind) => {
                            const imgId = 'card-img-' + (2 + ind);
                            const textId = 'card-text-' + (2 + ind);
                            const btnId = 'card-btn-' + (2 + ind);
                            const {modalTitle, modalSubTitle, modalImgSrc, modalContent} = item;
                            return <Col xs={24} sm={12} md={12} lg={8} key={'card' + ind} className="trigger flex works-items-col-container" trigger="slide-in-bottom" id={"works-waypoint-" + (2 + ind)} trigger-delay={`${(ind / 10) + 0.2}s`}>
                                <div className="works-items-card-container"
                                    onMouseEnter={e => {
                                        document.getElementById(imgId).style.opacity = 0;
                                        document.getElementById(textId).style.opacity = 1;
                                        document.getElementById(textId).style.top = '80px';
                                        document.getElementById(btnId).style.opacity = 1;
                                        document.getElementById(btnId).style.bottom = '50px';
                                    }} onMouseLeave={e => {
                                        document.getElementById(imgId).style.opacity = 1;
                                        document.getElementById(textId).style.opacity = 0;
                                        document.getElementById(textId).style.top = 0;
                                        document.getElementById(btnId).style.opacity = 0;
                                        document.getElementById(btnId).style.bottom = 0;
                                    }}>
                                    <div className="works-items-card-img" id={imgId} />
                                    <div className="works-items-card-text" id={textId}>
                                        <div style={{ fontSize: '16pt' }}>
                                            {item.title}
                                        </div>
                                        <span style={{ color: '#FF8D00' }}>
                                            {item.subTitle}
                                        </span>
                                    </div>
                                    <button className="works-items-card-btn" id={btnId} onClick={() => {
                                        setModalOpen(true);
                                    }}>
                                        LEARN MORE
                                    </button>
                                </div>
                                <WorksModal modalOpen={modalOpen} onCancel={() => {
                                    setModalOpen(false);
                                }} modalTitle={modalTitle} modalImgSrc={modalImgSrc} modalSubTitle={modalSubTitle} modalContent={modalContent}/>
                            </Col>
                        })}
                    </Row>
                </div>
            </div>
        </section >
    )
}

export default Works;
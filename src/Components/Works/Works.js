import { Row, Col, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { Waypoint } from 'react-waypoint';
import '../../css/Works.css'
import CustomWaypoint from '../CustomWaypoint';
import TitleComponent from '../TitleComponent';
import $ from 'jquery';
import WorksModal from './WorksModal';
import tableRecognizerImg0 from '../../assets/TableRecognizer/0.jpg';
import KoreanLicensePlateRecognitionImg0 from '../../assets/Korean License Plate Recognition/0.jpg';
import KoreanLicensePlateRecognitionImg1 from '../../assets/Korean License Plate Recognition/1.jpg';
import KoreanLicensePlateRecognitionImg2 from '../../assets/Korean License Plate Recognition/2.jpg';
import KoreanLicensePlateRecognitionImg3 from '../../assets/Korean License Plate Recognition/3.jpg';
import DubaiSignLanguageTranslationSystemImg0 from '../../assets/Dubai Sign Language Translation System/0.jpg'
import DubaiSignLanguageTranslationSystemImg1 from '../../assets/Dubai Sign Language Translation System/dubai.gif'
import KoreanSignLanguageTranslationSystemImg0 from '../../assets/Korean Sign Language Translation System/0.jpg'
import KoreanSignLanguageTranslationSystemImg1 from '../../assets/Korean Sign Language Translation System/1.jpg'
import KoreanSignLanguageTranslationSystemImg2 from '../../assets/Korean Sign Language Translation System/2.jpg'
import KoreanSignLanguageTranslationSystemImg3 from '../../assets/Korean Sign Language Translation System/3.jpg'
import FlipperzImg0 from '../../assets/Flipperz/0.jpg'
import FlipperzImg1 from '../../assets/Flipperz/1.jpg'
import mixitup from 'mixitup'
import { FormattedMessage, useIntl } from 'react-intl';

var mixer;

const Works = props => {
    const {formatMessage} = useIntl();
    const tabs = ['ALL', 'VISION', 'NLP', 'NON-DL'];
    const [currentTab, setCurrentTab] = useState(tabs[0]);
    const [modalOpen, setModalOpen] = useState(-1);
    const [isAnimation, setIsAnimation] = useState(false);
    var id = 0;
    const items = [
        {
            title: <FormattedMessage id="worksTitle1"/>,
            modalTitle: <FormattedMessage id="worksTitle1"/>,
            modalSubTitle: '2021',
            modalContent: <><p><FormattedMessage id="worksContent1_1"/></p>
                <p><FormattedMessage id="worksContent1_2"/></p>
                <p><FormattedMessage id="worksContent1_3"/></p></>,
            modalImgSrc: [tableRecognizerImg0],
            type: ['VISION']
        }, {
            title: <FormattedMessage id="worksTitle2"/>,
            modalTitle: <FormattedMessage id="worksTitle2"/>,
            modalSubTitle: '2020',
            modalContent: <><p><FormattedMessage id="worksContent2_1"/></p>
                <p><FormattedMessage id="worksContent2_2"/></p>
                <p><FormattedMessage id="worksContent2_3"/><br /><a href="https://library.korea.ac.kr/detail/?cid=CAT000046074034&ctype=t">&lt;<FormattedMessage id="worksContent2_4"/>&gt;</a></p></>,
            modalImgSrc: [KoreanLicensePlateRecognitionImg0, KoreanLicensePlateRecognitionImg1, KoreanLicensePlateRecognitionImg2, KoreanLicensePlateRecognitionImg3],
            type: ['VISION']
        }, {
            title: <FormattedMessage id="worksTitle3"/>,
            modalTitle: <FormattedMessage id="worksTitle3"/>,
            modalSubTitle: '2020',
            modalContent: <><p><FormattedMessage id="worksContent3_1"/></p>
                <p><FormattedMessage id="worksContent3_2"/></p>
                <p><FormattedMessage id="worksContent3_3"/></p>
                <p><FormattedMessage id="worksContent3_4"/><a href="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d1aa0d70-abfd-42e8-b448-ac43939eaf40/dubai_sign_language_translate_demo.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210719T095247Z&X-Amz-Expires=86400&X-Amz-Signature=cac00d6fca662f5220ee053783098196f23c6936b4132155eec76d953a69174f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22dubai_sign_language_translate_demo.mp4%22"><FormattedMessage id="worksContent3_5"/></a></p></>,
            modalImgSrc: [DubaiSignLanguageTranslationSystemImg0, DubaiSignLanguageTranslationSystemImg1],
            type: ['VISION', 'NLP']
        },
        {
            title: <FormattedMessage id="worksTitle4"/>,
            modalTitle: <FormattedMessage id="worksTitle4"/>,
            modalSubTitle: '2019',
            modalContent: <><p><FormattedMessage id="worksContent4_1"/></p>
                <p><FormattedMessage id="worksContent4_2" values={{url : <a href="https://github.com/CMU-Perceptual-Computing-Lab/openpose"><u>Openpose</u></a>}}/></p>
                <p><FormattedMessage id="worksContent4_3"/></p>
                <p><FormattedMessage id="worksContent4_4"/><a href="https://www.msit.go.kr/index.do"><u><FormattedMessage id="worksContent4_5"/></u></a><FormattedMessage id="worksContent4_6"/></p></>,
            modalImgSrc: [KoreanSignLanguageTranslationSystemImg0, KoreanSignLanguageTranslationSystemImg1, KoreanSignLanguageTranslationSystemImg2, KoreanSignLanguageTranslationSystemImg3],
            type: ['VISION', 'NLP']
        }, {
            title: <FormattedMessage id="worksTitle5"/>,
            modalTitle: <FormattedMessage id="worksTitle5"/>,
            modalSubTitle: '2017',
            modalContent: <><p><FormattedMessage id="worksContent5_1"/></p>
                <p><FormattedMessage id="worksContent5_2"/></p>
                <p><FormattedMessage id="worksContent5_3"/></p></>,
            modalImgSrc: [FlipperzImg0, FlipperzImg1],
            type: ['NON-DL']
        }
    ]

    function AnimationActivate() {
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
            if (!isAnimation) {
                elem.addClass('trigger').addClass('animated').addClass(animationClass);
                setTimeout(() => {
                    elem.removeClass('trigger').removeClass('animated').removeClass(animationClass)
                    mixer = mixitup($('#test-row'), {
                        selectors: {
                            target: '.mix'
                        },
                        animation: {
                            duration: 300
                        }
                    })
                }, 2000);
            }
        })
        setIsAnimation(true);
    }

    useEffect(() => {
    }, [])

    return (
        <section id="works" style={{ background: '#f5f5f5' }}>
            <div className="works container flex">
                {/* <TitleComponent title="works" /> */}
                <CustomWaypoint elemId="works-waypoint-1">
                    <div className="trigger works-tabs-container" trigger="fadeIn" id="works-waypoint-1">
                        <div className="flex works-tabs-item-container">
                            {tabs.map((tab, ind) => {
                                return <div key={tab + ind} className={"works-tab-item" + (currentTab === tab ? ' active' : '')} data-filter={tab === 'ALL' ? '.mix' : '.' + tab}
                                    onClick={() => {
                                        setCurrentTab(tab)
                                    }}><FormattedMessage id={tab}/></div>
                            })}
                        </div>
                    </div>
                </CustomWaypoint>
                <Waypoint bottomOffset="350px" onEnter={() => {
                    AnimationActivate();
                }} />
                <div className="works-item-container">
                    <Row className="works-items-row-container" justify="center" id="test-row">
                        {items.map((item, ind) => {
                            const imgId = 'card-img-' + (2 + ind);
                            const textId = 'card-text-' + (2 + ind);
                            const btnId = 'card-btn-' + (2 + ind);
                            const { title, modalTitle, modalSubTitle, modalImgSrc, modalContent, type } = item;
                            return <Col xs={24} sm={12} md={12} lg={8} key={'card' + ind} data-my-order="1"
                                className={"mix flex works-items-col-container " + type.join(' ')} trigger="slide-in-bottom" id={"works-waypoint-" + (2 + ind)} trigger-delay={`${(ind / 10) + 0.2}s`}>
                                <div className="works-items-card-container"
                                    onMouseOver={e => {
                                        document.getElementById(imgId).style.opacity = 0;
                                        document.getElementById(textId).style.opacity = 1;
                                        document.getElementById(textId).style.top = '80px';
                                        document.getElementById(btnId).style.opacity = 1;
                                        document.getElementById(btnId).style.bottom = '50px';
                                    }}
                                    onMouseLeave={e => {
                                        document.getElementById(imgId).style.opacity = 1;
                                        document.getElementById(textId).style.opacity = 0;
                                        document.getElementById(textId).style.top = 0;
                                        document.getElementById(btnId).style.opacity = 0;
                                        document.getElementById(btnId).style.bottom = 0;
                                    }}>
                                    <div className="works-items-card-img" id={imgId} style={{ background: `url(${modalImgSrc[0]}) center center/cover` }} />
                                    <div className="works-items-card-text" id={textId}>
                                        <div style={{ fontSize: '16pt' }}>
                                            {title}
                                        </div>
                                        <span style={{ color: '#d3452c' }}>
                                            {type.map((t, tInd) => '#' + formatMessage({id: t}) + ' ')}
                                        </span>
                                    </div>
                                    <button className="works-items-card-btn" id={btnId} onClick={() => {
                                        setModalOpen(ind);
                                    }}>
                                        LEARN MORE
                                    </button>
                                </div>
                                <WorksModal modalOpen={modalOpen === ind} onCancel={() => {
                                    setModalOpen(-1);
                                }} modalTitle={modalTitle} modalImgSrc={modalImgSrc} modalSubTitle={modalSubTitle} modalContent={modalContent} />
                            </Col>
                        })}
                    </Row>
                </div>
            </div>
        </section >
    )
}

export default Works;
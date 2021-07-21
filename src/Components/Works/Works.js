import { Row, Col, Modal } from 'antd';
import React, { useState } from 'react';
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


const Works = props => {
    const tabs = ['ALL', 'VISION', 'NLP', 'NON-DL'];
    const [currentTab, setCurrentTab] = useState(tabs[0]);
    const [modalOpen, setModalOpen] = useState(-1);
    var id = 0;
    const items = [
        {
            title: 'Table Recognizer',
            modalTitle: 'Table Recognizer',
            modalSubTitle: '(2021)',
            modalContent: <><p>- For process unstructured document stably, we need to extract the maximum information from raw data.</p>
            <p>- Therefore, develop a model that can recognize the form of a table and convert it into a defined data structure (details cannot be mentioned because this development is the property of Lomin Inc.)</p>
            <p>- The table was recognized with a deep learning model, and then refined using traditional computer vision algorithms.</p></>,
            modalImgSrc: [tableRecognizerImg0],
            type : ['VISION']
        }, {
            title: 'Korean License Plate Recognition',
            modalTitle: 'Korean License Plate Recognition',
            modalSubTitle: '(2020)',
            modalContent: <><p>- System consisting of Vehicle Detection (YOLACT) + License Plate Detection (WPOD-NET) + License Plate Recognition (LPRNet)</p>
            <p>- Since license plate data is difficult to collect due to personal information issues, we generate synthesis data using GANs</p>
            <p>- Checkout My Master's Thesis!<br/><a href="https://library.korea.ac.kr/detail/?cid=CAT000046074034&ctype=t">딥러닝을 이용한 종단 간 차량 번호판 인식 알고리즘 및 시스템 구현</a></p></>,
            modalImgSrc: [KoreanLicensePlateRecognitionImg0, KoreanLicensePlateRecognitionImg1, KoreanLicensePlateRecognitionImg2, KoreanLicensePlateRecognitionImg3],
            type : ['VISION']
        }, {
            title: 'Dubai Sign Language Translation System',
            modalTitle: 'Dubai Sign Language Translation System',
            modalSubTitle: '(2020)',
            modalContent: <><p>- Sign language recognition system to be installed in Dubai World Expo Kiosk (Failed due to Corona 19)</p>
            <p>- Improved speed by lightening + parallelizing the system used in the previous project {'<'}Su:Jebi{'>'}</p>
            <p>- Optimize execution time by allowing Openpose and video recording to operate in parallel with Multi-Process</p>
            <p>- Checkout <a href="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d1aa0d70-abfd-42e8-b448-ac43939eaf40/dubai_sign_language_translate_demo.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210719T095247Z&X-Amz-Expires=86400&X-Amz-Signature=cac00d6fca662f5220ee053783098196f23c6936b4132155eec76d953a69174f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22dubai_sign_language_translate_demo.mp4%22">Demo Video!↗</a></p></>,
            modalImgSrc: [DubaiSignLanguageTranslationSystemImg0, DubaiSignLanguageTranslationSystemImg1],
            type : ['VISION', 'NLP']
        },
        {
            title: 'Korean Sign Language Translation System <Su:Jebi>',
            modalTitle: 'Korean Sign Language Translation System <Su:Jebi>',
            modalSubTitle: '(2019)',
            modalContent: <><p>- Development of 'Sign Language Translation Application {'<'}Su:Jebi{'>'}' using BeeAI, an AI framework of ETRI (Android)</p>
            <p>- Using human keypoints information extracted by <a href="https://github.com/CMU-Perceptual-Computing-Lab/openpose">Openpose</a> to build sign language embedding</p>
            <p>- Since there is no public sign language dataset in Korea, we build our own korean sign language-text parallel dataset (216,985 Frames, 365 sentences)</p>
            <p>- Win the <a href="https://www.msit.go.kr/index.do">Ministry of Science and ICT</a> Award (Grand Prize)</p></>,
            modalImgSrc: [KoreanSignLanguageTranslationSystemImg0, KoreanSignLanguageTranslationSystemImg1, KoreanSignLanguageTranslationSystemImg2, KoreanSignLanguageTranslationSystemImg3],
            type : ['VISION', 'NLP']
        }, {
            title: 'Flipperz',
            modalTitle: 'Flipperz',
            modalSubTitle: '(2017)',
            modalContent: <><p>- An application that flips multiple images at once (iOS)</p>
            <p>- Indirectly solves the problem that images(especially selfies) are stored in reverse when shooting with the iPhone front camera</p>
            <p>- Currently in Deactivate state due to expiration of Apple Developer contract</p></>,
            modalImgSrc: [FlipperzImg0, FlipperzImg1],
            type : ['NON-DL']
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
            elem.addClass('trigger').addClass('animated');
            elem.addClass('trigger').addClass(animationClass);
        })
    }
    return (
        <section id="works" style={{ background: '#f5f5f5' }}>
            <div className="works container flex">
                {/* <TitleComponent title="works" /> */}
                <CustomWaypoint elemId="works-waypoint-1">
                    <div className="trigger works-tabs-container" trigger="fadeIn" id="works-waypoint-1">
                        <div className="flex works-tabs-item-container">
                            {tabs.map((tab, ind) => {
                                return <div key={tab + ind} className={"works-tab-item" + (currentTab === tab ? ' active' : '')} onClick={() => {
                                    setCurrentTab('')
                                    setTimeout(() => {
                                        setCurrentTab(tab)                                        
                                    }, 10);
                                }}>{tab}</div>
                            })}
                        </div>
                    </div>
                </CustomWaypoint>
                <Waypoint bottomOffset="350px" onEnter={() => {
                    AnimationActivate();
                }} />
                <div className="works-item-container">
                    <Row className="works-items-row-container" justify="center">
                        {items.map((item, ind) => {
                            const imgId = 'card-img-' + (2 + ind);
                            const textId = 'card-text-' + (2 + ind);
                            const btnId = 'card-btn-' + (2 + ind);
                            const {title, modalTitle, modalSubTitle, modalImgSrc, modalContent, type} = item;
                            return <Col xs={24} sm={12} md={12} lg={8} key={'card' + ind} className="trigger flex works-items-col-container" trigger="slide-in-bottom" id={"works-waypoint-" + (2 + ind)} trigger-delay={`${(ind / 10) + 0.2}s`}
                            style={{display: (currentTab === 'ALL' || type.find(t => t === currentTab)) ? 'block' : 'none'}}>
                                <div className="works-items-card-container"
                                    onMouseEnter={e => {
                                        document.getElementById(imgId).style.opacity = 0;
                                        document.getElementById(textId).style.opacity = 1;
                                        document.getElementById(textId).style.top = '80px';
                                        document.getElementById(btnId).style.opacity = 1;
                                        document.getElementById(btnId).style.bottom = '50px';
                                    }} onTouchEnd={e => {
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
                                    <div className="works-items-card-img" id={imgId} style={{background: `url(${modalImgSrc[0]}) center center/cover`}} />
                                    <div className="works-items-card-text" id={textId}>
                                        <div style={{ fontSize: '16pt' }}>
                                            {title}
                                        </div>
                                        <span style={{ color: '#d3452c' }}>
                                            {type.map((t, tInd) => '#' + t + ' ')}
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
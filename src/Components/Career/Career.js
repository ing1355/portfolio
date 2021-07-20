import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { LoadingOutlined } from '@ant-design/icons';
import '../../css/Career.css';
import honorIcon from '../../assets/honorIcon.png';
import aiffelLogo from '../../assets/logos/aiffel.png'
import lominLogo from '../../assets/logos/lomin.png'
import koreaUnivLogo from '../../assets/logos/korea_univ.png'
import naverLogo from '../../assets/logos/naver_cloud_platform.png'
import beeaiLogo from '../../assets/logos/beeai.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons'

const Career = props => {
    function getIconByType(type) {
        switch (type) {
            case 'work':
                return <FontAwesomeIcon icon={faBriefcase} className="timeline-center-icon" />
            case 'education':
                return <FontAwesomeIcon icon={faGraduationCap} className="timeline-center-icon" />
            case 'honor':
                return <img src={honorIcon} width="45px" height="45px" />
            default:
                break;
        }
    }

    function getIconColorByType(type) {
        switch (type) {
            case 'work':
                return 'rgb(23,157,46)'
            case 'education':
                return 'rgb(210,25,0)'
            case 'honor':
                return '#cc7911'
            default:
                break;
        }
    }
    const items = [
        {
            type: 'work',
            title: 'CV Researcher',
            linkText: <a href="https://www.lomin.ai">Lomin Inc.</a>,
            subscription: 'OCR, Document Classification, Table Recognition',
            term: 'March 2021 ~',
            logo: lominLogo
        },
        {
            type: 'education',
            title: 'Master of Science',
            linkText: <a href="https://icps.korea.ac.kr">Korea University (ICPS)</a>,
            subscription: 'Sign Language Translation, Vehicle Detection & License Plate Recognition',
            term: 'March 2019 ~ February 2021',
            logo: koreaUnivLogo
        },
        {
            type: 'work',
            title: 'Content Creator',
            linkText: <><a href="https://aiffel.io">AIFFEL</a> of <a href="https://modulabs.co.kr">MODULABS</a></>,
            subscription: <><span>Create Lecture &amp; Project Contents About NLP (GOING-DEEPER STAGE)</span><br />
                <span>Language Modeling, Sequence to Sequence, Attention, Transformer, Chatbot</span></>,
            term: 'February 2020 ~ July 2020',
            logo: aiffelLogo
        },
        {
            type: 'work',
            title: 'AI Service Reviewer',
            linkText: <a href="https://www.ncloud.com">NAVER CLOUD PLATFORM</a>,
            subscription: <><span>Write Reviews for AI Service provided by NCP</span><br />
                <span>OCR, Speech to Text , Text to Speech, Machine Translation</span></>,
            term: 'December 2019 ~ May 2020',
            logo: naverLogo
        },
        {
            type: 'honor',
            title: <>Grand Prize at<br/>"KSB AI Framework Contest"</>,
            linkText: <><a href="https://www.msit.go.kr/index.do">Ministry of Science and ICT</a> Award</>,
            subscription: <><span>Implement Korean Sign Language Translation System for Deaf</span><br />
                <span>Human Pose Estimation, Machine Translation, Transformer</span><br />
                <span><a href="http://biz.heraldcorp.com/view.php?ud=20191023000641">Article 1</a>&nbsp;
                <a href={`https://www.edaily.co.kr/news/read?newsId=03650646622655872&mediaCodeNo=257`}>Article 2</a></span></>,
            term: 'October 2019',
            logo: beeaiLogo
        },
    ]
    return (
        <section id="career">
            <VerticalTimeline>
                {
                    items.map(item => {
                        const { type, title, linkText, subscription, term, logo } = item;
                        return <VerticalTimelineElement
                            position="right"
                            contentStyle={{ borderTop: '3px solid ' + getIconColorByType(type), background: '#fff', color: '#fff', fontFamily: 'KoPub Dotum', fontWeight: 'bold', padding: '1.5em 2em'}}
                            contentArrowStyle={{ borderRight: '7px solid  white', top: '16px' }}
                            date={term}
                            iconStyle={{ background: getIconColorByType(type), color: '#fff' }}
                            icon={getIconByType(type)}
                            dateClassName="timeline-date-text"
                        >
                            <div className="timeline-logo-img">
                                <img src={logo} style={{height:'auto', width:'100%'}}/>
                            </div>
                            <div className="timeline-title-text">
                                {title}
                            </div>
                            <div className="timeline-link-text">
                                {linkText}
                            </div>
                            <div className="timeline-content-text">
                                {subscription}
                            </div>
                            <div className="timeline-term-text">
                                {term}
                            </div>
                        </VerticalTimelineElement>

                    })
                }
            </VerticalTimeline>
        </section>
    )
}

export default Career;
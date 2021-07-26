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
import { FormattedMessage, useIntl } from 'react-intl';

const Career = props => {
    const {formatMessage} = useIntl();
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
            title: <FormattedMessage id="careerTitle1"/>,
            linkText: <a href="https://www.lomin.ai"><u><FormattedMessage id="careerDepartment1"/></u></a>,
            subscription: <FormattedMessage id="careerDescription1"/>,
            term: <FormattedMessage id="careerDate1"/>,
            logo: lominLogo
        },
        {
            type: 'education',
            title: <FormattedMessage id="careerTitle2"/>,
            linkText: <a href="https://icps.korea.ac.kr"><u><FormattedMessage id="careerDepartment2"/></u></a>,
            subscription: <FormattedMessage id="careerDescription2"/>,
            term: <FormattedMessage id="careerDate2"/>,
            logo: koreaUnivLogo
        },
        {
            type: 'work',
            title: <FormattedMessage id="careerTitle3"/>,
            linkText: <><a href={formatMessage({id:"careerLink1"})}><u><FormattedMessage id="careerDepartment3_1"/></u></a><FormattedMessage id="careerDepartment3_2"/><a href={formatMessage({id:"careerLink2"})}><u><FormattedMessage id="careerDepartment3_3"/></u></a></>,
            subscription: <><span><b><FormattedMessage id="careerDepartment3_4"/></b></span><br /><br />
                <span><FormattedMessage id="careerDescription3"/></span></>,
            term: <FormattedMessage id="careerDate3"/>,
            logo: aiffelLogo
        },
        {
            type: 'work',
            title: <FormattedMessage id="careerTitle4"/>,
            linkText: <a href="https://www.ncloud.com"><u><FormattedMessage id="careerDepartment4_1"/></u></a>,
            subscription: <><span><b><FormattedMessage id="careerDepartment4_2"/></b></span><br /><br />
                <span><FormattedMessage id="careerDescription4"/></span></>,
            term: <FormattedMessage id="careerDate4"/>,
            logo: naverLogo
        },
        {
            type: 'honor',
            title: <><FormattedMessage id="careerTitle5_1"/><br/><FormattedMessage id="careerTitle5_2"/></>,
            linkText: <><a href="https://www.msit.go.kr/index.do"><u><FormattedMessage id="careerDepartment5_1"/></u></a><FormattedMessage id="careerDepartment5_2"/></>,
            subscription: <><span><b><FormattedMessage id="careerDepartment5_3"/></b></span><br /><br />
                <span><FormattedMessage id="careerDescription5"/></span><br /><br />
                <span><a href="http://biz.heraldcorp.com/view.php?ud=20191023000641">&lt;<FormattedMessage id="careerArticle"/> 1&gt;</a>&nbsp;
                <a href={`https://www.edaily.co.kr/news/read?newsId=03650646622655872&mediaCodeNo=257`}>&lt;<FormattedMessage id="careerArticle"/> 2&gt;</a></span>
                </>,
            term: <FormattedMessage id="careerDate5"/>,
            logo: beeaiLogo
        },
    ]
    return (
        <section id="career">
            <VerticalTimeline>
                {
                    items.map((item,ind) => {
                        const { type, title, linkText, subscription, term, logo } = item;
                        return <VerticalTimelineElement
                            position={ind % 2 === 0 ? "left" : 'right'}
                            contentStyle={{ borderTop: '4px solid ' + getIconColorByType(type), background: '#fff', color: '#fff', fontFamily: 'KoPub Dotum', fontWeight: 'bold', padding: '1.5em 2em'}}
                            contentArrowStyle={{ borderRight: '7px solid  white', top: '16px' }}
                            // date={term}
                            iconStyle={{ background: getIconColorByType(type), color: '#fff', filter:'fliph()' }}
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
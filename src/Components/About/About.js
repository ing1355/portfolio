import React from 'react';
import '../../css/About.css';
import { Row, Col } from 'antd';
import TitleComponent from '../TitleComponent';


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
    return (
        <section id="about">
            <div className="about container flex">
                <TitleComponent title="about"/>
                <Row className="about-characteristics-container">
                    <Col span="6" className="about-characteristics-item">
                        <img className="about-characteristics-item-img animated-flipInX"
                            src="https://cdn.pixabay.com/photo/2017/05/13/23/05/emoji-2310895_960_720.png" />
                        <div className="animated-fadeIn">
                            <div className="about-characteristics-item-text">
                                FAST
                        </div>
                            <div className="about-characteristics-item-subtext">
                                Fast load times and lag free interaction, my highest priority.
                        </div>
                        </div>
                    </Col>
                    <Col span="6" className="about-characteristics-item">
                        <img className="about-characteristics-item-img animated-flipInX delay1" src="https://cdn.pixabay.com/photo/2017/05/13/23/05/emoji-2310895_960_720.png" />
                        <div className="animated-fadeIn delay1">
                            <div className="about-characteristics-item-text">
                                Responsive
                        </div>
                            <div className="about-characteristics-item-subtext">
                                My layouts will work on any device, big or small.
                        </div>
                        </div>
                    </Col>
                    <Col span="6" className="about-characteristics-item">
                        <img className="about-characteristics-item-img animated-flipInX delay2" src="https://cdn.pixabay.com/photo/2017/05/13/23/05/emoji-2310895_960_720.png" />
                        <div className="animated-fadeIn delay2">
                            <div className="about-characteristics-item-text">
                                Intuitive
                        </div>
                            <div className="about-characteristics-item-subtext">
                                Strong preference for easy to use, intuitive UX/UI.
                        </div>
                        </div>
                    </Col>
                    <Col span="6" className="about-characteristics-item">
                        <img className="about-characteristics-item-img animated-flipInX delay3" src="https://cdn.pixabay.com/photo/2017/05/13/23/05/emoji-2310895_960_720.png" />
                        <div className="animated-fadeIn delay3">
                            <div className="about-characteristics-item-text">
                                Dynamic
                        </div>
                            <div className="about-characteristics-item-subtext">
                                Websites don't have to be static, I love making pages come to life.
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="about-profile-container" gutter={[32, 0]}>
                    <Col span="12" className="animated-slide-in-left">
                        <img className="about-profile-img" src="https://cdn.pixabay.com/photo/2017/05/13/23/05/emoji-2310895_960_720.png" />
                        <div>
                            Who's this guy?
                            </div>
                        <div>
                            I'm a Front-End Developer for ChowNow in Los Angeles, CA.
                            I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
                            Let's make something special.
                            </div>
                    </Col>
                    <Col span="12" className="animated-slide-in-right about-ability-container">
                        {Object.keys(abilities).map(ab => {
                            return <div className="ability flex">
                                <div className="ability-bar" style={{width:abilities[ab]}}>
                                    <div className="ability-name flex">
                                        {ab}
                                    </div>
                                </div>
                                <span className="ability-percentage">
                                    {abilities[ab]}
                            </span>
                            </div>
                        })}
                        {tags.map(tag => {
                            return <div className="ability-tag">{tag}</div>
                        })}
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default About;
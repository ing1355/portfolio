import React from 'react';
import '../../css/Contact.css'
import TitleComponent from '../TitleComponent';
import { Form, Input, Button, message } from 'antd';
import $ from 'jquery';
import CustomWaypoint from '../CustomWaypoint';

const { TextArea } = Input;

const Contact = props => {
    return (
        <section id="contact" style={{ position: 'relative' }}>
            <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" className="svgcolor-light" style={{ position: 'absolute', top: 0, left: 0 }}>
                <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"></path>
            </svg>
            <div className="contact container flex">
                <TitleComponent title="contact" />
                <CustomWaypoint elemId="contact-waypoint-1">
                    <div className="contact-title-text trigger" trigger="slide-in-right" id="contact-waypoint-1">
                        Have a question or want to work together?
                    </div>
                </CustomWaypoint>
                <CustomWaypoint elemId="contact-waypoint-2">
                    <div className="contact-input-container trigger" trigger="popIn" id="contact-waypoint-2">

                        <Form onFinish={values => {
                            const { name, email, msg } = values;
                            $.ajax({
                                url: 'https://formspree.io/f/mlealapy',
                                method: 'POST',
                                data: {
                                    message: `${name}님께서 보낸 메세지.\nEmail : ${email}\n내용 : ${msg}`
                                },
                                dataType: 'json'
                            }).done(function (response) {
                                if (response.ok) {
                                    message.success('이메일 발송에 성공하였습니다.')
                                } else {
                                    message.error('이메일 발송에 실패하였습니다.')
                                }
                            });
                        }}>
                            <Form.Item name="name">
                                <Input placeholder="Name" />
                            </Form.Item>
                            <Form.Item name="email">
                                <Input placeholder="Enter Email" type="email" />
                            </Form.Item>
                            <Form.Item name="msg">
                                <TextArea placeholder="Your Message" style={{ minHeight: '150px' }} />
                            </Form.Item>
                            <button type="submit" className="btn-submit">
                                SUBMIT
                            </button>
                        </Form>
                    </div>
                </CustomWaypoint>
            </div>
        </section>
    )
}

export default Contact;
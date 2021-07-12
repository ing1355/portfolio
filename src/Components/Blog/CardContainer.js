import { Card, Row, Col } from 'antd';
import React, { useEffect, useState } from 'react';

const CardContainer = ({ span, children, url, id, delay, imageSrc, title, tags, profileImage }) => {
    const bodyStyle = span <= 8 ? {
        bottom: 0
    } : {
        top: 0
    }

    return (
        <>
            <Col xs={24} sm={span > 12 ? 24 : 12} md={span > 12 ? 24 : 12} lg={span > 8 ? 12 : span} xl={span} className="blog-col-card-container trigger" id={id} trigger="fadeIn" trigger-delay={delay}>
                <Card className="blog-card" bodyStyle={{ ...bodyStyle, height: '100%' }}>
                    <img src={imageSrc} className="blog-card-img" width="100%" height="100%" />
                    <div className="blog-card-body-contents-container">
                        <div className="blog-card-body-contents">
                            <Row gutter={[16, 0]}>
                                {
                                    tags.map(tag =>
                                        <Col className="blog-card-tag-container">
                                            {tag.name}
                                        </Col>)
                                }
                            </Row>
                            <div className="blog-card-title">
                                {title}
                            </div>
                        </div>
                        <a href={url}>
                            <div className="blog-card-footer">
                                <div className="blog-card-footer-readmore">
                                    READ MORE
                                </div>
                                <div className="blog-card-footer-profile">
                                    <img src={profileImage} width="100%" height="100%" />
                                </div>
                            </div>
                        </a>
                    </div>
                    {children}
                </Card>
            </Col>
        </>
    )
}

export default CardContainer;
import { Card, Col } from 'antd';
import React, { useEffect, useState } from 'react';

const CardContainer = ({ span, children, url, id, delay, imageSrc, title }) => {
    const bodyStyle = span <= 8 ? {
        bottom: 0
    } : {
        top: 0
    }

    // function detectBrTag(str) {
    //     var _str = [str];
    //     if (str) {
    //         const ind = str.indexOf('(');
    //         if (ind === -1) return;
    //         _str = [str.slice(0, str.indexOf('(')), <br />, str.slice(ind, -1)];
    //     }
    //     console.log(_str)
    //     return _str
    // }

    return (
        <>
            <Col xs={24} sm={span > 12 ? 24 : 12} md={span > 12 ? 24 : 12} lg={span > 8 ? 12 : span} xl={span} className="blog-col-card-container trigger" id={id} trigger="fadeIn" trigger-delay={delay}>
                <a href={url}>
                    <Card className="blog-card" bodyStyle={{...bodyStyle, height:'100%' ,backgroundImage: `url(${imageSrc})`}}>
                        {children}
                    </Card>
                    <div className="blog-card-title">
                        {title}
                    </div>
                </a>
            </Col>
        </>
    )
}

export default CardContainer;
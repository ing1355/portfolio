import { Card, Row, Col } from 'antd';
import React, { useEffect, useState } from 'react';
import TitleComponent from '../TitleComponent';
import '../../css/Blog.css'
import CardContainer from './CardContainer';
import { Waypoint } from 'react-waypoint';
import $ from 'jquery';
import GhostContentAPI from '@tryghost/content-api';

const Blog = props => {
    const rowGutter = [16, 16];
    const [blogDatas, setBlogDatas] = useState([]);

    function animationActivate() {
        blogDatas.map((data, ind) => {
            var elem = $('#blog-waypoint-' + ind),
                animationClass = elem.attr('trigger'),
                animationDelay = elem.attr('trigger-delay');
            if (isElementInViewport(elem[0])) {
                if (animationDelay) {
                    elem.css({
                        '-webkit-animation-delay': animationDelay,
                        '-moz-animation-delay': animationDelay,
                        'animation-delay': animationDelay
                    });
                }
                elem.addClass('trigger').addClass('animated');
                elem.addClass('trigger').addClass(animationClass);
            }
        })
    }

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    useEffect(() => {
        const api = new GhostContentAPI({
            url: 'https://sungwon.blog',
            key: '134babcda16ad465f5f7ae624b',
            version: "v3"
        });

        api.posts
            .browse({ limit: 5, filter: 'featured:true', include: 'tags,authors' })
            .then((posts) => {
                console.log(posts);
                setBlogDatas(posts);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [])

    useEffect(() => {
        if (blogDatas.length) {
            animationActivate();
        }
    }, [blogDatas])

    return (
        <section id="blog">
            <div className="blog container flex">
                <TitleComponent title="blog" />
                <Waypoint bottomOffset="300px" onEnter={e => {
                    animationActivate();
                }} />
                <Row className="blog-row-container" gutter={rowGutter}>
                    {
                        blogDatas.map((data, ind) => {
                            const { title, feature_image, url, tags, authors } = data;
                            return (
                                <CardContainer span={6} title={title} imageSrc={feature_image} url={url} id={"blog-waypoint-" + ind} delay={`.${ind}s`} key={'blog-card-' + ind} tags={tags} profileImage={authors[0].profile_image}>

                                </CardContainer>
                            )
                        })
                    }
                </Row>
            </div>
            <div className="btn-load-more">
                Load more
            </div>
        </section>
    )
}

export default Blog;
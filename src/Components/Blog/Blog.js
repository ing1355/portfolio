import { Card, Row, Col, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import TitleComponent from '../TitleComponent';
import '../../css/Blog.css'
import CardContainer from './CardContainer';
import { Waypoint } from 'react-waypoint';
import $ from 'jquery';
import GhostContentAPI from '@tryghost/content-api';
import { LoadingOutlined } from '@ant-design/icons';
import AnimationActivate from '../Functions.js/AnimationActivate';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Blog = props => {
    const rowGutter = [16, 16];
    const [blogDatas, setBlogDatas] = useState([]);
    const [hoverElement, setHoverElement] = useState(null);
    const [loading, setLoading] = useState(false);
    const [loadedMore, setLoadedMore] = useState(false);

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    useEffect(() => {
        const api = new GhostContentAPI({
            url: 'https://sungwon.blog',
            key: '134babcda16ad465f5f7ae624b',
            version: "v3"
        });

        api.posts
            .browse({ limit: 4, filter: 'featured:true', include: 'tags,authors' })
            .then((posts) => {
                setBlogDatas(posts);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [])

    useEffect(() => {
        if (blogDatas.length) {
            if (isElementInViewport($('#blog-waypoint-0')[0])) {
                blogDatas.map((data, ind) => {
                    AnimationActivate('blog-waypoint-' + ind)
                })
            }
        }
    }, [blogDatas])

    return (
        <section id="blog">
            <div className="blog container flex">
                {/* <TitleComponent title="blog" /> */}
                <Waypoint bottomOffset="300px" onEnter={e => {
                    blogDatas.map((data, ind) => {
                        AnimationActivate('blog-waypoint-' + ind)
                    })
                }} />
                <Row className="blog-row-container" gutter={rowGutter}>
                    {
                        blogDatas.map((data, ind) => {
                            const { title, feature_image, url, tags, authors } = data;
                            return (
                                <CardContainer span={6} title={title} imageSrc={feature_image} url={url} id={"blog-waypoint-" + ind} delay={`.${ind}s`} elemId={'blog-card-' + ind} tags={tags} profileImage={authors[0].profile_image} hoverEvent={(key) => {
                                    setHoverElement(key)
                                }} hoverElement={hoverElement}>

                                </CardContainer>
                            )
                        })
                    }
                </Row>
            </div>
            {(!loadedMore || loading) && <div className="btn-load-more" onClick={() => {
                setLoading(true);
                const api = new GhostContentAPI({
                    url: 'https://sungwon.blog',
                    key: '134babcda16ad465f5f7ae624b',
                    version: "v3"
                });

                api.posts
                    .browse({ filter: 'featured:true', include: 'tags,authors' })
                    .then((posts) => {
                        setLoading(false);
                        setLoadedMore(true);
                        setBlogDatas(posts);
                    })
                    .catch((err) => {
                        console.error(err);
                    });
            }}>
                Load more
                {loading && <Spin indicator={antIcon} style={{ marginLeft: '16px' }} />}
            </div>}
        </section>
    )
}

export default Blog;
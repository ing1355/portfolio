import React from 'react';
import TitleComponent from '../TitleComponent';

const Blog = props => {
    return (
        <section id="blog">
            <div className="blog container flex">
                <TitleComponent title="blog"/>
            </div>
        </section>
    )
}

export default Blog;
import React from 'react';

const TitleComponent = ({title}) => {
    return (
        <>
            <div className={title + " title animated-slide-in-left"}>
                {title.charAt(0).toUpperCase() + title.slice(1)}
            </div>
            <div className={title + " title-bar animated-slide-in-left"}/>
        </>
    )
}

export default TitleComponent;
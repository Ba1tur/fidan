import React from 'react';

import './Cover.css'

const Cover = ({backgroundImg, text, visible}) => {
    return (
        <section
            id={'cover'}
            style={{backgroundImage: `url(${backgroundImg})`}}
        >
            <div className="cover__container">
                {visible && <h1 className={'cover__title'}>{text}</h1>}
            </div>
        </section>
    );
};

export default Cover;
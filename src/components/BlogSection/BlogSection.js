import React from 'react';
import {blogData} from "../../utils/BlogData";

import arrow from "../../assets/image/icons/blackLinkArrow.svg"
import whiteArrow from "../../assets/image/icons/linkArrow.svg"
import './BlogSection.css'

const BlogSection = () => {
    return (
        <section id={'blog'}>
            <div className={'container blog__container'}>
                <div className={'blog__title'}>
                    <h2>Читайте наш блог</h2>
                    <h4>Новости, советы</h4>
                </div>
                <div className="row">
                    {blogData.slice(0, 4)?.map(el => {
                        return (
                            <div key={el.id} className={'col-2'}>
                                <div className="blog__box">
                                    <img src={el.img} alt="blog"/>
                                    <h4>{el.title}</h4>
                                    <div className={'blog__box-desc'}>
                                        <p>{el.description}</p>
                                        <img src={arrow} alt="icon"/>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={'blog__button'}>
                    <button>
                        Читать все
                        <img src={whiteArrow} alt="icon"/>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
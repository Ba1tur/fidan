import React from 'react';
import {blogData} from "../../utils/BlogData";
import arrow from "../../assets/image/icons/blackLinkArrow.svg";

const BlogFeed = () => {
    return (
        <section id={'blog'}>
            <div className={'container blog__container'}>
                <div className="row">
                    {blogData?.map(el => {
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
            </div>
        </section>
    );
};

export default BlogFeed;
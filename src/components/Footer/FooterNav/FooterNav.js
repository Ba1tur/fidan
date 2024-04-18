import React from 'react';
import {footerNavData} from "../../../utils/FooterNavData";

const FooterNav = () => {
    return (
        <>
            <div className="col-5">
                <div className="footer__box">
                    {footerNavData?.slice(0, 5).map(el => {
                        return (
                            <p key={el.id}>{el.title}</p>
                        )
                    })}
                </div>
            </div>
            <div className="col-5">
                <div className="footer__box">
                    {footerNavData?.slice(5, 10).map(el => {
                        return (
                            <p key={el.id}>{el.title}</p>
                        )
                    })}
                </div>
            </div>
            <div className="col-5">
                <div className="footer__box">
                    {footerNavData?.slice(10, 15).map(el => {
                        return (
                            <p key={el.id}>{el.title}</p>
                        )
                    })}
                </div>
            </div>
        </>
    );
};

export default FooterNav;
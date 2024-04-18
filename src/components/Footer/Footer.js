import React from 'react';
import FooterNav from "./FooterNav/FooterNav";

import {footerLinksIcons} from "../../utils/FooterNavData";
import footerLogo from '../../assets/image/footerLogo.svg'
import phone from '../../assets/image/icons/phone-black.svg'
import './Footer.css'
const Footer = () => {
    return (
        <footer id={'footer'}>
            <div className="footer__container">
                <div className="row">
                    <div className="col-5">
                        <div className="footer__box-logo">
                            <img src={footerLogo} alt=""/>
                        </div>
                    </div>
                    <FooterNav/>
                    <div className="col-5">
                        <div className="footer__box-contacts">
                            <div className={'footer__box-contacts-title'}>
                                <h3>Контакты</h3>
                                <div className={'footer__box-contacts-title__contacts'}>
                                    <img src={phone} alt="icon"/>
                                    <p>+996 502 472 760</p>
                                </div>
                            </div>
                            <div className={'footer__box-contacts__links'}>
                                {footerLinksIcons?.map(el => {
                                    return (
                                        <img key={el.id} src={el.img} alt="icon"/>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'footer-end'}>
                <p>© 2022 Fidan Global. Все права защищены.</p>
            </div>
        </footer>
    );
};

export default Footer;
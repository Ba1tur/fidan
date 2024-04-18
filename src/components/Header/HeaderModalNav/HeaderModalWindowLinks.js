import React from 'react';

import {headerNavIcon} from "../../../utils/HeaderNavigationData";

import phone from "../../../assets/image/icons/phone.svg";
import download from "../../../assets/image/icons/grid.svg";

const HeaderModalWindowLinks = () => {
    return (
        <div className={'header__modal-window__links'}>
            <div className={'header__modal-window__links-box'}>
                <img src={phone} alt="icon"/>
                <p>+996 502 472 760</p>
            </div>
            <div className={'header__modal-window__links-box'}>
                <img src={download} alt="icon"/>
                <p>Скачать каталог</p>
            </div>
            <div className="header__modal-window__links-box">
                {headerNavIcon?.map((el, index) => {
                    return (
                        <img
                            key={index}
                            src={el.icon}
                            alt="icon"/>
                    )
                })}
            </div>
        </div>
    );
};

export default HeaderModalWindowLinks;
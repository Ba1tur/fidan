import React from 'react';

import HeaderModalWindowLinks from "./HeaderModalWindowLinks";

import HeaderModalNavList from "./HeaderModalNavList";

import close from "../../../assets/image/icons/close.svg"
import './HeaderModalNav.css'

const HeaderModalNav = ({handleVisibilityChange}) => {
    return (
        <div
            className={'header__modal-window'}
            onClick={handleVisibilityChange}
        >
            <div
                className={'header__modal-window__container'}
                onClick={(event) => event.stopPropagation()}
            >
                <nav className={'header__nav'}>
                    <HeaderModalNavList/>
                    <HeaderModalWindowLinks/>
                </nav>
                <div
                    className={'modal-close__box'}
                    onClick={handleVisibilityChange}
                >
                    <img src={close} alt="icon"/>
                </div>
            </div>
        </div>
    );
};

export default HeaderModalNav;
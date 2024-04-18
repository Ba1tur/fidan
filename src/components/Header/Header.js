import React, {useEffect, useState} from 'react';

import HeaderModalNav from "./HeaderModalNav/HeaderModalNav";
import Cover from "../Cover/Cover";

import logo from '../../assets/image/Logo.svg'
import phone from '../../assets/image/icons/phone.svg'
import './Header.css'

const Header = ({background, title}) => {
    const [isVisible, setIsVisible] = useState(false)

    const handleVisibilityChange = () => {
        setIsVisible(!isVisible)

    }

    useEffect(() => {
        document.body.style.overflow = isVisible ? 'hidden' : 'auto'
    },[isVisible])

    return (
        <>
            <header id={'header'}>
                <div className="header__container">
                    <div className={'header__left'}>
                        <img src={phone} alt="icon"/>
                        <p>+996 502 472 760</p>
                    </div>
                    <div
                        className={'header__right'}
                        onClick={handleVisibilityChange}
                    >
                        <span></span>
                        <span></span>
                        <span className={isVisible?'span-visible third-span':'third-span'}></span>
                    </div>
                </div>

                {isVisible && <HeaderModalNav handleVisibilityChange={handleVisibilityChange}/>}

                <div className={'header-logo__container'}>
                    <div className={'lef-line'}></div>
                    <img src={logo} alt="logo"/>
                    <div className={'right-line'}></div>
                </div>
            </header>
            {
                background && title ?
                    <Cover backgroundImg={background} text={title} visible={!isVisible}/>
                    :null
            }
        </>
    );
};

export default Header;
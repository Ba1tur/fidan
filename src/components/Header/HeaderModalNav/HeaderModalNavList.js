import React from 'react';
import {NavLink} from "react-router-dom";

import {headerNavData} from "../../../utils/HeaderNavigationData";

const HeaderModalNavList = () => {
    return (
        <>
            <ul className={'header__nav-list'}>
                {headerNavData.slice(0, 4)?.map(el => {
                    return (
                        <li key={el.id} className={'header__nav-list__item'}>
                            <NavLink to={el.path}>
                                {el.title}
                                {el.products && <ul className={'item__nav-list'}>
                                    {el.products?.map((product, index) => {
                                        return <li key={index} className={'item__nav-list__item'}>{product}</li>
                                    })}
                                </ul>}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
            <ul className={'header__nav-list'}>
                {headerNavData.slice(4, 10)?.map((el, i) => {
                    return (
                        <li key={el.id} className={'header__nav-list__item'}>
                            <NavLink to={el.path}>
                                {el.title}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </>
    );
};

export default HeaderModalNavList;
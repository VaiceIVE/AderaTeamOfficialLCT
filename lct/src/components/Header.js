import React from "react";
import "../css/style.css";
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import menu from "../image/header/menu.svg";
import account from "../image/header/account.svg";
import support from "../image/header/support.svg";
import logo from "../image/header/logo.svg";
import btn from "../image/project/btn.svg";

function HeaderLoc(props) {
    const location = useLocation();
    if (location.pathname === '/') {
        return(
            <div className="header__row">
                <div className="header__menu">
                    <NavLink to='/'>
                        <img 
                        alt="logo"
                        src={logo}/>
                    </NavLink>
                </div>
                <NavLink to='/app'>
                    <div className="header__btn">
                        <img src={btn}/>
                        Начать работать
                    </div>
                </NavLink>
            </div>
        )
    }else{
        return(
            <div className="header__row">
                <div className="header__menu">
                    <img src={menu}/>
                    <NavLink to='/'>
                        <img src={logo}
                        alt="logo"
                        />
                    </NavLink>
                </div>
                <div className="header__panel">
                    <div className="header__support">
                        <img src={support}
                        alt="support"
                        />
                        Поддержка
                    </div>
                    <div className="header__account">
                        <img src={account}
                        alt="account"
                        />
                        {props.name}
                    </div>
                </div>
            </div>
        )
    }
}

export default function Header(props) {
    return(
        <header className="header">
            <div className="header__content _container">
                <HeaderLoc name={props.name}/>
            </div>
        </header>
    )
}
import React from "react";
import { NavLink } from 'react-router-dom';

import "../../css/style.css";
import arrow from "../../image/landing/arrow.svg";
import bg from "../../image/landing/home-bg.png";

export default function Home() {
    return(
        <section className="home">
            <div className="home__content _container-landing">
                <div className="home__row">
                    <h1 className="home__heading">РАБОТАЙТЕ СО <span>СМЕТАМИ</span> В ТРИ РАЗА БЫСТРЕЕ</h1>
                    <p className="home__text">Загружайте сметы по благоустройству и получайте обработанные справочники с работами по ТЗ</p>
                    <NavLink to='/app'>
                        <div className="home__btn">
                            <span>
                                Начать работать
                                <img src={arrow}/>
                            </span>
                        </div>
                    </NavLink>
                </div>
            </div>
            <div className="home__bg">
                <img src={bg}/>
            </div>
        </section>
    )
}
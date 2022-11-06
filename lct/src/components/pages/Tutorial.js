import React from "react";
import { NavLink } from 'react-router-dom';

import adera from "../../image/landing/adera.svg";
import hub from "../../image/landing/hub.svg";
import bh from "../../image/landing/bh.svg";
import arrow from "../../image/landing/arrow.svg";
import icon from "../../image/qa/icon1.svg";
import "../../css/style.css";

export default function Tutorial() {
    return(
        <>
            <section className="tutorial">
                <div className="tutorial__content _container-landing">
                    <ul className="tutorial__list">
                        <li className="tutorial__block">
                            <img src={icon}
                            alt="icon"
                            />
                            <h2 className="tutorial__heading">Новый проект</h2>
                            <p className="tutorial__text">Создайте новый проект, чтобы начать работать</p>
                        </li>
                        <li className="tutorial__block">
                            <img src={icon}
                            alt="icon"
                            />
                            <h2 className="tutorial__heading">Загрузите смету</h2>
                            <p className="tutorial__text">Выберите нужный файл с компьюетра, чтобы <b>смет.<i>ai</i></b> начал свою работу</p>
                        </li>
                        <li className="tutorial__block">
                            <img src={icon}
                            alt="icon"
                            />
                            <h2 className="tutorial__heading">Получите результат!</h2>
                            <p className="tutorial__text">Начните работать с готовой таблей, которую можно редактировать </p>
                        </li>
                    </ul>
                    <NavLink to='/app'>
                        <div className="home__btn">
                            <span>
                                Начать работать
                                <img src={arrow}
                                alt="arrow"
                                />
                            </span>
                        </div>
                    </NavLink>
                </div>
            </section>
            <footer className="footer">
                <div className="footer__content _container">
                    <img src={adera}
                    alt="adera"
                    />
                    <div className="footer__row">
                        <img src={hub}
                        alt="github"
                        />
                        <img src={bh}
                        alt="behance"
                        />
                    </div>
                </div>
            </footer>
        </>
    )
}
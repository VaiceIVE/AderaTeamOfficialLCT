import React from "react";
import "../css/style.css";
import { QaData } from '../data/QaData';

import arrow from "../image/qa/arrow.svg"
import useCollapse from 'react-collapsed';
import down from "../image/qa/down.svg"
import top from "../image/qa/top.svg"

export default function Qa() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    return(
        <section className="qa">
            <div className="qa__content _container">
                <div className="qa__row">
                    <div className="qa__sup">
                        <div className="qa__heading">Подсказки по работе</div>
                        <div className="qa__btn" {...getToggleProps()}>
                            <img src={isExpanded ? top : down}/>
                            {isExpanded ? 'Скрыть' : 'Показать'}
                        </div>
                    </div>
                    <div {...getCollapseProps()}>
                        <ul className="qa__list" >
                            {QaData.map((item, index) => {
                                return(
                                    <li key={index} className={item.cName} >
                                        <div className="qa__column">
                                            <img src={item.icon}/>
                                            {item.title}
                                        </div>
                                        <img src={arrow}/>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

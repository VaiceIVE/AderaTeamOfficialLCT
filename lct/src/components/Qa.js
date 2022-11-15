import React, { useState } from "react";
import "../css/style.css";
import { QaData } from '../data/QaData';

import arrow from "../image/qa/arrow.svg"
import useCollapse from 'react-collapsed';
import down from "../image/qa/down.svg"
import top from "../image/qa/top.svg"

import Modal0 from "./modal/Modal0";
import Modal1 from "./modal/Modal1";
import Modal2 from "./modal/Modal2";
import Modal3 from "./modal/Modal3";

export default function Qa() {

    const [show0, setShow0] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    return(
        <section className="qa">
            <div className="qa__content _container">
                <div className="qa__row">
                    <div className="qa__sup">
                        <div className="qa__heading">Подсказки по работе</div>
                        <div className="qa__btn" {...getToggleProps()}>
                            <img src={isExpanded ? top : down} alt="1"/>
                            {isExpanded ? 'Скрыть' : 'Показать'}
                        </div>
                    </div>
                    <div {...getCollapseProps()}>
                        <ul className="qa__list" >
                            {QaData.map((item, index) => {
                                return(
                                    <li key={index} className={item.cName} onClick={item.num === 0 ? () => setShow0(true) :
                                    item.num === 1 ? () => setShow1(true) :
                                    item.num === 2 ? () => setShow2(true) : 
                                    () => setShow3(true)}>
                                        <div className="qa__column">
                                            <img className="qa__img" src={item.icon} alt="1"/>
                                            {item.title}
                                        </div>
                                        <img className="qa__img" src={arrow} alt="1"/>
                                        
                                        {item.num === 0 ? <Modal0 onCLose = {() => setShow0(false)} show={show0} number={item.num} icon={item.icon}/> :
                                        item.num === 1 ? <Modal1 onCLose = {() => setShow1(false)} show={show1} number={item.num} icon={item.icon}/> :
                                        item.num === 2 ? <Modal2 onCLose = {() => setShow2(false)} show={show2} number={item.num} icon={item.icon}/> :
                                        <Modal3 onCLose = {() => setShow3(false)} show={show3} number={item.num} icon={item.icon}/>}
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

import React from "react";

import "../../css/style.css";
import bg from "../../image/landing/about-us-bg.png";

export default function AboutUs(){
    return(
        <section className="about-us">
            <div className="about-us__content _container-landing">
                <div className="about-us__row">
                    <h2 className="about-us__heading">Что это?</h2>
                    <p className="about-us__text"><b><span>смет.<i>ai</i></span></b> - это сервис для упрощения работы со сметами. 
                    Встроенная нейронная сеть составляет по загруженным файлам список производимых работ 
                    по благоустройству, чтобы упростить работу контрольных органов.
                    </p>
                </div>
            </div>
            <div className="about-us__bg">
                <img src={bg}/>
            </div>
        </section>
    )
}
import React from "react";
import "../../css/style.css";

import arrow from "../../image/modal/arrow.svg"

export default function Modal2(props) {
    
    if (!props.show) {
        return null
    };

    return(
        <div className="modal" onClick={props.onCLose}>
            <div  className="modal__content" onClick={e => e.stopPropagation()}>
                <div className="modal__row">
                    <img className="modal__icon" src={props.icon} />
                    <h2 className="modal__heading">Как найти нужный проект?</h2>
                    <p className="modal__text">Для поиска определённого проекта можно воспользоваться поисковой строкой или задать необходимые фильтры.</p>
                    <p className="modal__text">После ввода корректных данных, на вашей странице отобразится нужный проект.</p>
                    <div className="modal__close" onClick={props.onCLose}>Следующий совет <img src={arrow}/></div>
                </div>
            </div>
        </div>
    )
}
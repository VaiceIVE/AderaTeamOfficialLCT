import React from "react";
import "../../css/style.css";

import arrow from "../../image/modal/arrow.svg"

export default function Modal1(props) {
    
    if (!props.show) {
        return null
    };

    return(
        <div className="modal" onClick={props.onCLose}>
            <div  className="modal__content" onClick={e => e.stopPropagation()}>
                <div className="modal__row">
                    <img className="modal__icon" src={props.icon} />
                    <h2 className="modal__heading">Как экспортировать файл?</h2>
                    <p className="modal__text">Для экспорта сметы нажмите на соотвествующую кнопку экспорта.</p>
                    <p className="modal__text">После анализа сметы Вам доступен экспорт данной сметы из истории или редактора системы.</p>
                    <div className="modal__close" onClick={props.onCLose}>Следующий совет <img src={arrow}/></div>
                </div>
            </div>
        </div>
    )
}
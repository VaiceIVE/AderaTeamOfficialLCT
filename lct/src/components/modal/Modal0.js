import React from "react";
import "../../css/style.css";

import ser from "../../image/modal/search.svg"
import arrow from "../../image/modal/arrow.svg"

export default function Modal0(props) {
    
    if (!props.show) {
        return null
    };

    return(
        <div className="modal" onClick={props.onCLose}>
            <div  className="modal__content" onClick={e => e.stopPropagation()}>
                <div className="modal__row">
                    <img className="modal__icon" src={props.icon} />
                    <h2 className="modal__heading">Как загрузить смету?</h2>
                    <p className="modal__text">Для загрузки сметы создайте новый проект с помощью кнопки “Новый пороект”.</p>
                    <p className="modal__text">В открывшемся проекте в поле “Загрузка” выберите возмодность загрузить и найдите нужный файл на компьютере.</p>
                    <img src={ser} className="modal__ser"/>
                    <p className="modal__text">Заполните минимум один из параметров перед началом анализа. <br/>
                    Готово! Сервис ожидает начала анализа.</p>
                    <div className="modal__close" onClick={props.onCLose}>Следующий совет <img src={arrow}/></div>
                </div>
            </div>
        </div>
    )
}
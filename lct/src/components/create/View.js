import React from "react";

import arrow from "../../image/download/arrow.svg";

export default class View extends React.Component {

    render() {
        return(
            <section className="view">
                <div className="view__content _container">
                    <div className="view__row">
                        <h2 className="view__heading">Просмотр</h2>
                        <ul className="view__list">
                            <li className="view__block">Результат</li>
                            <li className="view__block">Справочник СН <img src={arrow}/></li>
                            <li className="view__block">Справочник ТСН <img src={arrow}/></li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}
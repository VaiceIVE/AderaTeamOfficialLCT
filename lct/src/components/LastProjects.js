import React from "react";
import "../css/style.css"
import more from "../image/last-projects/more.svg";
import { NavLink } from 'react-router-dom';
import { Data } from "../data/Data";


export default class LastProjects extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: Data,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e, a) {
        console.log(a);
    }

    render() {
        return(
            <section className="last-projects">
                <div className="last-projects__content _container">
                    <div className="last-projects__row">
                        <h2 className="last-projects__heading">История</h2>
                        <ul className="last-projects__list">
                            {Data.map((item, index) => {
                                return (
                                    <li className="last-projects__block" key={index}>
                                        <div className="last-projects__head">
                                            <div className="last-projects__icon">
                                                <NavLink to={`/app/create/${index}`}>
                                                    <img src={item.icon}
                                                    alt="icon"
                                                    />
                                                </NavLink>
                                            </div>
                                            {item.name.substring(0, 27).concat("...")}
                                        </div>
                                        <div className="last-projects__autor">Я</div>
                                        <div className="last-projects__date">{item.date.slice(1, 11).replaceAll("-"," ").split(" ").reverse().join(" ")}</div>
                                        <div className="last-projects__state">{item.state}</div>
                                        <div className="last-projects__btn"><img src={more} alt="more" id="more" onClick={(e) => this.handleClick(e, index)}/></div>
                                    </li>
                                )
                            })}
                        </ul>
                        </div>
                </div>
            </section>
        )
    }
}
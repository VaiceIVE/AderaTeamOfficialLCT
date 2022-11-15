import React from "react";
import "../css/style.css"
import { NavLink } from 'react-router-dom';
import btn from "../image/project/btn.svg";

export default class Projects extends React.Component {

    render() {
        return(
            <section className="porjects">
                <div className="porjects__content _container">
                    <div className="projects__row">
                        <h1 className="projects__heading">Последние проекты</h1>
                        <NavLink to={"/app/create"}>
                            <div className="projects__btn"><span><img src={btn}/> Новый проект</span></div>
                        </NavLink>
                        <form className="projects__form">
                            <input 
                            type="text"
                            placeholder="."/>
                            <select name="select" defaultValue="s1">
                                <option value="s1">По дате</option>
                                <option value="s2">По дате</option>
                                <option value="s3">По дате</option>
                            </select>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}


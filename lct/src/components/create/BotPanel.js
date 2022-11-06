import React from "react";

import exp from "../../image/panel/export.svg";
import save from "../../image/panel/save.svg";

import { ResultData } from "../../data/ResultData";

var i = 0;
export default class BotPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            k: 0,
            n: -1,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        if (event.target.id === "export"){
            this.setState({
                k: this.state.k + 1,
            });
        }
        if (event.target.id === "save" && this.state.k > 0) {
            console.log("done");
        } 
    }

    componentDidMount() {
        this.setState({n : this.state.n + 1})
        i+=1;
        if (i>-1 && ResultData[i-1] === undefined) {
            i-=1;
        }
        console.log(i);
    }

    saveStyle() {
        let style = {};
        if (ResultData[i] !== undefined) {
            style = {
                "background": "#FF5840",
                "cursor": "pointer",
            }
        }
        return style
    }

    render() {
        let style = {
            "background": "rgba(16, 16, 16, 0.2)",
        }
        if (ResultData[i] !== undefined) {
            style = {
                "background": "#FF5840",
                "cursor": "pointer",
            }
        }
        return(
            <section className="panel">
                <div className="panel__content _container">
                    <div className="panel__row">
                        <form className="panel__form">
                            <input
                            type="text"
                            placeholder="."
                            />
                        </form>
                        <div className="panel__btns" >
                            <div className="panel__export" id="export" onClick={this.handleClick}>
                                <img src={exp}/>
                                Экспорт
                            </div>
                            <div className="panel__save" style={style} id="save" onClick={this.handleClick}>
                                <img src={save}/>
                                Сохранить
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
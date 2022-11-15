import React from "react";
import axios from "axios";

import '../../css/style.css';
import download from "../../image/download/download.svg";
import del from "../../image/download/delete.svg";
import reload from "../../image/download/reload.svg";
import edit from "../../image/last-projects/edit.svg";

import { Data } from "../../data/Data";
import { ResultData } from "../../data/ResultData";
var  i = 0;

export default class Download extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null,
            number: 0,
            historyData: [],
            n: 0,
            result: "Ожидание загрузки",
            address: "",
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    componentDidMount() {
        this.setState({
            n: 0,
        });
        i+=1;
        if (i>-1 && ResultData[i-1] === undefined) {
            i-=1;
        };
    }

    handleClick = (event) => {
        const formData = new FormData();
        if (event.target.id === "upload" && this.state.file != null && this.state.n === 0) {
            this.setState({ result : "Обработка..."})
            formData.append(
                'file',
                this.state.file,
                this.state.file.name,
            );

            console.log("Ok");
            axios.post('http://localhost:8000/api/table', formData, {
                headers: {
                    'Content-Type': `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; boundary=${formData._boundary}`
                }
            }).then((responseFromServer2) => {
                ResultData.push(responseFromServer2.data);
                for (let j = 0; j < ResultData[i].length; j++) {
                    ResultData[i].map(item => {
                        if (item.addr === " ") {
                            item.addr = this.state.address;
                        };
                    })
                };
                this.setState({ n : 1 });
                this.setState({ result : "Готово для создания"});
            }).catch((err) => {
                console.log(err);
            });

            let NewData = {
                icon: edit,
                name: this.state.file.name,
                date: JSON.stringify(this.state.file.lastModifiedDate),
                state: "Редактируется",
            };

            if (Array.isArray(Data)) {
                Data.push(NewData);
            } else {
                console.log('arr variable does not store an array');
            }
        };
    };

    handleChange(event){
        if (event.target.id === "smeta") {
            this.setState({
                file: event.target.files && event.target.files[0],
            });
        };
        if (event.target.id === "number") {
            this.setState({
                number: event.target.value,
            })
        };
        if (event.target.id === "address") {
            this.setState({
                address: event.target.value,
            })
            console.log(this.state.address);
        };
    };

    render() {
        return(
            <section className="download">
                <div className="download__content _container">
                    <div className="download__row">
                        <h2 className="download__heading">Загрузка</h2>
                        <p className="download__text">Выберите файл сметы формата .xlsx</p>
                        <div className="download__column">
                            <input
                            className="download__smeta"
                            type="file"
                            id="smeta"
                            onChange={(event) => {this.handleChange(event)}}
                            required
                            />
                            <div className="download__smeta-btn">{this.state.file ? this.state.file.name : "файл не выбран"}</div>
                            <div className="download__control">
                                <label htmlFor="smeta"><img src={download}/></label>
                                <div className="download__delete"><img id="del" onClick={this.handleClick} src={del}/></div>
                            </div>
                        </div>
                        <p className="download__text">Пожалуйста, заполните как миниум один из параметров для начала работы сервиса</p>
                        <ul className="download__list">
                            <li className="download__block">
                                <h3 className="download__name">Шаблон ТЗ</h3>
                                <select name="select" defaultValue="s1">
                                    <option value="s3">Благоустройство территорий</option>
                                    <option value="s2">Обустройство велосипедной инфраструктуры</option>
                                    <option value="s1">Не выбрано</option>
                                </select>
                            </li>
                            <li className="download__block">
                                <h3 className="download__name">КПГЗ</h3>
                                <select name="select" defaultValue="s1">
                                    <option value="s1">Не выбрано</option>
                                    <option value="s2">ОБУСТРОЙСТВО МАФ ТЕРРИТОРИЙ</option>
                                    <option value="s3">РЕМОНТ ВЕЛОСИПЕДНОЙ ИНФРАСТРУКТУРЫ</option>
                                </select>
                            </li>
                            <li className="download__block">
                                <h3 className="download__name">Адрес</h3>
                                <input
                                id = "address"
                                value={this.address} 
                                onChange={this.handleChange}
                                placeholder="Распознать из сметы"
                                ></input>
                            </li>
                            <li className="download__block">
                                <h3 className="download__name">Лист сметы</h3>
                                <input
                                id="number"
                                onChange={(event) => {this.handleChange(event)}}
                                required
                                placeholder="Не указан"
                                ></input>
                            </li>
                        </ul>
                        <div className="download__str">
                            <button
                            onClick={this.handleClick}
                            id="upload">
                                <img src={reload}/>
                                Анализ документа
                            </button>
                            {this.state.result}
                        </div>
                    </div>
                </div> 
            </section>
        )
    };
}
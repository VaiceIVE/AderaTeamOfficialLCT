import React from 'react';
import "../css/style.css";
import axios from "axios";

import { GuideData } from '../data/GuideData';

export default class Guide extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            edit: [],
            kpgz: "",
            num: 0,
            name: "",
            spgz: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdateClick = this.handleUpdateClick.bind(this);
    };

    componentDidMount() {
        this.setState({ 
            items: GuideData,
            edit: GuideData,
        });
    }

    handleUpdateClick() {
        if (this.state.name && this.state.spgz && this.state.kpgz) {
            let updateData = {
                name: this.state.name,
                kpgz: this.state.kpgz,
                spgz: this.state.spgz,
            };
            console.log("Ok");
            axios.post('https://c2ed-188-72-108-227.eu.ngrok.io/updatedictionary', updateData, {
                headers: {
                    'Content-Type': `application/json`
                }
            }).then((responseFromServer) => {
                this.setState({
                    items: responseFromServer,
                })
            }).catch((err) => {
                console.log(err);
            });
        } else {
            console.log("error");
        };
    }

    handleChange = (event) => {
        switch (event.target.id) {
            case "num":
                this.setState({num: event.target.value});
                break;
            case "name":
                this.setState({name: event.target.value});
                break;
            case "kpgz":
                this.setState({kpgz: event.target.value});
                break;
            case "spgz":
                this.setState({spgz: event.target.value});
                break;
        }
    };

    render() {
        return(
            <div className='guide'>
                <div className='guide__content _container'>
                    <div className='guide__row'>
                        <form className="table__form">
                            <div className='guide__form-row'>
                                <label>
                                    Ключевые слова
                                    <input value={this.name} onChange={this.handleChange} id="name" placeholder="Ввод"/>
                                </label>
                                <label>
                                    КПГЗ
                                    <input value={this.kpgz} onChange={this.handleChange} id="kpgz" placeholder="Ввод"/>    
                                </label>
                                <label>
                                    СПГЗ
                                    <input value={this.spgz} onChange={this.handleChange} id="spgz" placeholder="Ввод"/>
                                </label>
                            </div>
                            <div className='guide__btn' onClick={this.handleUpdateClick}>Обновить</div>
                        </form>
                        <ul className="table__list">
                            <li className="table__block">
                                <div className="table__hat number1" style={{width:60}}>№</div>
                                <div className="table__hat name" style={{width:300}}>Ключевые слова</div>
                                <div className="table__hat kpgz" style={{width:500}}>КПГЗ</div>
                                <div className="table__hat spgz" style={{width:500}}>СПГЗ</div>
                            </li>
                        </ul>
                        <ul className="table__list">
                            {this.state.items.map(( item, index ) => {
                                return(
                                    <li className="table__block" key={index}>
                                        <div className="table__box number" style={{width:60}}>{item.num}</div>
                                        <div className="table__box name" style={{width:300}}>{item.name.length > 34 ? item.name.substring(0, 35).concat("...") : item.name}</div>
                                        <div className="table__box kpgz" style={{width:500}}>{item.kpgz === undefined ? "КПГЗ" : item.kpgz}</div>
                                        <div className="table__box cpgz" style={{width:500}}>{item.spgz === undefined ? "СПГЗ" : item.spgz}</div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
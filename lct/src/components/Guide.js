import React from 'react';
import "../css/style.css";

import { GuideData } from '../data/GuideData';
import edit from "../image/table/edit.svg";

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
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    componentDidMount() {
        this.setState({ 
            items: GuideData,
            edit: GuideData,
        });
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

    handleClick(id) {
        var items = [...this.state.items];
        items[id-1].spgz = this.state.spgz || this.state.edit[id-1].spgz;
        items[id-1].kpgz = this.state.kpgz || this.state.edit[id-1].kpgz ;
        items[id-1].name = this.state.name || this.state.edit[id-1].name;
        this.setState({items});
    };

    render() {
        return(
            <div className='guide'>
                <div className='guide__content _container'>
                    <div className='guide__row'>
                        <form className="table__form">
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
                                        <div className="table__box number" style={{width:60}}><img onClick={() => this.handleClick(item.num)} src={edit}/> {item.num}</div>
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
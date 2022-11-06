import React from "react";
import "../../css/style.css";
import { ResultData } from "../../data/ResultData";
import { Pages } from "../../data/Pages";
import edit from "../../image/table/edit.svg";

export default class CreatePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            edit: [],
            n: -1,
            kpgz: "",
            code: "",
            name: "",
            spgz: "",
            measure: "",
            unit: "",
            singlecost: "",
            allcost: "",
            address: "",
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.forceUpdate();
        const test = this.props.location;
        let i = Number(test.pathname.slice(-1))
        console.log(ResultData[i]);
            this.setState({
                items: ResultData[i],
                edit: ResultData[i],
        });
    }

    handleClick(id) {
        var items = [...this.state.items];
        items[id-1].code = this.state.code || this.state.edit[id-1].code;
        items[id-1].kpgz = this.state.kpgz || this.state.edit[id-1].kpgz ;
        items[id-1].name = this.state.name || this.state.edit[id-1].name;
        items[id-1].spgz = this.state.spgz || this.state.edit[id-1].spgz;
        items[id-1].measure = this.state.measure || this.state.edit[id-1].measure;
        items[id-1].unit = this.state.unit || this.state.edit[id-1].unit;
        items[id-1].singlecost = this.state.singlecost || this.state.edit[id-1].singlecost;
        items[id-1].allcost = this.state.allcost || this.state.edit[id-1].allcost;
        items[id-1].address = this.state.address || this.state.edit[id-1].address;
        this.setState({items});
        console.log(typeof(this.state.items.singlecost));
    }

    handleChange = (event) => {
        switch (event.target.id) {
            case "kpgz":
                this.setState({kpgz: event.target.value});
                break;
            case "code":
                this.setState({code: event.target.value});
                break;
            case "name":
                this.setState({name: event.target.value});
                break;
            case "spgz":
                this.setState({spgz: event.target.value});
                break;
            case "measure":
                this.setState({measure: event.target.value});
                break;
            case "unit":
                this.setState({unit: event.target.value});
                break;
            case "singlecost":
                this.setState({singlecost: event.target.value});
                break;
            case "allcost":
                this.setState({allcost: event.target.value});
                break;
            case "address":
                this.setState({address: event.target.value});
                break;
        }
    }

    render() {
        
        return(
            <section className="table">
                <div className="table__content _container">
                    <div className="table__row">
                        <form className="table__form">
                            <label>
                                КПГЗ 
                                <input value={this.kpgz} onChange={this.handleChange} id="kpgz" placeholder="Ввод"/>
                            </label>
                            <label>
                                Шифр
                                <input value={this.code} onChange={this.handleChange} id="code" placeholder="Ввод"/>
                            </label>
                            <label>
                                Наим. работ
                                <input value={this.name} onChange={this.handleChange} id="name" placeholder="Ввод"/>    
                            </label>
                            <label>
                                СПГЗ
                                <input value={this.spgz} onChange={this.handleChange} id="spgz" placeholder="Ввод"/>
                            </label>
                            <label>
                                Ед. измерения
                                <input value={this.measure} onChange={this.handleChange} id="measure" placeholder="Ввод"/>
                            </label>
                            <label>
                                Количество
                                <input value={this.unit} onChange={this.handleChange} id="unit" placeholder="Ввод"/>
                            </label>
                            <label>
                                Цена
                                <input value={this.singlecost} onChange={this.handleChange} id="singlecost" placeholder="Ввод"/>
                            </label>
                            <label>
                                Стоимость
                                <input value={this.allcost} onChange={this.handleChange} id="allcost" placeholder="Ввод"/>
                            </label>
                            <label>
                                Адрес
                                <input value={this.address} onChange={this.handleChange} id="address" placeholder="Ввод"/>
                            </label>
                        </form>
                        <ul className="table__list">
                            <li className="table__block">
                                <div className="table__hat number">№</div>
                                <div className="table__hat id">ID</div>
                                <div className="table__hat kpgz">КПГЗ</div>
                                <div className="table__hat code">Шифр</div>
                                <div className="table__hat cpgz">Наим. работ</div>
                                <div className="table__hat name">СПГЗ</div>
                                <div className="table__hat measure">Ед. измерения</div>
                                <div className="table__hat unit">Количество</div>
                                <div className="table__hat price">Цена за ед. ТРУ, руб</div>
                                <div className="table__hat cost">Стоимость <br/> за ТРУ, руб</div>
                                <div className="table__hat address">Адрес</div>
                            </li>
                        </ul>
                        <ul className="table__list">
                            {this.state.items.map(( item, index ) => {
                                return(
                                    <li className="table__block" key={index}>
                                        <div className="table__box number"><img onClick={() => this.handleClick(item.num)} src={edit}/> {item.num}</div>
                                        <div className="table__box id">{item.id}</div>
                                        <div className="table__box kpgz">{item.kpgz === undefined ? "КПГЗ" : item.kpgz}</div>
                                        <div className="table__box code">{item.code}</div>
                                        <div className="table__box cpgz" >{item.spgz === undefined ? "СПГЗ" : item.spgz}</div>
                                        <div className="table__box name">{item.name.length > 34 ? item.name.substring(0, 35).concat("...") : item.name}</div>
                                        <div className="table__box measure">{item.measure}</div>
                                        <div className="table__box unit">{item.unit}</div>
                                        <div className="table__box price">{item.singlecost === undefined ? "Цена за ед. ТРУ, руб" : item.singlecost}</div>
                                        <div className="table__box cost">{item.allcost === undefined ? "Стоимость за ТРУ, руб" : item.allcost}</div>
                                        <div className="table__box address">{item.address === undefined ? "Адрес" : item.address}</div>
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

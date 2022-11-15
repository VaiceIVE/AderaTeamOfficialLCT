import React from "react";
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

import exp from "../../image/panel/export.svg";

import { ResultData } from "../../data/ResultData";

var i = 0;
export default class PanelCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            k: 0,
            n: -1,
            fileType : 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8',
            fileExtension : '.xlsx'
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(csvData, fileName) {
        const ws = XLSX.utils.json_to_sheet(csvData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], {type: this.state.fileType});
        FileSaver.saveAs(data, fileName + this.state.fileExtension);
    }

    componentDidMount() {
        this.setState({n : this.state.n + 1})
        const test = this.props.location;
        i = Number(test.pathname.slice(-1))
    }

    render() {
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
                            <div className="panel__export" id="export" onClick={(e) => {this.handleClick(ResultData[i],"Смета")}}>
                                <img src={exp}/>
                                Экспорт
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
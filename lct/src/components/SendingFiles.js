import React from "react";
import axios from "axios";
import '../css/style.css';

export default class SendingFiles extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            file: null,
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleClick = () => {
        const formData = new FormData();

        formData.append(
            'File',
            this.state.file,
            this.state.file.name,
        );
        
        console.log(this.state.file);
        axios.post("api", formData);

    };
    
    handleChange = event => {
        this.setState({
            file: event.target.files[0],
        });
    };

    render() {
        return(
            <section className="sending-files">
                <div className="sending-files__content _container">
                    <div className="sending-files__row">
                        <input
                        type="file"
                        onChange={this.handleChange}/>
                        <button
                        onClick={this.handleClick}>
                            Upload
                        </button>
                    </div>
                </div>
            </section>
        )
    };
}
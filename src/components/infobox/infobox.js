import React, { Component } from 'react';
import {DeleteButton} from '../../components/buttons/delete';

import './infobox.css';

class InfoBox extends Component {

    constructor(){
        super();

        this.state={
            showDelete:false
        }

        this.MouseEnterHeader=this.MouseEnterHeader.bind(this);
        this.MouseLeaveHeader=this.MouseLeaveHeader.bind(this);
    }

    /*---------------- code stuffs --------------------*/
    MouseEnterHeader(){
        this.setState({
            showDelete:true
        })
    }

    MouseLeaveHeader(){
        this.setState({
            showDelete:false
        })
    }


    /*----------------graphical sutffs----------------*/
    Paragraph(props) {
        const paragraphs = props.paragraphs.map((paragraph, index) => {
            return (
                <div key={index} className="infobox-text">{paragraph}</div>
            )
        });

        return (
            paragraphs
        )
    }


    render() {
        const header = this.props.BoxData.Header;
        const paragraphs = this.props.BoxData.Text;
        const showDelete=this.state.showDelete;

        const BoxData=this.props.BoxData;
        const removeInfoBox=this.props.removeInfoBox;

        return (
            <div className="infobox-container">
                <div  onMouseLeave={this.MouseLeaveHeader} onMouseEnter={this.MouseEnterHeader} className="infobox-header">
                    {header}
                    {showDelete && <DeleteButton removeData={BoxData} removeFunct={removeInfoBox}></DeleteButton>}
                </div>
                <div>
                    <this.Paragraph paragraphs={paragraphs}></this.Paragraph>
                </div>
            </div>
        )
    }
}

export default InfoBox

import React, { Component } from 'react';
import './cv.css';


export class CV extends Component {



    componentDidMount() {
        var content = document.getElementById("printcont");
        var pri = document.getElementById("ifmcontentstoprint").contentWindow;
        pri.document.open();
        console.log('the inner html');
        console.log(content);
        pri.document.write(content.innerHTML);
        pri.document.close();
        pri.focus();
        pri.print();
    }



    toBePrinted() {

        return (
            <div id="printcont" className="print-container">

                <div className="print-col-left">
                </div>

                <div className="print-col-right">
                </div>

            </div>
        )
    }


    render() {
        return (
            <div className="print-wrapper">
            <iframe id="ifmcontentstoprint" className="iframe-container"> {this.toBePrinted()}    </iframe>
            {this.toBePrinted()} 
            </div>
        )
    }
}

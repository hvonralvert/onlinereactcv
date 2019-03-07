import React, { Component } from 'react';
import stylingsa from './cv.css';

const stylie={
    'printcontainer':{
        'fontSize': '11pt',
        'width':'595pt',
        'minHeight':'842pt',
        'backgroundColor': 'bisque',
        'display': 'block',
        'boxSizing':' borderBox',
    },
    'printcolleft':{
        'display': ' inlineBlock',
        'backgroundColor': 'blue',
        'height': '100%',
        'width': '30%'
    },
    'printcolright':{
        'display': 'inlineBlock',
        'backgroundColor': 'red',
        'height':'100%',
        'width':'70%'
    }
}


export class CV extends Component {



    componentDidMount() {




        var content = document.getElementById("printcont");
        var pri = document.getElementById("ifmcontentstoprint").contentWindow;
        pri.document.open();
        console.log('the inner html');
        console.log(stylingsa)
        console.log(content.innerHTML);
        pri.document.write(content.innerHTML);
        pri.document.close();
        pri.focus();
        pri.print();
    }



    toBePrinted() {



        return (
            <div id="printcont" style={stylie.printcontainer}>
                adssaasddsa
                <div  style={stylie.printcolleft}>
                    hejhej
                </div>

                <div style={stylie.printcolright}>
                svej svej
                </div>

            </div>
        )
    }


    render() {
        return (
            <div className="print-wrapper">
            <iframe id="ifmcontentstoprint" className="iframe-container">   </iframe>
                {this.toBePrinted()} 
            </div>
        )
    }
}

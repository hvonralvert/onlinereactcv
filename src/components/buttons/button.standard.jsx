import React, {Component } from 'react';
import './buttons.css';

export class ButtonStandard extends Component{

    constructor(){
        super();

        this.state={
            
        }

        this.btnClassNames=this.btnClassNames.bind(this);
    }


    btnClassNames(disabled){
        var btnClass={
            "button-container":true,
            "standard":true,
            "button-disabled":disabled
        }

        return Object.keys(btnClass).map(key => { return btnClass[key] ? key : undefined }).filter(el => { return el !== undefined }).join(' ')
    }



    render(){
        const clickFunct=this.props.clickFunct;
        const disabled=this.props.disable;

        const btnClassNames=this.btnClassNames(disabled);

        return(
            <div onClick={()=>clickFunct()} className={btnClassNames}>
            <div></div>
                Loggain
            </div>
        )
    }
}


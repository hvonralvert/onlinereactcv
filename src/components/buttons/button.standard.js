import React, {Component } from 'react';
import './buttons.css';

export class ButtonStandard extends Component{


    render(){

        const clickFunct=this.props.clickFunct;

        return(
            <div onClick={()=>clickFunct} className="button-container standard">
                Loggain
            </div>
        )
    }
}


import React, {Component } from 'react';
import './buttons.css';

export class DeleteButton extends Component{


    render(){

        const removeFunct=this.props.removeFunct;
        const removeData=this.props.removeData;

        return(
            <div onClick={()=>removeFunct(removeData)} className="button-container delete">
                Ta bort
            </div>
        )
    }
}


import React, {Component} from 'react';
import './chatt.styles.css';

export class ChattHeader extends Component{

    render(){
        const header=this.props.header;

        return(
                <div className="header">
                    {header}
                </div>
        )
    }
}
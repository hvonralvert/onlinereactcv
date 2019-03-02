import React, {Component} from 'react';
import './chatt.page.css';

import {Chatt} from '../../../components/chatt.components/chatt';

class ChattPage extends Component{



    render(){

        return (
            <div className="page-container endPos">
                <Chatt></Chatt>
            </div>
        )
    }
}

export default ChattPage;
import React, {Component} from 'react';
import './chatt.styles.css';

import { ChattHeader } from './chatt.header';
import { ChattContent } from './chatt.content';
import { ChattFooter } from './chatt.footer';

export class Chatt extends Component{

    constructor(){
        super();

        this.state={
            Header:'Chatta med henrik',
            InputPlaceholder:'Skriv...',
            Chatts:[
                {
                    Text:'första',
                    Date:'2019-02-23',
                    Who:'12kshfds2'
                },
                {
                    Text:'Det var riktigt kul emdsfsdfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsf  dsf sdf dsf dsfds fds fdsfdsfdsfsdf sdf sdf dsf dsfd andra ord',
                    Date:'2019-02-23',
                    Who:'12kshfds2'
                },
                {
                    Text:'Det var riktigt kul emd andra ord',
                    Date:'2019-02-23',
                    Who:'12kshfds2'
                },
                {
                    Text:'Det var riktigt kul emd andra ord',
                    Date:'2019-02-23',
                    Who:'12kshfds2'
                },
                {
                    Text:'Det var riktigt kul emd andra ord',
                    Date:'2019-02-23',
                    Who:'12kshfds2'
                }
            ]
        }

        this.NewChattBubble=this.NewChattBubble.bind(this);
    }



    NewChattBubble(text){
        const newBubble={
            Text:text,
            Date:new Date(),
            Who:'12kshfds2'
        }

        const newChatts = this.state.Chatts;
        newChatts.unshift(newBubble);

        this.setState({
            Chatts:newChatts
        })
    }


    render(){
        const header=this.state.Header;
        const Chatts=this.state.Chatts;
        const NewChattBubble=this.NewChattBubble;

        return(
            <div className="chatt-container">
                <ChattHeader header={header}></ChattHeader>
                <ChattContent Chatts={Chatts}></ChattContent>
                <ChattFooter NewChattBubble={NewChattBubble}></ChattFooter>
            </div>
        )
    }
}


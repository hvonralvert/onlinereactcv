import React, {Component} from 'react';
import db from '../../firebase/firestore';
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
            Chatts:[]
        }

        this.NewChattBubble=this.NewChattBubble.bind(this);

        this.ChattsColl=db.firestore().collection('/Chatts/');        
    }


    componentWillMount(){
        this.unsubscribe=this.ChattsColl.orderBy('TimeStamp','desc').onSnapshot(docSnaps=>{
            console.log('returns value')
            const newChatts=docSnaps.docs.map(doc=>{
                return doc.data();
            })

            this.setState({
                Chatts:newChatts
            })
        })
    }


    componentWillUnmount(){
        if(this.unsubscribe){
            this.unsubscribe();
        }
    }



    NewChattBubble(text){
        const newBubble={
            Text:text,
            TimeStamp:new Date().getTime(),
            Who:'12kshfds2',
        }

        const newChatts = this.state.Chatts;
        newChatts.unshift(newBubble);

        this.setState({
            Chatts:newChatts
        })

        this.ChattsColl.add(newBubble);
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


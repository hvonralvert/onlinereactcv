import React, {Component} from 'react';
import './chatt.styles.css';

export class ChattContent extends Component{

    constructor(){
        super();
        this.ChattBubbles=this.ChattBubbles.bind(this);
    }

    componentDidMount(){
        this.scrollToBottom();
    }

    
    componentDidUpdate() {
        this.scrollToBottom();
      }
    

    scrollToBottom() {
        this.el.scrollTop=this.el.scrollHeight;
    }
    

    isEven(index){
        if(index & 1){
            return false;
        }else{
            return true;
        }
    }


    /*------------------------------------- render ---------------------*/
    ChattBubbles(props){

        const Chatts=props.Chatts;

        if(!Array.isArray(Chatts)){
            return<div className="chatt-content"></div>;
        }

        const ChattsRows = Chatts.map((element,index) => {
            return(    
                <div key={index} className={"bubble-row " + (this.isEven(index) ? "rightPos":"leftPos")}>
                    <img src='./assets/mig.jpg' className="img-bubble"></img>  
                    <div className="bubble">
                        {element.Text}          
                    </div>
                </div>
            )
        });

        return <div className="chatt-content">{ChattsRows}</div>        
    }


    render(){
        const Chatts=this.props.Chatts;
        const ChattBubbles=this.ChattBubbles;

        return(
            <div ref={ (el)=> {this.el = el}} className="chatt-content-container">
                <ChattBubbles Chatts={Chatts}></ChattBubbles>
            </div>
        )
    }
}
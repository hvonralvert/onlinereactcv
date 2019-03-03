import React, {Component} from 'react';
import './chatt.styles.css';

export class ChattFooter extends Component{

    constructor(){
        super();

        this.state={
            ShowSend:false,
            Text:''
        }

        this.inputFocused=this.inputFocused.bind(this);
        this.inputBlurred=this.inputBlurred.bind(this);
        this.InputChange=this.InputChange.bind(this);
        this.HandleKeyUp=this.HandleKeyUp.bind(this);
        this.SubmitNewText=this.SubmitNewText.bind(this);
    }


    inputFocused(){
        this.setState({
            ShowSend:true
        })
    }


    inputBlurred(){
        if(this.state.Text===''){
            this.setState({
                ShowSend:false
            })
        }
    }


    InputChange(event){
        const text=event.target.value;

        this.setState({
            Text:text
        })
    }


    HandleKeyUp(event){
        if(event.keyCode === 13){
            const text=this.state.Text;

            this.setState({
                Text:''
            });

            return this.props.NewChattBubble(text)
        }
    }


    SubmitNewText(){
        const text=this.state.Text;

        this.setState({
            Text:'',
            ShowSend:false
        });

        return this.props.NewChattBubble(text)    
    }


    render(){
        const ShowSend=this.state.ShowSend;
        const Text=this.state.Text;

        return(
            <div className="footer-container">
                <input onKeyUp={this.HandleKeyUp} onChange={this.InputChange} value={Text} onBlur={this.inputBlurred} onFocus={this.inputFocused} className="chatt-input" placeholder="Skriv något...."></input>
                {ShowSend && <div className="sendButton" onClick={()=>this.SubmitNewText()}></div>}
            </div>
        )
    }
}
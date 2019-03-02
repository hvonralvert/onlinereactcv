import React, { Component } from 'react';
import './login.css';
import {db} from '../../firestore';
import firebase from 'firebase';

import { ButtonStandard } from '../../components/buttons/button.standard';

export class LoginModal extends Component{

    constructor(){
        super();

        this.state={
            Login:'',
            Passw:''
        }

        this.LoginChange=this.LoginChange.bind(this);
        this.PasswChange=this.PasswChange.bind(this);
        this.Login=this.Login.bind(this);

        this.unsubscribe=firebase.firestore();
    }

    componentWillMount(){
        console.log('login modal did mount');
        this.unsubscribe=firebase.firestore().collection('/Chatts/').onSnapshot(docssnap=>{
            docssnap.forEach(doc=>{
                console.log('a cod')
                console.log(doc.data())
            })
        })
    }


    LoginChange(event){

        const newLog=event.target.value;

        this.setState({
            Login:newLog
        });
    }


    PasswChange(event){
        const newPass=event.target.value;

        this.setState({
            Passw:newPass
        });
    }


    Login(){

        console.log('login')
        const login={
            User:this.state.Login,
            Passw:this.state.Passw
        }

        this.setState({
            Login:'',
            Passw:''
        })

        this.unsubscribe();
    }


    render(){
        const closeLogin=this.props.closeLogin;

        const LoginChange=this.LoginChange;
        const PasswChange=this.PasswChange;
        const Login=this.Login;

        const login=this.state.Login;
        const passw=this.state.Passw;
            
        return(
            <div className="ModalStaticContainer">
                <div className="ModalContainer">
                    <div onClick={closeLogin} className="backDrop"></div>
                    <div className="Modal">
                        <div className="modal-header">Logga in</div>
                        <div className="modal-content">
                            <input onChange={LoginChange} value={login} type="mail" className="modal-input" placeholder="Email"></input>
                            <input onChange={PasswChange} value={passw} type="password" className="modal-input modal-input-margtop" placeholder="Lösenord"></input>
                        </div>
                        <div className="modal-buttonrow" onClick={()=>Login()}>
                            <ButtonStandard clickFunct={Login}></ButtonStandard>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


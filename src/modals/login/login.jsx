import React, { Component } from 'react';
import './login.css';
import db from '../../firebase/firestore';

import { ButtonStandard } from '../../components/buttons/button.standard';

export class LoginModal extends Component {

    constructor() {
        super();

        this.state = {
            Email: '',
            Passw: '',
            DisableLoginButton: true,
            LogginError: false,
            CloseClass: false
        }

        this.EmailChange = this.EmailChange.bind(this);
        this.PasswChange = this.PasswChange.bind(this);
        this.Login = this.Login.bind(this);
        this.LoginCredCheck = this.LoginCredCheck.bind(this);
        this.handelKeyUp = this.handelKeyUp.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.modalCloseCLass = this.modalCloseCLass.bind(this);
        this.backdropCloseCLass = this.backdropCloseCLass.bind(this);
    }

    // handleclose should ahve a promise with login

    /*----------------------------- forms and login handling ------------------------------*/
    EmailChange(event) {
        const newLog = event.target.value;
        this.setState(
            {
                Email: newLog
            }
            , () => { this.LoginCredCheck() });
    }


    PasswChange(event) {
        const newPass = event.target.value;

        this.setState(
            {
                Passw: newPass,
            }
            , () => { this.LoginCredCheck() });
    }


    LoginCredCheck() {
        const email = this.state.Email.length > 5;
        const passw = this.state.Passw.length > 5;

        this.setState({
            DisableLoginButton: (email && passw) ? false : true
        })
    }


    Login() {
        const login = {
            User: this.state.Email.toLowerCase(),
            Passw: this.state.Passw
        }

        db.auth().signInWithEmailAndPassword(login.User, login.Passw).then(res => {
            console.log('Loggin succes');
            this.handleCloseModal();
        }, err => {
            console.log('error');
            console.log(err);

            this.setState({
                LogginError: true
            })
        })

        this.setState({
            Login: '',
            Passw: ''
        })
    }


    handelKeyUp(event) {
        if (event.keyCode === 13) {
            this.Login();
        }
    }


    /*------------------------------------ close handlers ---------------------------------*/
    handleCloseModal() {
        this.setState({
            CloseClass: true
        }, () => {
            setTimeout(() => {
                this.props.closeLogin();
            }, 500);
        });
    }


    modalCloseCLass() {
        return this.state.CloseClass ? 'modal-getlost' : '';
    }


    backdropCloseCLass() {
        return this.state.CloseClass ? 'backDrop-getlost' : '';
    }


    /*----------------------------- renders -----------------------------------------------*/
    errorText() {
        return (
            <div className="modal-content-error">
                <div className="modal-content-error-text">
                    Inloggingen misslyckades.
                    <br></br>
                    Lösenord eller mail är felaktigt.
                </div>
            </div>
        )
    }


    render() {

        const EmailChange = this.EmailChange;
        const PasswChange = this.PasswChange;
        const handelKeyUp = this.handelKeyUp;
        const Login = this.Login;
        const handleCloseModal = this.handleCloseModal;

        const modalCloseCLass = this.modalCloseCLass;
        const backdropCloseCLass = this.backdropCloseCLass;

        const login = this.state.Email;
        const passw = this.state.Passw;
        const DisableLoginButton = this.state.DisableLoginButton;
        const LogginError = this.state.LogginError;

        const errorText = this.errorText;

        return (
            <div className="ModalStaticContainer">
                <div className="ModalContainer">
                    <div onClick={handleCloseModal} className={"backDrop" + backdropCloseCLass()}></div>
                    <div className={"Modal " + modalCloseCLass()}>
                        <div className="modal-header">Logga in</div>
                        <div className="modal-content">
                            {LogginError && errorText()}
                            <input onKeyUp={handelKeyUp} onChange={EmailChange} value={login} type="mail" className="modal-input" placeholder="Email"></input>
                            <input onKeyUp={handelKeyUp} onChange={PasswChange} value={passw} type="password" className="modal-input modal-input-margtop" placeholder="Lösenord"></input>
                        </div>
                        <div className="modal-buttonrow">
                            <ButtonStandard disable={DisableLoginButton} clickFunct={Login}></ButtonStandard>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


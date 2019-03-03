import React, {
    Component
} from 'react';
import './header.css'

import { Link } from 'react-router-dom';

import db from '../firebase/firestore';

class Header extends Component {


    constructor(){
        super();

        this.state={
            UserLoggedIn:false
        }

        this.LogInOrOut=this.LogInOrOut.bind(this);
        this.handleAuthState=this.handleAuthState.bind(this);

        this.handleAuthState();
    }


    handleAuthState(){
        db.auth().onAuthStateChanged(user=>{
            this.setState({
                UserLoggedIn:user?true:false
            })
        })
    }


    Buttons(props){
        const HeaderButtons=props.HeaderButtons;
        const GoToPage=props.GoToPage;

        const buttons=HeaderButtons.map((button,index)=>{
            return( 
                <Link  key={index} onClick={()=>GoToPage(button)} to={button.Link} className={!button.Active?"button":"button active"}>
                    {button.Text}
                </Link>
            )
        })

        return (<div className="buttonsRow">{buttons}</div>)
    }


    LogInOrOut(){
        if(db.auth().currentUser){
            db.auth().signOut();
        }else{
            this.props.openLogin();
        }
    }


    render() {

        const HeaderButtons=this.props.HeaderButtons;
        const GoToPage=this.props.GoToPage;

        const LogInOrOut=this.LogInOrOut;

        const UserLoggedIn=this.state.UserLoggedIn;

        return (
            <div className="HeaderComponent">
                <div  onClick={()=>LogInOrOut()} className="Me-container">
                    {UserLoggedIn && <img alt="test" className="Me" src="./assets/mig.jpg"></img>}
                    {!UserLoggedIn && <img alt="test" className="Me" src="./assets/profile.jpg"></img>}
                </div>     

                <this.Buttons GoToPage={GoToPage} HeaderButtons={HeaderButtons}></this.Buttons>
            </div>            
        )
    }
}


export default Header
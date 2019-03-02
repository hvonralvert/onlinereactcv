import React, {
    Component
} from 'react';
import './header.css'

import { Link } from 'react-router-dom';

class Header extends Component {


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


    render() {

        const HeaderButtons=this.props.HeaderButtons;
        const GoToPage=this.props.GoToPage;

        const openLogin=this.props.openLogin;

        return (
            <div className="HeaderComponent">
                <div  onClick={()=>openLogin()} className="Me-container">
                    <img alt="test" className="Me" src="./assets/mig.jpg"></img>
                </div>     

                <this.Buttons GoToPage={GoToPage} HeaderButtons={HeaderButtons}></this.Buttons>
            </div>            
        )
    }
}


export default Header
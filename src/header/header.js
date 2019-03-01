import React, {
    Component
} from 'react';
import './header.css'

import { Link } from 'react-router-dom';

class Header extends Component {


    Buttons(props){
        console.log('buttons')
        console.log(props.HeaderButtons)
        const HeaderButtons=props.HeaderButtons;

        const buttons=HeaderButtons.map((button,index)=>{
            console.log('mapping');
            console.log(button)
            return(
                <div key={index} className={!button.Active?"button":"button active"}>
                    {button.Text}
                    <Link to={button.Link}>
                    </Link>
                </div>
            )
        })

        return (<div className="buttonsRow">{buttons}</div>)
    }


    render() {

        console.log('renderer in the header');
        console.log(this.props.HeaderButtons)

        const HeaderButtons=this.props.HeaderButtons;

        return (
            <div className="Header">
            <div className="Me-container">
            <img alt="test" className="Me" src="./assets/mig.jpg"></img>
            </div>            
                <this.Buttons HeaderButtons={HeaderButtons}></this.Buttons>
            </div>            
        )
    }
}


export default Header
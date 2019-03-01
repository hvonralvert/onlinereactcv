import React, { Component } from 'react';
import './App.css';

import Header from './header/header'
import Me from './router/pages/me/me';
import Chatt from './router/pages/chatt';
import FrontEnd from './router/pages/frontend/frontend';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {

  constructor(){
    super();

    this.state={
      HeaderButtons:[
        {
          Active:true,
          Text:'Mig',
          Link:'/'
        },
        {
          Active:false,
          Text:'Chatt',
          Link:'/chatt'
        },
        {
          Active:false,
          Text:'Front End',
          Link:'/frontend'
        },
        {
          Active:false,
          Text:'Om',
          Link:'/chatt'
        }
      ]
    }

    this.GoToPage=this.GoToPage.bind(this);
  }


  GoToPage(button){
    this.state.HeaderButtons.map(headerbutton=>{
      headerbutton.Active=button.Link===headerbutton.Link?true:false;
    })
  }
  

  render() {
    const HeaderButtons=this.state.HeaderButtons;
    const GoToPage=this.GoToPage;

    return (
      <Router>
        <div className="AppContainer">
        <Header GoToPage={GoToPage} HeaderButtons={HeaderButtons}></Header>
        <Route exact path="/" component={Me} />
        <Route exact path="/chatt" component={Chatt} />
        <Route exact path="/frontend" component={FrontEnd} />

        </div>
      </Router>

    );
  }
}

export default App;

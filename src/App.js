import React, { Component } from 'react';
import './App.css';

import Header from './header/header'
import Me from './router/pages/me';
import Chatt from './router/pages/chatt';

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
          Text:'Om'
        }
      ]
    }
  }

  render() {
    const HeaderButtons=this.state.HeaderButtons;

    return (
      <Router>
        <div className="AppContainer">
        <Header HeaderButtons={HeaderButtons}></Header>
        <Route exact path="/" component={Me} />
        <Route exact path="/Chatt" component={Chatt} />
        </div>
      </Router>

    );
  }
}

export default App;

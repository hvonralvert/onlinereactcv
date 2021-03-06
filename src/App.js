import React, { Component } from 'react';
import './App.css';

import Header from './header/header'
import MePage from './router/pages/me.page/me.page';
import ChattPage from './router/pages/chatt.page/chatt.page';
import FrontEndPage from './router/pages/frontend.page/frontend.page';
import {OtherPage}  from './router/pages/other.page/other.page';
import {CvPage}  from './router/pages/cv.page/cv.page';

import { LoginModal } from './modals/login.modal/login.modal';

import {CV} from './components/cv/cv';

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {

  constructor(){
    console.log('construcotr in app.js')
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
          Text:'Övrigt',
          Link:'/OtherPage'
        },
        {
          Active:false,
          Text:'CV',
          Link:'/CvPage'
        }
      ],
      OpenLoginModal:false
    }

    this.GoToPage=this.GoToPage.bind(this);
    this.openLogin=this.openLogin.bind(this);
    this.closeLogin=this.closeLogin.bind(this);
  }


  GoToPage(button){
    this.state.HeaderButtons.map(headerbutton=>{
      headerbutton.Active=button.Link===headerbutton.Link?true:false;
    })
  }


  openLogin(){
    console.log('openlogin')
    this.setState({
      OpenLoginModal:true
    })
  }


  closeLogin(){
    console.log('closeLogin')
    this.setState({
      OpenLoginModal:false
    })
  }
  

  render() {
    const HeaderButtons=this.state.HeaderButtons;
    const OpenLoginModal=this.state.OpenLoginModal;
    const closeLogin=this.closeLogin;
    const openLogin=this.openLogin;
    const GoToPage=this.GoToPage;

    return (
      <Router>
        <div className="AppContainer">
        <div className="CV-mainpage-wrapper">
            <div className="CV-mainpage-container">
              <CV></CV>
           </div>
          </div>
          {OpenLoginModal && <LoginModal closeLogin={closeLogin}></LoginModal>}          
          <Header openLogin={openLogin} GoToPage={GoToPage} HeaderButtons={HeaderButtons}></Header>
          <Route exact path="/" component={MePage} />
          <Route exact path="/chatt" component={ChattPage} />
          <Route exact path="/frontend" component={FrontEndPage} />
          <Route exact path="/OtherPage" component={OtherPage} />
          <Route exact path="/CvPage" component={CvPage} />
        </div>
      </Router>

    );
  }
}

export default App;

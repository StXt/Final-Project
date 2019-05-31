import React, { Component } from 'react';
import isUser from '../functions/isUser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Redirect } from 'react-router-dom';
import {history} from '../components/react-history';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.loginForm = (
      <form className="loginForm">
        <label id="enterLogin">Логін: <input type="text"/></label>
        <label  id="enterPassword">Пароль: <input type="password"/></label>
        <button onClick={this.combinedFunc} className="btn">Увійти</button>
        <button onClick={this.goBack} className="btn">Зареєструватися</button>
      </form>
    );

    this.loginFail = (
      <div className="loginForm">
        {this.loginForm}
        <div className="failMessage">Невірний логін або пароль. Повторіть введення.</div>
      </div>
    )

    this.state = {
      isEnter: false
    }
  }
  
  goBack = (e) => {
    e.preventDefault();
    history.push('/login');
    this.setState({back: true});
    
  }

  combinedFunc = (e) => {
    e.preventDefault();
    let login = document.forms[0].elements[0].value;
    let password = document.forms[0].elements[1].value;
    
    if(isUser(login, password)) {
      console.log('isEnter: true');
      this.setState({isEnter: true});
    } else {
      console.log('isEnter: false');
      this.setState({
        isEnter: false,
        isFailed: true
        })
    }
  }

   
  render() {
    if (this.state.back === true) {
      history.push('/login');
      return (
        <Redirect to="/sign-up" />
      )
    }

    if (this.state.isEnter) {
      history.push('/login');
      return (
        <Redirect to="/test-set"/>
      )
    } else if (this.state.isFailed === true) {
      return (
        <div className="home">
        <div className="head-main">
          <div className="header-container">
            <Header />
          </div>
          <div className="main-container">
            {this.loginFail}
          </div>
        </div>
        <div className="footer-container">
          <Footer />
        </div>
      </div>
      )
    } else {
      return (
        <div className="home">
          <div className="head-main">
            <div className="header-container">
              <Header />
            </div>
            <div className="main-container">
              {this.loginForm}
            </div>
          </div>
          <div className="footer-container">
            <Footer />
          </div>
        </div>
      )
    }
  }
}
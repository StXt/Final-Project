import React, { Component } from 'react';
import isUser from '../functions/isUser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
  state = {
    isEnter: false
  }

  combinedFunc = (e) => {
    e.preventDefault();
    let login = document.forms[0].elements[0].value;
    let password = document.forms[0].elements[1].value;

    if(isUser(login, password)) {
      this.setState({isEnter: true});
    } else {
      this.setState({
        isEnter: false,
        isFailed: true
        })
    }
  }

   
  render() {
    if (this.state.isEnter) {
      return (
        <Redirect to="/test-set"/>
      )
    } else if (this.state.isFailed === true) {
      return (
        <div id="loginPage">
          <Header />
          <div className="loginForm">
            <form>
              <label>Логін: <input type="text" id="enterLogin"/></label>
              <label>Пароль: <input type="password" id="enterPassword"/></label>
              <button onClick={this.combinedFunc}>Увійти</button>
            </form>
            <div>Невірний логін або пароль. Повторіть введення.</div>
          </div>
          <Footer />
        </div>
      )
    } else {
      return (
        <div id="loginPage">
          <Header />
          <form className="loginForm">
            <label id="enterLogin">Логін: <input type="text"/></label>
            <label  id="enterPassword">Пароль:<input type="password"/></label>
            <button onClick={this.combinedFunc}>Увійти</button>
          </form>
          <Footer />
        </div>
      )
    }
  }
}
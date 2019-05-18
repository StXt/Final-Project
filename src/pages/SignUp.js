import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import addUser from '../functions/addUser';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    
    this.form = (
      <form id="signUp">
        <label>Ім'я<input type="text" name="firstName" id="firstName" /></label>
        <label>Прізвище<input type="text" name="lastName" id="lastName" /></label>
        <label>Логін<input type="text" name="login" id="login" /></label>
        <label>Пароль<input type="password" name="password" id="password" /></label>
        <label>Повторіть пароль<input type="password" name="password" id="checkPassword" /></label>
        <button onClick={this.combinedFunc} className="btn">
          Зберегти
        </button>
        <button onClick={this.goBack} className="btn">
          Повернутись
        </button>
      </form>
    );

    this.state = {
      isRegister: false
    };
  }

  goBack = (e) => {
    e.preventDefault();
    this.setState({back: true});
  }


  combinedFunc = (e) => {
    e.preventDefault();

    let isAdded = addUser();
    alert(isAdded);

    if (isAdded) {
      this.setState({isRegister: true});
    }
  }

  render() {    
    if(this.state.isRegister === true) {
      return (
        <Redirect to='/test-set' />
      )
    }

    if (this.state.back === true) {
      return (
        <Redirect to="/" />
      )
    }

    return (
      <div className="home">
        <div className="head-main">
          <div className="header-container">
            <Header />
          </div>
          <div className="main-container">
            {this.form}
          </div>
        </div>
        <div className="footer-container">
          <Footer />
        </div>
      </div>
    )
  }
}
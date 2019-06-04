import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import addUser from '../functions/addUser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {history} from '../components/react-history';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    
    this.form = (
      <form id="signUp">
        <label>
          <span>Ім'я</span>
          <input type="text" name="firstName" id="firstName" placeholder="Name"/>
        </label>
        <label>
          <span>Прізвище</span>
          <input type="text" name="lastName" id="lastName" placeholder="Last name"/>
        </label>
        <label>
          <span>Логін</span>
          <input type="text" name="login" id="login" placeholder="Login"/>
        </label>
        <label>
          <span>Пароль</span>
          <input type="password" name="password" id="password" placeholder="password"/>
        </label>
        <label>
          <span>Повторіть пароль</span>
          <input type="password" name="password" id="checkPassword" placeholder="password"/>
        </label>
        <button onClick={this.combinedFunc} className="btn">
          Зберегти
        </button>
        <button onClick={this.goBack} className="btn">
          Увійти
        </button>
      </form>
    );

    this.state = {
      isRegister: null
    };
  }

  goBack = (e) => {
    e.preventDefault();
    history.push('/sign-up');
    this.setState({back: true});
  }


  combinedFunc = (e) => {
    e.preventDefault();

    let isAdded = addUser(); // виконається в будь-якому випадку 
    
    if (isAdded) { // буде true/false
      this.setState({isRegister: true});
    }
  }

  render() {    
    if(this.state.isRegister === true) {
      
      return (
        <Redirect to='/test-set' />
      )
    }

    if (this.state.isRegister === false) {
      return (// Компонент форми + Fail div
        <Redirect to="/login" />
      )
    }

    if (this.state.back === true) {
      return (
        <Redirect to="/login" />
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
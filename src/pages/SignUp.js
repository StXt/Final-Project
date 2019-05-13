import React, { Component } from 'react';
import addUser from '../functions/addUser';
import TestSet from './TestSet';
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
          <button onClick={this.combinedFunc}>
            Зберегти
          </button>
        </form>
    );

    this.state = {
      isRegister: false
    };
  }

  combinedFunc = () => {
    let isAdded = addUser();
    alert('middle');

    if (isAdded) {
      this.setState({isRegister: true});
    }
  }

  render() {    
    if(this.state.isRegister) {
      return (
      <div class="testSet">
        <h1>Ви успішно зареєструвались.</h1> 
        <TestSet />
      </div>
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
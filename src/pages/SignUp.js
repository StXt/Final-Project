import React, { Component } from 'react';
import addUser from '../functions/addUser';
import TestSet from './TestSet';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    
    this.form = (
      <React.Fragment>
        <form id="signUp" action="">
          <label>Ім'я<input type="text" name="firstName" id="firstName" /></label>
          <label>Прізвище<input type="text" name="lastName" id="lastName" /></label>
          <label>Логін<input type="text" name="login" id="login" /></label>
          <label>Пароль<input type="password" name="password" id="password" /></label>
          <label>Повторіть пароль<input type="password" name="password" id="checkPassword" /></label>
          <button onClick={this.combinedFunc}>Зберегти</button>
        </form>
      </React.Fragment>
    );
    
    this.state = {
      isRegister: false
    };
  }

  combinedFunc = () => {
    addUser();
    alert('middle');
    this.setState({isRegister: true});
  }

  render() {    
    if(this.state.isRegister) {
      return <TestSet />
    }
    return this.form;
  }
}
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { history } from '../../../../common/react-history';
import isUser from '../../../../functions/isUser';

class Login extends Component {
  constructor(props) {
    super(props);

    this.loginForm = (
      <form className="loginForm">
        <label id="enterLogin">
          <span>Логін: </span>
          <input type="text" placeholder="Login"/>
        </label>
        <label  id="enterPassword">
          <span>Пароль: </span>
          <input type="password" placeholder="password"/>
        </label>
        <div className="buttons">
          <button onClick={this.combinedFunc} className="btn">Увійти</button>
          <button onClick={this.goBack} className="btn">Зареєструватися</button>
        </div>
      </form>
    );

    this.loginFail = (
      <div>
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
      let userKey = `${login} | ${password}`;
      localStorage.setItem('currentUser', userKey);
      console.log('isEnter: true');
      this.setState({isEnter: true});
    } else {
      console.log('isEnter: false');
      this.setState({
        isEnter: false,
        isFailed: true
      });
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
    } else if (this.state.isFailed) {
      return this.loginFail;
    } else {
      return this.loginForm;
    }
  }
}

export default Login;
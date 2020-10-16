import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import history from '../../../../history';
import './login-component.css';
import isUser from '../../../../functions/isUser';
import FormField from '../../../../common/form-field-component/form-field-component';
import Button from '../../../../common/button-components/button-component';

class Login extends Component {
  constructor(props) {
    super(props);

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
    history.goBack();
  }

  combinedFunc = (e) => {
    e.preventDefault();
    let login = document.forms[0].elements[0].value;
    let password = document.forms[0].elements[1].value;
    
    if(isUser(login, password)) {
      let userKey = `${login} | ${password}`;
      localStorage.setItem('currentUser', userKey);
      this.setState({isEnter: true});
    } else {
      this.setState({
        isEnter: false,
        isFailed: true
      });
    }
  }

  render() {
/*     if (this.state.back) {
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
    } else { */
    return (
      <form className="login-form">
        <FormField 
          showedName={'Логін'}
          type={'text'}
          name={'login'}
          placeholder={'Login'} />

        <FormField 
          showedName={'Пароль'}
          type={'password'}
          name={'password'}
          placeholder={'Password'} />

        <div className="login-form__buttons">
          <Button name={'Назад'} handleClick={this.goBack} />
          <Button name={'Увійти'} handleClick={this.combinedFunc} />
        </div>
      </form>
    );
  }
}

export default Login;
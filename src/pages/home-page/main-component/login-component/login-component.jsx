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
      isEntered: false,
      isFailed: false,
      login: '',
      password: '',
    }
  }
  
  goBack = (e) => {
    e.preventDefault();
    history.goBack();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let login = document.forms[0].elements[0].value;
    let password = document.forms[0].elements[1].value;
    
    if(isUser(login, password)) {
      let userKey = `${login} | ${password}`;
      localStorage.setItem('currentUser', userKey);
      console.log('hi 38');
      this.setState({isEnter: true});
    } else {
      this.setState({
        isFailed: true,
      });
    }
  }

  handleChange = (field, e) => {
    this.setState({[field]: e.target.value });
  }

  render() {
    if (this.state.isEnter) {
      history.push('/test-set');
      history.goForward();
    }

    return (
      <form className="login-form">
        <FormField 
          name={'login'}
          placeholder={'Login'}
          showedName={'Логін'}
          type={'text'}
          value={this.state.login}
          handleChange={(e) => this.handleChange('login', e)}         
          />
        <FormField 
          name={'password'}
          placeholder={'Password'} 
          showedName={'Пароль'}
          type={'password'}
          value={this.state.password}
          handleChange={(e) => this.handleChange('password', e)}
          />

        {this.state.isFailed &&  
          <div>
            Невірний логін або пароль
          </div>
        }

        <div className="login-form__buttons">
          <Button name={'Назад'} handleClick={this.goBack} />
          <Button name={'Увійти'} handleClick={this.handleSubmit} />
        </div>
      </form>
    );
  }
}

export default Login;
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { history } from '../../../../common/react-history';
import addUser from '../../../../functions/addUser';

class SignUp extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isRegister: false,
    };

    this.combinedFunc = this.combinedFunc.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  goBack(e) {
    e.preventDefault();
    history.push('/sign-up');
    this.setState({back: true});
  }


  combinedFunc(e) {
    e.preventDefault();
    let isAdded = addUser(); // is launched in any case 
    
    if (isAdded) { // will be true/false
      this.setState({isRegister: true});
    }
  }

  render() {    
/*     if(this.state.isRegister) {
      return (
        <Redirect to='/test-set' />
      );
    }

    if (!this.state.isRegister) {
      return (// Form component + Fail div
        <Redirect to="/login" />
      );
    }

    if (this.state.back === true) {
      return (
        <Redirect to="/login" />
      );
    } */

    return (
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
        <div className="buttons">
          <button onClick={this.combinedFunc} className="btn">
            Зберегти
          </button>
          <button onClick={this.goBack} className="btn">
            Увійти
          </button>
          </div>
      </form>
    );
  }
}

export default SignUp;
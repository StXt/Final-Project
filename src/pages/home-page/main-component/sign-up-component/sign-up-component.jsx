import React, { Component } from 'react';
import './sign-up-component.css';

import { Redirect } from 'react-router-dom';
import { history } from '../../../../common/react-history';
import addUser from '../../../../functions/addUser';
import { signUpFields } from '../../../../assets/sign-up-fields';
import FormField from '../../../../common/form-field-component/form-field-component';
import Button from '../../../../common/button-components/button-component';

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
      <form className="sign-up">
        {signUpFields.map((field) => <FormField {...field} />)}
        <div className="sign-up__buttons">
          <Button name={'Зберегти'} onClick={this.combinedFunc} />
          <Button name={'Назад'} onClick={this.goBack} />  
        </div>
      </form>
    );
  }
}

export default SignUp;
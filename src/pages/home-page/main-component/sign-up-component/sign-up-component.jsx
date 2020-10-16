import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import history from '../../../../history';
import './sign-up-component.css';

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

    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  goBack(e) {
    e.preventDefault();
    history.goBack();
  }

  handleSubmit(e) {
    e.preventDefault();
    let isAdded = addUser(); // is launched in any case 
    
    if (isAdded) { // will be true/false
      this.setState({isRegister: true});
    }
  }

  render() {
    if(this.state.isRegister) {
      return (
        <Redirect to='/test-set' />
      );
    }

    return (
      <form className="sign-up">
        <div className="sign-up__fields">
          {signUpFields.map((fieldProps) => <FormField {...fieldProps} key={fieldProps.id} />)}
        </div>
        <div className="sign-up__buttons">
          <Button name={'Назад'} handleClick={this.goBack} />
          <Button name={'Зберегти'} handleClick={this.handleSubmit} />  
        </div>
      </form>
    );
  }
}

export default SignUp;
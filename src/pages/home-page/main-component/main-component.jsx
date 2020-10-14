import React, { Component } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import './main-component.css';

import Welcome from './welcome-component/welcome-component';
import Login from './login-component/login-component';
import SignUp from './sign-up-component/sign-up-component';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route path="/sign-up" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Welcome} />
      </Switch>
    );
  };
}

export default Main;
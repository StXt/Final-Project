import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import TestSet from './pages/TestSet';

class App extends Component {
  state = {
    page: 'Home'
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/sign-up' component={SignUp}/>
        <Route exact path='/test-set' component={TestSet}/>
      </Switch>
    );
  }
}

export default App;

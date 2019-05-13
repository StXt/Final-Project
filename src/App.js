import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import TestSet from './pages/TestSet';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/sign-up' component={SignUp}/>
        <Route path='/test-set' component={TestSet}/> 
      </Switch>
    );
  }
}

export default App;

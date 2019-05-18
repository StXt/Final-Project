import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import TestSet from './pages/TestSet';
import TestGround from './pages/TestGround';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/sign-up' component={SignUp}/>
        <Route path='/test-set' component={TestSet}/> 
        <Route path='/test-ground' component={TestGround}/>
      </Switch>
    );
  }
}

export default App;

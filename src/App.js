import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import TestSet from './pages/TestSetPage';
import TestGround from './pages/TestPage';
import TestResult from './pages/TestResult';
import HeaderSlider from './pages/Slider/HeaderSlider';
import TestParameters from './pages/TestParameters';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/sign-up' component={SignUp}/>
        <Route path='/test-set' component={TestSet}/> 
        <Route path='/test-parameters' component={TestParameters}/> 
        <Route path='/test-page' component={TestGround}/>
        <Route path='/test-result' component={TestResult}/>
        <Route path='/slider' component={HeaderSlider}/>
      </Switch>
    );
  }
}

export default App;

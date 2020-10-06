import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home-page/home-page';
import Login from './pages/login';
import SignUp from './pages/home-page/sign-up-component/sign-up';
import TestSet from './pages/testing-set-page';
import TestGround from './pages/testing-page';
import TestResult from './pages/testing-result';
import TestParameters from './pages/testing-parameters';
import AboutUs from './pages/about-us';
import Stats from './pages/stats';
import Profile from './pages/profile';

class App extends Component {
  render() {
    return (
      <BrowserRouter>     
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/login' component={Login}/>
          <Route path='/sign-up' component={SignUp}/>
          <Route path='/test-set' component={TestSet}/> 
          <Route path='/test-parameters' component={TestParameters}/> 
          <Route path='/test-page' component={TestGround}/>
          <Route path='/test-result' component={TestResult}/>
          <Route path='/about-us' component={AboutUs}/>
          <Route path='/stats' component={Stats}/>
          <Route path='/profile' component={Profile}/>     
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

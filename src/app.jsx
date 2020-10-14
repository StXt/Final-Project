import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import HomePage from './pages/home-page/home-page';

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
      <Router>     
        <Switch>
          <Route path='/about-us' component={AboutUs}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/test-set' component={TestSet}/> 
          <Route path='/test-parameters' component={TestParameters}/> 
          <Route path='/test-page' component={TestGround}/>
          <Route path='/test-result' component={TestResult}/>          
          <Route path='/stats' component={Stats}/>          
          <Route path='/' component={HomePage}/>     
        </Switch>
      </Router>
    );
  }
}

export default App;

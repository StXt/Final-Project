import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import TestPrepared from '../common/TestPrepared';
import Timer from '../common/Timer';
import Footer from '../common/footer-component/footer';

export default class TestPage extends Component {
  getChapterName() {
    return localStorage.testStackName;
  }
  
  render() {
    if (localStorage.currentUser === "") {
      return (
        <Redirect to="/" />
      )
    }

    let mixedTestStack = localStorage.mixedTestStack;
    mixedTestStack = JSON.parse(mixedTestStack);

    return (
      <div className="testPage">
        <div>
          <h1>Обраний тест: {this.getChapterName()}</h1>
          <Timer />
        </div>
        <div className="testDesk">
          <TestPrepared tests={mixedTestStack}/>
        </div>
        <div className="footer-container">
          <Footer />
        </div>                
      </div>
    )
  }
}
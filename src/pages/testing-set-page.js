import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import TestSetArea from '../common/TestSetArea';
import Footer from '../common/footer-component/footer-component';
import Menu from '../common/Menu';
 
export default class TestSet extends Component {
  render() {
    if (localStorage.currentUser === "") {
      return (
        <Redirect to="/" />
      )
    }

    return (
      <div className="testSet">
        <Menu />
        <div>
          <h1 className='testudy'>Testudy</h1>
          {/* <img src={attandance} alt="little logo"  /> */}
          <TestSetArea />
          <div className="footer-container">
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}
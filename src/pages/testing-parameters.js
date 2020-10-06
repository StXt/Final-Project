import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Footer from '../common/footer-component/footer';
import Menu from '../common/Menu';
import ParametersForm from '../common/ParametersForm';

export default class TestParameters extends Component {  
  render() {
    if (localStorage.currentUser === "") {
      return (
        <Redirect to="/" />
      )
    }

    return (
      <div className="testParameters">
        <Menu />
        <section>
          <h1 className='testudy'>Testudy</h1>
          {/* <img src={attandance} alt="little logo"  /> */}
          <ParametersForm />
          <div className="footer-container">
            <Footer />
          </div>
        </section>
      </div>
    )
  }
}

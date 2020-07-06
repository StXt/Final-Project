import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import ParametersForm from '../components/ParametersForm';

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

import React, { Component } from 'react';
import Main from '../components/Main';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import '../styles/style.css';

export default class Home extends Component {
    render() {
      return (
          <React.Fragment>
            <Header />
            <Menu />
            <Main />
            <Footer />
          </React.Fragment>
      );
    }
  }
import React, { Component } from 'react';
import '../styles/style.css';
import '../styles/tablet.css';
import '../styles/mobile.css';
import '../styles/mobile.min.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="head-main">
          <div className="header-container">
            <Header />
          </div>
          <div className="main-container">
            <Main />
          </div>
        </div>
        <div className="footer-container">
          <Footer />
        </div>
      </div>
    );
  }
}
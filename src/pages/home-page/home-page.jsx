import React, { Component } from 'react';
import Header from '../../common/header-component/header-component';
import Main from './main-component/main-component';
import Footer from '../../common/footer-component/footer-component';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'main',
    };

    this.changePage = this.changePage.bind(this);
  }

  changePage(pageName) {
    this.setState({
      page: pageName,
    });
  }

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
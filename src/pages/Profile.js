import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { history } from '../common/react-history';

import Footer from '../common/footer-component/footer-component';
import Menu from '../common/Menu';

export default class Profile extends Component {
  state = {
    isLeaved: false
  };

  leaveProfile = () => {
    localStorage.setItem('currentUser' , '');
    this.setState({
      isLeaved: true
    });
  }
    
  render() {
    if (localStorage.currentUser === "") {
      return (
        <Redirect to="/" />
      )
    }

    if (this.state.isLeaved === true) {
      history.length = 0;
      return(
        <Redirect to="/" />
      ) 
    }

    const profileEntryData = localStorage.currentUser;
    const profile = JSON.parse(localStorage[profileEntryData]);
    return (
      <div className="ordinaryPages profile">
        <Menu />
        <div className="ordinaryContainer">
          <h1> Профіль</h1>
          <div className="profileData">
            <h2>Ім'я: <span>{profile.firstName}</span></h2>
            <h2>Прізвище: <span>{profile.lastName}</span></h2>
            <h2>Логін: <span>{profile.login}</span></h2>
            <h2>Пароль: <span>{profile.password}</span></h2>
          </div>
          <button className="btn" onClick={this.leaveProfile} >Вийти</button>
          <div className="footer-container">
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}
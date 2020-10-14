import React, { Component } from 'react';
import './header-component.css';

class Header extends Component {
  render() {      
    return (
      <header className="header">
        <h1 className="header__title">Testudy</h1>
        <q className="header__motto header__motto_gradient">
          Nosce te ipsum
        </q>
        <br/>
        <div className="header__author header__author_gradient">
          Socrates
        </div>
      </header>
    );
  }
}

export default Header;
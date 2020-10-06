import React, { Component } from 'react';
import './main-component.css';
import LinkedButton from '../../../common/button-components/linked-button-component';

class Main extends Component {
  render() {
    return (
      <section className="main">
        <h1 className="main__heading">Вітаємо на Testudy!</h1>
        <p className="main__text">
          Якщо знання - це сила, то Testudy - спортмайдан, де ви можете нею помірятись. 
          Testudy - місце, що допоможе Вам визначити актуальний рівень своїх знань у найрізноманітніших
          сферах і отримати правильні рекомендації, щодо їх процвітання.
        </p>
        <div className="main__buttons">
          <LinkedButton to={'/sign-up'} name={'Зареєструватися'} />
          <LinkedButton to={'/login'} name={'Увійти'} />
        </div>
      </section>
    )
  };
}

export default Main;
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import Menu from '../components/Menu';

export default class AboutUs extends Component {
  mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.24442002116!2d28.40931923173037!3d49.23385498530954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5c5eb3978a07%3A0x591bf4ded045dfa!2z0JLQuNC90L3QuNGG0LrQuNC5INC90LDRhtC40L7QvdCw0LvRjNC90YvQuSDRgtC10YXQvdC40YfQtdGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YI!5e0!3m2!1sru!2sua!4v1559637264037!5m2!1sru!2sua';

  render() {
    if (localStorage.currentUser === "") {
      return (
        <Redirect to="/" />
      )
    }

    return (
      <div className="ordinaryPages aboutUs">
        <Menu />
        <div className="ordinaryContainer">
          <h1> Про нас</h1>
          <div className="aboutText">
            <p>Сайт створений з метою перевірки знань та підвищення освітнього рівня аудиторії, та зацікавленості у власному саморозвитку і носить виключно некомерційний освітній характер. Всі дані, що вводяться на сайті, використовуються лише для роботи самого сайту, та не передаються стороннім особам. Всі права захищено.</p>
            <span className="aboutContacts" >Aвтор проекту: <span>Станіслав Доманський</span></span>
            <span className="aboutContacts">Служба підтримки: 
              <a href="mailto:stas.domanskiy@gmail.com?subject=The%20subject%20of%20the%20mail" className=""> stas.domanskiy@gmail.com</a>
            </span>
            <span className="aboutContacts">Адреса: 
              <address>Хмельницьке шосе, 95, Вінниця, Вінницька область, 21000</address>
            </span>
          </div>
          <div className="map">
            <iframe src={this.mapUrl} frameborder="0" style={{border:0}} allowFullScreen title="Вінниця"></iframe>
          </div>

          <div className="footer-container">
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}
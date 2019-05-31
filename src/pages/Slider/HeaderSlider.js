import React, { Component } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';
import '../../styles/style.css';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Footer from '../../components/Footer';

export default class HeaderSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 1000,
      adaptiveHeight: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      dots: false,
      arrows: true
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div>
            <img className="img-item" src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img className="img-item" src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img className="img-item" src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img className="img-item" src="http://placekitten.com/g/400/200" />
          </div>
        </Slider>
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
      </div>
    );
  }
}
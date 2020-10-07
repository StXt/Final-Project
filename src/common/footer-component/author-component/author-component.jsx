import React from 'react';
import './author-component.css';

export default function Author() {
  return (
    <div className="footer__author">
      <span className="footer__description">
        Written by{' '} 
        <a className="footer__name" href="mailto:st_dom@gmail.com">Stas Domanskyi</a>
        {' '}&#169;2019-2020
      </span>
    </div>
  );
}
import React from 'react';
import './footer-component.css';
import Author from './author-component/author-component';
import SocialIcons from './social-icons-component/social-icons-component';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <SocialIcons />
        <Author />
      </footer>
    )
  }
}

export default Footer;
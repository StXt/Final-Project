import React from 'react';
import facebook from '../images/icons/facebook.png';
import twitter from '../images/icons/twitter.png';
import whatsapp from '../images/icons/whatsapp.png';
import instagram from '../images/icons/instagram.png';

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="icons">
                    <img src={facebook} alt="fb" className="socialIcon"/>
                    <img src={twitter} alt="fb" className="socialIcon"/>
                    <img src={whatsapp} alt="fb" className="socialIcon"/>
                    <img src={instagram} alt="fb" className="socialIcon"/>
                </div>
                <div id="author">
                    <span>Written by <a href="mailto:st_dom@gmail.com">Stas Domanskyi</a></span>
                    <span >All rights reserved ®</span>
                </div>
            </footer>
        )
    }
}
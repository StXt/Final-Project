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
                    <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.3"></script>
                    <a target="http://localhost:3000" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A3000%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">
                    <img src={facebook} alt="fb" className="socialIcon"/>
                    </a>
                    
                    <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-show-count="false">
                        <img src={twitter} alt="fb" className="socialIcon"/>    
                    </a>
                    <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8">
                    </script>
                    <a href="https://api.whatsapp.com/send?text=%20http%3A%2F%2Flocalhost%3A3000%2Ftest-ground#">
                        <img src={whatsapp} alt="fb" className="socialIcon"/>
                    </a>
                    <script async src="https://static.addtoany.com/menu/page.js"></script>                
                    <a href="https://www.instagram.com/">
                        <img src={instagram} alt="fb" className="socialIcon"/>
                    </a>
                </div>
                <div id="author">
                    <span>Written by <a href="mailto:st_dom@gmail.com">Stas Domanskyi</a></span>
                    <span >All rights reserved ®</span>
                </div>
            </footer>
        )
    }
}
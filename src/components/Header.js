import React from 'react';


class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <h1 className="testudy">Testudy</h1>
                <h3 id='home-h3'>
                    <em>"Nosce te ipsum"</em><br/>
                        <span id="socrates"><em>Socrates</em></span>
                    
                </h3>
            </header>
        );
    }
}


export default Header;
import React, {Component} from 'react';

export default class Header extends Component {


    render() {      
        return (
            <header id="header">
                <h1 className="testudy">Testudy</h1>
                <h3 id='home-h3'>
                    <em>"Nosce te ipsum"</em>
                    <br/>
                    <span id="socrates"><em>Socrates</em></span>
                </h3>
            </header>
        );
    }
}
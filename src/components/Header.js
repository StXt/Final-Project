import React, {Component} from 'react';
import Slider from './Slider';
import '../styles/mobile.css';

export default class Header extends Component {


    render() {      
        const [left,right] = ['left', 'right'];
        return (
            <header id="header">
                <h1 className="testudy">Testudy</h1>
                <h3 id='home-h3'>
                    <em>"Nosce te ipsum"</em>
                    <br/>
                    <span id="socrates"><em>Socrates</em></span>
                </h3>
                <Slider />
            </header>
        );
    }
}
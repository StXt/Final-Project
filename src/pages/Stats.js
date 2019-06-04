import React, { Component } from 'react';
import Footer from '../components/Footer';
import Menu from '../components/Menu';

export default class Stats extends Component {
    render() {
        return (
            <div className="ordinaryPages stats">
                <Menu />
                <div className="ordinaryContainer">
                    <h1>Статистика</h1>
                    
                    <button className="btn" onClick={}></button>
                    <div className="footer-container">
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}
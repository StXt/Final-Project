import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../styles/mobile.css';

class Main extends Component {
    render() {
        return (
            <section id="main">
                <h1>Вітаємо на Testudy!</h1>
                <p id="main-text">Якщо знання - це сила, то Testudy - спортмайдан, де ви можете нею помірятись. 
                Testudy - місце, що допоможе Вам визначити актуальний рівень своїх знань у найрізноманітніших
                сферах і отримати правильні рекомендації, щодо їх процвітання.</p>
                <Link to="/sign-up">
                    <button className="btn">Зареєструватися</button>
                </Link>
                <Link to="/login">
                    <button className="btn">Увійти</button>    
                </Link>
            </section>
        )
    };
}

export default Main;
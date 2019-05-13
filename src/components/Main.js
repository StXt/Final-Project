import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';

class Main extends Component {
    /* state = {
        value: 'initial'
    }

    onSignUp = () => {
        this.setState({value: 'signUp'});
    }

    onLogin = () => {
        this.setState({value: 'login'});
    } */


    render() {
       /*  if (this.state.value === 'signUp') {
            return (
                <SignUp />
            )
        } else if (this.state.value === 'login') {
            return (
                <Login />
            )
        } else { */
        return (
            <section id="main">
                <h1>Вітаємо на Testudy!</h1>

                <p id="main-text">Якщо знання - це сила, то Testudy - спортмайдан, де ви можете нею помірятись. 
                Testudy - місце, що допоможе Вам визначити актуальний рівень своїх знань у найрізноманітніших
                сферах і отримати правильні рекомендації, щодо їх процвітання.</p>
                <Link to="/sign-up">
                    <button className="btn" >Зареєструватися</button>
                </Link>
                <Link to="/login">
                    <button className="btn" >Увійти</button>    
                </Link>
            </section>
        )
    };
}

export default Main;
import React, { Component } from 'react';
import Footer from '../components/Footer';
import CorrectAnswer from '../components/CorrectAnswer';

export default class TestResult extends Component {
    constructor(props) {
        super(props);
        
        this.buttonText = 'Показати відповіді';
        
        this.state = {
            displayed: false
        }
    }

    toggleAnswers = () => {
        if (this.state.displayed === false) {
            this.buttonText = 'Приховати відповіді';
            this.setState({displayed: true});
            return;
        }

        if (this.state.displayed === true) {
            this.buttonText = 'Показати відповіді';
            this.setState({displayed: false});
            return;
        }
    }

    parseAnswers = () => {
        let correctArr = JSON.parse(localStorage.correctAnswers);
        let correctList = correctArr.map(
            (props) => {
                return <CorrectAnswer correct={props}/>
            }
        );
        return correctList;
    }

    render() {
        const answers = this.state.displayed && <section>{this.parseAnswers()}</section>; // Замінити цю частину
        return (
            <div className="testResult">
                <h1>Ваш результат: <span>{+localStorage.correctCounter / +localStorage.testAmount * 100}%</span></h1>
                <button className="btn" onClick={this.toggleAnswers}>{this.buttonText}</button>
                {answers}
                <div className="footer-container">
                    <Footer />
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react';
import Footer from '../components/Footer';

export default class TestResult extends Component {
    constructor(props) {
        super(props);
        
        this.buttonText = 'Показати відповіді';

        this.state = {
            displayed: false
        }

        this.correctAnswer = (
            <div>
                <p>this.props.correctArr.question</p>
                
            </div>
        )
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
        let correctTemplate
    }

    render() {
        const answers = this.state.displayed && <section>this.props.answers</section>;
        return (
            <div className="testResult">
                <h2>Ваш результат: <span>{+localStorage.correctCounter / 40 * 100}%</span></h2>
                <button className="btn" onClick={this.toggleAnswers}>{this.buttonText}</button>
                {answers}
                <div className="footer-container">
                    <Footer />
                </div>
            </div>
        )
    }
}

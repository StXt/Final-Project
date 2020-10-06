import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Menu from '../common/Menu';
import Footer from '../common/footer-component/footer';
import CorrectAnswer from '../common/correct-answer';

export default class TestResult extends Component {
  constructor(props) {
    super(props);
    
    this.buttonText = 'Показати відповіді';
    
    this.state = {
      displayed: false
    }
  }

  toggleAnswers() {
    if (this.state.displayed === false) {
      this.buttonText = 'Приховати відповіді';
      this.setState({displayed: true});
      return;
    } else {
      this.buttonText = 'Показати відповіді';
      this.setState({displayed: false});
      return;
    }
  }

  parseAnswers() {
    let correctArr = JSON.parse(localStorage.correctAnswers);
    let correctList = correctArr.map(props => <CorrectAnswer correct={props}/>);

    return correctList;
  }

  render() {
    if (localStorage.currentUser === "") {
      return (
        <Redirect to="/" />
      )
    }

    const answers = this.state.displayed && <section>{this.parseAnswers()}</section>; // Replace this part
    
    return (
      <div className="ordinaryPages testResult">
        <Menu />
        <div className="ordinaryContainer resultContainer">
          <h1>Ваш результат: 
            <span>{+localStorage.correctCounter / +localStorage.testAmount * 100}%</span>
          </h1>
          {this.recomendations}
          <button className="btn" onClick={this.toggleAnswers}>{this.buttonText}</button>
          {answers}
          <div className="footer-container">
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react';
import {history} from './react-history';
import { Redirect } from 'react-router-dom';

export default class ParametersForm extends Component {
  state = {
    choosed: false
  }

  setEndTime = () => {
    let testTime = document.getElementById('testTime').value;
    testTime = +testTime.substr(0, 2);
    
    let timeLeft = new Date(0);
    timeLeft = +timeLeft.setMinutes(testTime);
    
    let nowTimeMs = +new Date();
    let endTime = +new Date(nowTimeMs + timeLeft);
    localStorage.setItem('endTime', endTime); 
  }

  setTestAmount = () => {
    let testAmount = document.getElementById('testAmount').value;
    
    if (+testAmount > 40) {
      testAmount = 40;
    }
    
    if (+testAmount < 5) {
      testAmount = 5;
    }

    let mixedTestStack = JSON.parse(localStorage.mixedTestStack);
    let correctAnswers = JSON.parse(localStorage.correctAnswers);

    mixedTestStack.length = testAmount;
    correctAnswers.length = testAmount;
    
    mixedTestStack = JSON.stringify(mixedTestStack);
    correctAnswers = JSON.stringify(correctAnswers);
    
    localStorage.setItem('mixedTestStack', mixedTestStack);
    localStorage.setItem('correctAnswers', correctAnswers);
    localStorage.setItem('testAmount', testAmount);
  }
    
  modifyTestStack = (e) => {
    e.preventDefault();
    history.push('./test-parameters');
    this.setEndTime();
    this.setTestAmount();
    this.setState({choosed: true})
  }
    
  componentDidMount() {
    let btn = document.getElementsByClassName('btn')[0];
    btn.focus();
  }

  render() {
    if (this.state.choosed === true) return <Redirect to="/test-page" />;
      
    return (
      <div className="parametersWrapper">
        <h2>Оберіть параметри тесту</h2>
        <form className="parametersForm">
          <label><span>Час на тестування: </span>
            <select name="testTime" id="testTime">
              <option value="1">1 хвилина</option>
              <option value="5" selected>5 хвилин</option>
              <option value="10">10 хвилин</option>
              <option value="20">20 хвилин</option>
              <option value="40">40 хвилин</option>
            </select>
          </label>
          <label>
            <span>Кількість тестів:</span>
            <input type="number" name="testAmount" max="40" min="5" id="testAmount"/>
          </label>
          <button onClick={this.modifyTestStack} className="btn">Почати тест</button>
          </form>
      </div>
    )
  }
}
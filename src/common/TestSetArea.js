import React, { Component } from 'react';
import history from '../history';
import { Redirect } from 'react-router-dom';
import { geography } from '../assets/geography';
import { english } from '../assets/english';
import { programming } from '../assets/programming';
import { historyTest } from '../assets/historyTest';
import { law } from '../assets/law';
import { medicine } from '../assets/medicine';
import stirTests from '../functions/stirTests';

export default class TestArea extends Component {
  constructor(props) {
    super(props);

    this.choosenArray = [english, geography, historyTest, medicine, programming, law];
    this.chapterName = ['Aнглійська мова', 'Географія', 'Історія', 'Програмування', 'Правознавство'];
    this.state = {
      choosen: null
    }
  }

  initiateTest = (e) => {
    let target = e.target;

    while (target.className !== 'testContainer') {
      if (target.className === 'testCover') {
        let choosenTestStack = this.choosenArray[target.children[0].id];           
        let mixedTestStack = stirTests(choosenTestStack);
        mixedTestStack = JSON.stringify(mixedTestStack);
        localStorage.setItem('mixedTestStack', mixedTestStack);
        localStorage.setItem('testStackName', this.chapterName[target.childElementCount]);
        localStorage.setItem('currentTestNumber', 0);
        localStorage.setItem('correctCounter', 0);
        localStorage.setItem('wasClick', false);
        localStorage.setItem('endTime', +new Date()); // Correct the date, create intermediate page

        history.push('/test-set');
        this.setState({choosen: true});
        return;
      }
      
      target = target.parentNode;
    }        
  }

  changeColor = (e) => {
    let target = e.target;
    while (target.className !== 'testContainer') {
      if (target.className === 'testCover') {
        target.firstChild.style.color = '#092c24';
        return;
      }
      target = target.parentNode;
    }
  }
    
  render() {
    if (this.state.choosen) return <Redirect to="/test-parameters" />
    
    return (
      <section>
        <h2>Оберіть тест, який хочете пройти першим</h2>
        <div className="testContainer" onClick={this.initiateTest} onMouseEnter={this.changeColor}>
          <div className="testCover">
            <span className="testTitle" id="0">Англійська мова</span>
          </div>
          <div className="testCover">
            <span className="testTitle" id="1">Географія</span>
          </div>
          <div className="testCover">
            <span className="testTitle" id="2">Історія</span>
          </div>
          <div className="testCover">
            <span className="testTitle" id="3">Медицина</span>
          </div>
          <div className="testCover">
            <span className="testTitle" id="4">Програмування</span>
          </div>
          <div className="testCover">
            <span className="testTitle" id="5">Правознавство</span>
          </div>                  
        </div>
      </section>
    )
  } 
}
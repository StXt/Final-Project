import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {history} from './react-history';
import { geography } from '../data/geography';
import { english } from '../data/english';
import { programming } from '../data/programming';
import { historyTest } from '../data/historyTest';
import { law } from '../data/law';
import { medicine } from '../data/medicine';
import stirNumbers from '../functions/stirNumbers';

export default class TestArea extends Component {
    constructor(props) {
        super(props);

        this.choosenArray = [english, geography, historyTest, medicine, programming, law];
        this.chapterName = ['Aнглійська мова', 'Географія', 'Історія', 'Програмування', 'Правознавство'];
        this.state = {
            choosen: null
        }
    }
    
    stirTests = (testArray) => {
        let oldOrder = testArray.slice();
        let mixedTestStack = [];
        let mixedNumbers = stirNumbers(oldOrder.length); // Перемішали порядок тестів
        let correctAnswersArr = []; // Масив для збереження правильних відповідей

        for (let i = 0; i < mixedNumbers.length; i++) {
            correctAnswersArr[i] = {
                question: oldOrder[mixedNumbers[i]].question,
                answer: oldOrder[mixedNumbers[i]].answers[0]
            };
            // Для кожного теста перемішуємо відповіді
            let answersArray = oldOrder[mixedNumbers[i]].answers.slice();
            let correctAnswer = answersArray[0];
            let mixedAnswerNumbers = stirNumbers(answersArray.length);
            let mixedAnswers = [];
            for (let i = 0; i < mixedAnswerNumbers.length; i++) {
                mixedAnswers[i] = answersArray[mixedAnswerNumbers[i]];
            }
            
            let testUnit = {};
            testUnit.question = oldOrder[mixedNumbers[i]].question;
            testUnit.answers = mixedAnswers;
            testUnit.correct = correctAnswer;
            if ('imageSrc' in oldOrder[mixedNumbers[i]]) { 
                testUnit.imageSrc = oldOrder[mixedNumbers[i]].imageSrc;
                testUnit.imageAlt = oldOrder[mixedNumbers[i]].imageAlt;
            }
            mixedTestStack[i] = testUnit;
        }
        let correctAnswers = JSON.stringify(correctAnswersArr);
        localStorage.setItem('correctAnswers', correctAnswers);
        return mixedTestStack;
    }    

    initiateTest = (e) => {
        let target = e.target;
  
        while (target.className !== 'testContainer') {
            if (target.className === 'testCover') {
                let choosenTestStack = this.choosenArray[target.children[0].id];           
                let mixedTestStack = this.stirTests(choosenTestStack);
                mixedTestStack = JSON.stringify(mixedTestStack);
                localStorage.setItem('mixedTestStack', mixedTestStack);
                localStorage.setItem('testStackName', this.chapterName[target.childElementCount]);
                localStorage.setItem('currentTestNumber', 0);
                localStorage.setItem('correctCounter', 0);
                localStorage.setItem('wasClick', false);

                history.push('/test-set');
                this.setState({choosen: true});
                return;
            }
            target = target.parentNode;
        }        
    }
    
    render() {
        if (this.state.choosen) {
            return (
                <Redirect to="/test-page" />
            )
        }

        return (
            <div className="testContainer" onClick={this.initiateTest}>
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
        )
    }
}
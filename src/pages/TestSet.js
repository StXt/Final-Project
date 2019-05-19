import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { geography } from '../data/geography';
import { english } from '../data/english';
import { programming } from '../data/programming';
import { history } from '../data/history';
import { law } from '../data/law';
import { medicine } from '../data/medicine';
import stirNumbers from '../functions/stirNumbers';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
 
export default class TestSet extends Component {
    constructor(props) {
        super(props);

        this.testArea = (
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
        
        this.responsiveArray = [english, geography, history, medicine, programming, law];

        this.state = {
            choosen: null
        }
    }

    stirTests = (testArray) => {
        let orderedTests = [];
        let newOrder = stirNumbers(testArray.length);

        for (let i = 0; i < newOrder.length; i++) {
            orderedTests[i] = testArray[newOrder[i]];
        }
        return orderedTests;
    }    
    
    

    initiateTest = (e) => {
        let target = e.target;
  
        while (target.className !== 'testContainer') {
            if (target.className === 'testCover') {
                let choosenTest = this.responsiveArray[target.children[0].id];                
                let stirTestsResult = this.stirTests(choosenTest);
                console.log(stirTestsResult);
                
                stirTestsResult = JSON.stringify(stirTestsResult);
                window.localStorage.setItem('currentTestStack', stirTestsResult);
                window.localStorage.setItem('currentTestNumber', 0);
                this.setState({choosen: true});
                return;
            }
            target = target.parentNode;
        }        
    }

    render() {
        if (this.state.choosen) {
            return (
                <Redirect to="/test-ground" />
            )
        }

        return (
            <div className="testSet">
                <Menu />
                <div>
                    <h1>Ви успішно ввійшли на сайт</h1>
                    <h2>Оберіть тест, який хочете пройти першим</h2>
                    {this.testArea}
                    <Footer />
                </div>
                
            </div>
        )
    }
}
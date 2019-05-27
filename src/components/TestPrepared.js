import React, { Component } from 'react';
import Test from './Test';

export default class TestPreparation extends Component {     
    state = {
        testNumber: +localStorage.currentTestNumber
    }

    createTests = (orderedTests) => {
        let testList = orderedTests.map(
            (testText) => {
                return <Test test={testText}/>
            }
        );
        return testList;
    }

    changeTest = () => {
        let nextTestIndex = +localStorage.currentTestNumber + 1;
        console.log(+this.state.testNumber + 2);
        localStorage.setItem('currentTestNumber', nextTestIndex);
        this.setState({testNumber: nextTestIndex});
    }
    
    render() {
        let currentLength = JSON.parse(localStorage.currentTestStack).length;
        const testList = this.createTests(this.props.tests);
        if (this.state.testNumber < currentLength - 1) {
            return (
                <div className="testPrepared">
                    {testList[this.state.testNumber]}
                    <button onClick={this.changeTest} className="btn">Наступний тест</button>
                </div>
            )
        } else if (this.state.testNumber < currentLength) { 
            return (
                <div className="testPrepared">
                    {testList[this.state.testNumber]}
                    <button onClick={this.changeTest} className="btn">Завершити тест</button>
                </div>
            )
        } else {
            return (
                <div>
                    Ваш результат
                    <button>Відповіді</button>
                </div>
            )
        }
    }
}
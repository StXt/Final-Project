import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Test from './Test';


export default class TestPreparation extends Component {     
    state = {
        testNumber: +localStorage.currentTestNumber
    }

    createTests = (orderedTests) => {
        let testList = orderedTests.map(
            (test) => {
                return <Test test={test}/>
            }
        );
        return testList;
    }

    changeTest = () => {
        if(localStorage.wasClick === 'false') {
            return
        }    
        let nextTestIndex = +localStorage.currentTestNumber + 1;
        localStorage.setItem('currentTestNumber', nextTestIndex);
        this.setState({testNumber: nextTestIndex});
        window.localStorage.setItem('wasClick', false);
        
    }
    
    render() {
        const currentLength = this.props.tests.length;
        const tests = this.createTests(this.props.tests);

        if (this.state.testNumber < currentLength - 1) {
            return (
                <div className="testPrepared">
                    {tests[this.state.testNumber]}
                    <button onClick={this.changeTest} className="btn">Далі</button>
                </div>
            )
        } else if (this.state.testNumber < currentLength) { 
            return (
                <div className="testPrepared">
                    {tests[this.state.testNumber]}
                    <button onClick={this.changeTest} className="btn">Завершити тест</button>
                </div>
            )
        } else {
            return (
                <Redirect to="/test-result" />
            )
        }
    }
}
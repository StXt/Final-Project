import React, { Component } from 'react';
import TestPrepared from '../components/TestPrepared';


export default class TestGround extends Component {
    render() {
        let testStack = localStorage.currentTestStack;
        testStack = JSON.parse(testStack);
        return (
            <div>
                <h1>This is TestGround</h1>
                <TestPrepared tests={testStack}/>
                
            </div>
        )
    }
}
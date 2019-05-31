import React, { Component } from 'react';
import TestPrepared from '../components/TestPrepared';
import Footer from '../components/Footer';

export default class TestPage extends Component {


    getChapterName = () => {
        return localStorage.testStackName;
    }
    
    render() {
        let mixedTestStack = localStorage.mixedTestStack;
        mixedTestStack = JSON.parse(mixedTestStack);
    
        return (
            <div className="testGround">
                <div>
                    <h1>Обраний тест: {this.getChapterName()}</h1>
                </div>
                <div className="testDesk">
                    <TestPrepared tests={mixedTestStack}/>
                </div>
                <div className="footer-container">
                    <Footer />
                </div>                
            </div>
        )
    }
}
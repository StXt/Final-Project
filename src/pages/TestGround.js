import React, { Component } from 'react';
import TestPrepared from '../components/TestPrepared';
import Footer from '../components/Footer';

export default class TestGround extends Component {
    constructor(props) {
        super(props);

        this.chaptersArray = ['Aнглійська мова', 'Географія', 'Історія', 'Програмування', 'Правознавство'];
    }


    testChapter = () => {
        return this.chaptersArray[+localStorage.currentTestChapter];
    }
    
    render() {
        let testStack = localStorage.currentTestStack;
        testStack = JSON.parse(testStack);
    
        return (
            <div className="testGround">
                <div>
                    <h1>Обраний тест: {this.testChapter()}</h1>
                </div>
                <div className="testDesk">
                    <TestPrepared tests={testStack}/>
                </div>
                <div className="footer-container">
                    <Footer />
                </div>                
            </div>
        )
    }
}
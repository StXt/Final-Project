import React, { Component } from 'react';
import TestAnswer from './TestAnswer';

export default class Test extends Component {
     constructor(props) {
        super(props);

        this.state = {
            imageExists: null,
            clicked: false
            
        }
    }

    isImage = () => {
        if (this.props.test.imageSrc) {
            localStorage.setItem('imageExists', true);
        } else {
            localStorage.removeItem('imageExists');
            
        }
    }

    render() {
        let data1 = {
            answer: this.props.test.answers[0],
        };  

        if (this.props.test.answers[0] === this.props.test.correct) {
            data1.correct = true;
        } else {
            data1.correct = false;
        }
        
        let data2 = {
            answer: this.props.test.answers[1],
        };

        if (this.props.test.answers[1] === this.props.test.correct) {
            data2.correct = true;
        } else {
            data2.correct = false;
        }

        let data3 = {
            answer: this.props.test.answers[2],
        };

        if (this.props.test.answers[2] === this.props.test.correct) {
            data3.correct = true;
        }  else {
            data3.correct = false;
        }

        let data4 = {
            answer: this.props.test.answers[3],
        };
        if (this.props.test.answers[3] === this.props.test.correct) {
            data4.correct = true;
        }  else {
            data4.correct = false;
        }

        this.isImage();
        if (localStorage.imageExists === 'true') {
            return (
                <div>
                    <p>{+localStorage.currentTestNumber + 1}. {this.props.test.question}</p>
                    <img src={this.props.test.imageSrc} alt={this.props.test.imageAlt} className="testImage"/>
                    <ul className='answers'>
                        <TestAnswer answerData={data1}/>
                        <TestAnswer answerData={data2}/>
                        <TestAnswer answerData={data3}/>
                        <TestAnswer answerData={data4}/>                        
                    </ul>
                </div>
            )
        } else {
            return (
                <div>
                <p>{+localStorage.currentTestNumber + 1}. {this.props.test.question}</p>
                <ul className='answers'>
                    <TestAnswer answerData={data1}/>
                    <TestAnswer answerData={data2}/>
                    <TestAnswer answerData={data3}/>
                    <TestAnswer answerData={data4}/> 
                </ul>
            </div>
            )
        }
    }
}
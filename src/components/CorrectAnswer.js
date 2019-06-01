import React, { Component } from 'react';
import Footer from '../components/Footer';


export default class CorrectAnswer extends Component {
    render() {
        if ('imageSrc' in this.props.correct) {
            return(
                <div>
                    <p className="resultQuestion">{this.props.correct.number + 1}. {this.props.correct.question}</p>
                    <img src={this.props.correct.imageSrc} alt={this.props.correct.imageAlt} className="testImage"/>
                    <p className="resultAnswer">{this.props.correct.answer}</p>
                </div>
            )
        } 

        return (
            <div>
                <p className="resultQuestion">{this.props.correct.number + 1}. {this.props.correct.question}</p>
                <p className="resultAnswer">{this.props.correct.answer}</p>
            </div>
        )
    }
}

/* if ('imageSrc' in this.props.correct) {
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
    ) */
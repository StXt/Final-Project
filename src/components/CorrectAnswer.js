import React, { Component } from 'react';

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

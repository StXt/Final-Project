import React, { Component } from 'react';



export default class Test extends Component {
     constructor(props) {
        super(props);

        this.state = {
            imageExists: null
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
        this.isImage();
        if (localStorage.imageExists === 'true') {
            return (
                <div>
                    <p>{+localStorage.currentTestNumber + 1}. {this.props.test.question}</p>
                    <img src={this.props.test.imageSrc} alt={this.props.test.imageAlt} className="testImage"/>
                    <ul>
                        <li>{this.props.test.answers[0]}</li>
                        <li>{this.props.test.answers[1]}</li>
                        <li>{this.props.test.answers[2]}</li>
                        <li>{this.props.test.answers[3]}</li>
                    </ul>
                </div>
            )
        } else {
            return (
                <div>
                <p>{+localStorage.currentTestNumber}. {this.props.test.question}</p>
                <ul>
                    <li>{this.props.test.answers[0]}</li>
                    <li>{this.props.test.answers[1]}</li>
                    <li>{this.props.test.answers[2]}</li>
                    <li>{this.props.test.answers[3]}</li>
                </ul>
            </div>
            )
        }
    }
}
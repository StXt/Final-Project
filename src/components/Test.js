import React, { Component } from 'react';


export default class Test extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const test=this.props.test;
        return (
            <div>
                <p>{test.question}</p>
                <ul>
                    <li>{test.answers[0]}</li>
                    <li>{test.answers[1]}</li>
                    <li>{test.answers[2]}</li>
                    <li>{test.answers[3]}</li>
                </ul>
            </div>
        )
    }
}
import React, { Component } from 'react';
import countdown from '../functions/countdown';
export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.timeLeft = 0;
        this.mins = 0;
        this.secs = 0;

        this.state = {
            time: +localStorage.endTime
        }
    }

    timer = () => {
        setInterval(
            () => this.setState({
                time: this.state.time - 1000
            }), 1000
        )
    }

    componentDidMount() {
        this.timer();
    }

    componentWillUnmount() {
        this.timer();
    }

    showTime = () => {
        this.timeLeft = this.state.time - +new Date();
        this.mins = (this.timeLeft) / 60000;        
        this.secs = this.timeLeft % this.mins;
    }

    render() {
        return (
            <p>До кінця тесту залишилось: {countdown(this.state.time)}</p>
        )
    }
}
import React, { Component } from 'react';
import countdown from '../functions/countdown';

export default class Timer extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            time: +localStorage.endTime + 1000 - new Date()
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

    render() {
        return (
            <p className="timerString">До кінця тесту залишилось: {countdown(this.state.time)}</p>
        )
    }
}
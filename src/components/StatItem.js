import React, { Component } from 'react';

export default class StatItem extends Component {
  render() {
    return (
      <div  className="statContainer">
        <h2>Тема тесту: {this.props.item.theme}</h2>
        <span className="statItem">Час проходження тесту: {this.props.item.time}</span>
        <span className="statItem">Результат: {this.props.item.result}%</span>
      </div>
    )
  }
}
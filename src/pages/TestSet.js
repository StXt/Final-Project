import React, { Component } from 'react';

export default class TestSet extends Component {
    render() {
        return (
            <div>
                <p>Оберіть тест, який хочете пройти першим.</p>
                <div className="test-container">
                    <div className="test-cover">Англійська мова</div>
                    <div className="test-cover">Географія</div>
                    <div className="test-cover">Історія</div>
                    <div className="test-cover">Медицина</div>
                    <div className="test-cover">Основи програмування</div>
                    <div className="test-cover">Правознавство</div>                  
                </div>
            </div>
        )
    }
}
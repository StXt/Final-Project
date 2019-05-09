import React, { Component } from 'react';

export default class TestSet extends Component {
    render() {
        return (
            <div>
                <h1>Ви успішно зареєструвались.</h1>
                <p>Оберіть тест, який хочете пройти першим.</p>
                <div>
                    <div>Англійська мова</div>
                    <div>Географія</div>
                    <div>Історія</div>
                    <div>Медицина</div>
                    <div>Основи програмування</div>
                    <div>Правознавство</div>                  
                </div>
            </div>
            
        )
    }
}
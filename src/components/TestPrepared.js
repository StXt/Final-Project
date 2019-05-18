import React, { Component } from 'react';


export default class TestPreparation extends Component {     
    state = {
        testNumber: localStorage.currentTestNumber
    }
    // Зробити підтягування збережених тестів з LocalStorage
    render() {
        
        
        return (
            <div>
                <button>Наступний тест</button>
            </div>
        )
    }
}
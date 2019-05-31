import React, { Component } from 'react';
import TestSetArea from '../components/TestSetArea';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
 
export default class TestSet extends Component {
    render() {
        return (
            <div className="testSet">
                <Menu />
                <div>
                    <h1>Ви успішно ввійшли на сайт</h1>
                    <h2>Оберіть тест, який хочете пройти першим</h2>
                    <TestSetArea />
                    <Footer />
                </div>
            </div>
        )
    }
}
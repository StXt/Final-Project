import React, { Component } from 'react';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import ParametersForm from '../components/ParametersForm';

export default class TestParameters extends Component {  
    render() { 
        return (
            <div className="testParameters">
                <Menu />
                <section>
                    <h1 className='testudy'>Testudy</h1>
                    {/* <img src={attandance} alt="little logo"  /> */}
                    <ParametersForm />
                    <div className="footer-container">
                        <Footer />
                    </div>
                </section>
            </div>
        )
    }
}

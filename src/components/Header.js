import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <h1>Testudy</h1><br />
                <h3>Nosce te ipsum</h3>
                <Link to='/sign-up'>
                    <button>Зареєструватися</button>
                </Link>
                <Link to='/login'>
                    <button>Увійти</button>
                </Link>
            </header>
        );
    }
}


export default Header;
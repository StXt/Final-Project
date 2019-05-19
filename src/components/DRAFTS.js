/* 
-такий користувач вже існує діалогові вікна в дівах
- зробити, щоб після оновлення тести не злітали, зберігати в LocalStorage

- зробити меню з делегуванням подій
- 
вивчити й застосувати React-Bootstrap

- локалізація
- об'єкт підтягнутий з LocalStorage тримати під рукою як перемінну у якомусь JavaScript файлі
- додати прогрес на тести
*/

import React, { Component } from 'react';


export default class Test extends Component {
    constructor(props) {
        super(props);

        this.image = (
            <img src={this.props.test.imageSrc} alt={this.props.test.imageAlt}/>
        )

        this.simpleTest = (
            <div>
                <p>{this.props.test.question}</p>
                <ul>
                    <li>{this.props.test.answers[0]}</li>
                    <li>{this.props.test.answers[1]}</li>
                    <li>{this.props.test.answers[2]}</li>
                    <li>{this.props.test.answers[3]}</li>
                </ul>
            </div>
        )

        this.imageTest = (
            <div>
                <p>{this.props.test.question}</p>
                {this.image}
                <ul>
                    <li>{this.props.test.answers[0]}</li>
                    <li>{this.props.test.answers[1]}</li>
                    <li>{this.props.test.answers[2]}</li>
                    <li>{this.props.test.answers[3]}</li>
                </ul>
            </div>
        )
    }

    render() {
        if(this.props.test.imageSrc) {
            return this.imageTest
        } else {
            return this.simpleTest
        }
    }
}






<button id="myButton" class="float-left submit-button" >Home</button>

<script type="text/javascript">
    document.getElementById("myButton").onclick = function () {
        location.href = "www.yoursite.com";
    };
</script>


'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;






/* constructor(props) {
    super(props);
    this.state = {
        value: 0
    }
    this.makeRegister = this.makeRegister.bind(this);
}


makeRegister() {
    this.setState({value: 'register'})
}

makeLogin() {
    this.setState({value: 'login'})
} */

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import addUser from '../functions/addUser';
import TestSet from './TestSet';
import Header from '../components/Header';
import Footer from '../components/Footer';



export default class SignUp extends Component {
  constructor(props) {
    super(props);
    
    this.form = (
      <form id="signUp">
        <label>Ім'я<input type="text" name="firstName" id="firstName" /></label>
        <label>Прізвище<input type="text" name="lastName" id="lastName" /></label>
        <label>Логін<input type="text" name="login" id="login" /></label>
        <label>Пароль<input type="password" name="password" id="password" /></label>
        <label>Повторіть пароль<input type="password" name="password" id="checkPassword" /></label>
        <button onClick={this.combinedFunc} className="btn">
          Зберегти
        </button>
      </form>
    );

    this.state = {
      isRegister: false
    };
  }

  combinedFunc = () => {
    let isAdded = addUser();

    if (isAdded === undefined) {
      this.setState({isRegister: 'registered'});
    } else if (isAdded) {
      this.setState({isRegister: true});
    }
    return;    
  }

  render() {    
    if(this.state.isRegister === true) {
      alert('regist good');
      return (
      <Redirect to="/test-set" />
      )
    } else if (this.state.isRegister === 'registered') {
      alert('already registered');
      return (
        <div className="home">
          <div className="head-main">
            <div className="header-container">
              <Header />
            </div>
            <div className="main-container">
            <h4>Користувач з таким іменем вже існує</h4>
              {this.form}
            </div>
          </div>
          <div className="footer-container">
            <Footer />
          </div>
        </div>
      )
    } else {
      return (
        <div className="home">
          <div className="head-main">
            <div className="header-container">
              <Header />
            </div>
            <div className="main-container">
              {this.form}
            </div>
          </div>
          <div className="footer-container">
            <Footer />
          </div>
        </div>
      )
    }
  }
}
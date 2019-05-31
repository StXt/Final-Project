import React from 'react';
import '../styles/style.css';


export default class TestAnswer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            correct: null
        }
    }

    changeClass = (e) => {
        this.setState({
            correct: this.props.answerData.correct
        });
        
    }

   componentWillReceiveProps() {
       let correctAnswer = document.getElementsByClassName('correctAnswer');
       correctAnswer.className ='';
       this.setState({correct: null});
       localStorage.setItem('clickedTest', false);
   }
   
    render() {
        if(localStorage.wasClick === 'false') {
            if(this.state.correct === true) {
                
                localStorage.setItem('wasClick', true);
                window.localStorage.setItem('correctCounter', +localStorage.correctCounter + 1);
                return (
                    <li className='correctAnswer'>{this.props.answerData.answer}</li>
                ); 
            }

            if(this.state.correct === false) {
                localStorage.setItem('wasClick', true);
                return (
                    <li className='falseAnswer'>{this.props.answerData.answer}</li>
                ); 
            }
        }

        return (
            <li onClick={this.changeClass}>{this.props.answerData.answer}</li>
        );
    }
}
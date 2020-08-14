import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Routes from './Routes';

 // Notes: 
    // // reset isCorrect and isWrong to false since we don't want their values 
       // that was for the original question to be carried over.
       // 
    // If a user answers correct to a question and goes to the next one, make sure 
    // the first question remains correct/wrong for the user. lifecycle methods maybe?

export default class Quiz extends Component {
    constructor() {
       super();

       this.state = {
          score: 0,
          isCorrect: false,
          isWrong: false,
       }
    }

    handleClick = evt => {
        // if on question 1
        if(evt.target.baseURI === 'http://localhost:3000/') {
           if(evt.target.innerText === 'It depends') {
              this.setState({
                 score: this.state.score + 1,
                 isCorrect: true,
              });
           }
           else {
              this.setState({
                 isWrong: true,
              });
           }
        }
    }

    reset = () => {
       this.setState({
          score: 0,
          isCorrect: false,
          isWrong: false,
       });
    }

    render() {
      const { score, isCorrect, isWrong } = this.state;

      return (
         <div className="container">
            <div className="quiz-area">
                <h1> Programming Quiz </h1>
                <div className="quiz-form"> 
                    <Routes isWrong={isWrong} isCorrect={isCorrect} handleClick={this.handleClick} />
                </div>
                <h2> Score: {score} </h2>
            </div>
            <Link to="/" onClick={() => this.reset()}> reset </Link>
         </div>
      )
   }
}
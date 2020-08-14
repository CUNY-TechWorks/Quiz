import React, { Component } from 'react';
import Routes from './Routes';

export default class Quiz extends Component {
    constructor() {
       super();

       this.state = {
          score: 0,
          isCorrect: true,
       }
    }

    handleClick = evt => {
        console.log(evt.target);
    }

    render() {
      const { score, isCorrect } = this.state;

      return (
         <div className="container">
            <div className="quiz-area">
                <h1> Programming Quiz </h1>
                <div className="quiz-form"> 
                    <Routes isCorrect={isCorrect} handleClick={this.handleClick} />
                </div>
                <h2> Score: {score} </h2>
            </div>
         </div>
      )
   }
}
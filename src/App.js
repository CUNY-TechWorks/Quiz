import React, { Component } from 'react';
import Routes from './Routes';
    
// current number of questions, along with their answers
const q_arr = [
   {question: 'q1', answer: 'It depends'}, 
   {question: 'q2', answer: 'Linked List'},
   {question: 'q3', answer: 'Tree'},
];

export default class Quiz extends Component {
    constructor() {
       super();

       this.state = {
          score: 0,
          currentQuestion: 'q1',
          answers: [],
       }
    }

    componentDidMount() {
       window.addEventListener('popstate', () => {
           if(document.location.pathname === '/') {
              this.setState({
                 currentQuestion: 'q1',
              });
           }
           else {
              // substring to not include '/' in the pathname
              this.setState({
                 currentQuestion: document.location.pathname.substring(1),
              });
           }
       });
    }

    handleClick = evt => {
       const { score, currentQuestion, answers } = this.state;

       for(let i=0;i<q_arr.length;i++) {
          if(currentQuestion === q_arr[i].question) {
            answers.push(evt.target.innerText);
            
            if(evt.target.innerText === q_arr[i].answer) {
               this.setState({
                  answers: answers,
                  score: score + 1, 
               });
            }
            else {
               this.setState({
                  answers: answers,
               })
            }
            break; // increase speed; skip over uneccesary iteration
          }
       }
    }

    handleQuestionChange = q => {
       // make sure results from previous question doesn't carry over to 
       // the next
       this.setState({
           currentQuestion: q,
       });
    }

    reset = () => {
       this.setState({
          score: 0,
          currentQuestion: 'q1',
          answers: [],
       });
    }

    render() {
      const { score, answers, currentQuestion } = this.state;

      return (
         <div className="container">
            <div className="quiz-area">
                <h1> Programming Quiz </h1>
                <div className="quiz-form"> 
                    <Routes currentQuestion={currentQuestion} q_arr={q_arr} answers={answers} handleClick={this.handleClick} handleQuestionChange={this.handleQuestionChange} />
                </div>
                <h2> Score: {score} </h2>
            </div>
         </div>
      )
   }
}
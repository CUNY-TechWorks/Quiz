import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Question1, Question2, Question3 } from './questions';

export default function Routes(props) {
    const { currentQuestion, answers, q_arr, handleClick, handleQuestionChange } = props;

    return (
        <Switch>
            <Route exact path="/"  render={() => <Question1 currentQuestion={currentQuestion} answers={answers} q_arr={q_arr} handleClick={handleClick} handleQuestionChange={handleQuestionChange}></Question1>} />
            <Route exact path="/q2" render={() => <Question2 currentQuestion={currentQuestion} answers={answers} q_arr={q_arr} handleClick={handleClick} handleQuestionChange={handleQuestionChange}></Question2>} />
            <Route exact path="/q3" render={() => <Question3 currentQuestion={currentQuestion} answers={answers} q_arr={q_arr} handleClick={handleClick} handleQuestionChange={handleQuestionChange}></Question3>} />
        </Switch>
    )
}
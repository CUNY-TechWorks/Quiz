import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Question1, Question2, Question3, Question4, Results } from './questions';

export default function Routes(props) {
    const { score, reset, currentQuestion, answers, q_arr, handleClick, handleQuestionChange } = props;

    return (
        <Switch>
            <Route exact path="/"  render={() => <Question1 currentQuestion={currentQuestion} answers={answers} q_arr={q_arr} handleClick={handleClick} handleQuestionChange={handleQuestionChange}></Question1>} />
            <Route exact path="/q2" render={() => <Question2 currentQuestion={currentQuestion} answers={answers} q_arr={q_arr} handleClick={handleClick} handleQuestionChange={handleQuestionChange}></Question2>} />
            <Route exact path="/q3" render={() => <Question3 currentQuestion={currentQuestion} answers={answers} q_arr={q_arr} handleClick={handleClick} handleQuestionChange={handleQuestionChange}></Question3>} />
            <Route exact path="/q4" render={() => <Question4 currentQuestion={currentQuestion} answers={answers} q_arr={q_arr} handleClick={handleClick} handleQuestionChange={handleQuestionChange}></Question4>} />
            <Route exact path="/results" render={() => <Results q_arr={q_arr} score={score} reset={reset} answers={answers}></Results>} />
        </Switch>
    )
}
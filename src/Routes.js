import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Question1 } from './questions';

export default function Routes(props) {
    const { isCorrect, handleClick } = props;

    return (
        <Switch>
            <Route path="/"  render={() => <Question1 isCorrect={isCorrect} handleClick={handleClick}></Question1>} />
        </Switch>
    )
}
import React from 'react';
import { Link } from 'react-router-dom';

export default function Results(props) {
    const { q_arr, score, reset, answers } = props;

    return (
        <div className="Questions">
            <h1> Quiz completed! </h1>
            <h2> 
                Good job on finishing my short quiz =) 
                Below are your answers!
            </h2>
            <div className="question-body">
                <div id="list-of-answers">
                   <ol>
                       {answers.map(el => {
                           return (
                              <li> ) {el} </li>
                           );
                       })}
                   </ol>
                </div>
                <div id="score"> Your score: {score}/{q_arr.length} </div>
            </div>
            <div className="footer">
               <Link to="/"> <button id="reset-btn" type="reset" onClick={() => reset()}> start over </button> </Link>
            </div>
        </div>
    )
}
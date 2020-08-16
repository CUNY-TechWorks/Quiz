import React from 'react';
import { Link } from 'react-router-dom';

export default function Question3(props) {
    const { currentQuestion, answers, q_arr ,handleClick, handleQuestionChange } = props;

    const qIndex = q_arr.findIndex(el => el.question === currentQuestion);

    return (
        <div className="Questions">
            <h1> Question 3: </h1>
            <h2> Which data structure does the DOM fall under? </h2>
            <div className="question-body">
                { answers[qIndex] !== 'Tree' && answers[qIndex] !== undefined ? <p className="feedback-body"> Correct answer is: 2.) Tree! </p> : 
                answers[qIndex] === 'Tree' ? <p className="feedback-body"> Yes, Tree! Good Job! +1 </p> :  
                    <table>
                        <tbody>
                            <tr>
                                <td className="choices" onClick={(evt) => handleClick(evt)}> Hash </td>
                                <td className="choices" onClick={(evt) => handleClick(evt)}> Tree </td>
                            </tr>
                            <tr>
                                <td className="choices" onClick={(evt) => handleClick(evt)}> Array </td>
                                <td className="choices" onClick={(evt) => handleClick(evt)}> Graph </td>
                            </tr>
                        </tbody>
                </table> }
            </div>
            <div className="footer">
                <Link to="/" onClick={() => handleQuestionChange('q2')} > Prev </Link>
                { answers[qIndex] !== undefined ? <Link to="/q4" onClick={() => handleQuestionChange('q4')} > Next </Link> : '' }
            </div>
      </div>
    );
}
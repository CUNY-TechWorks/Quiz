import React from 'react';
import { Link } from 'react-router-dom';

export default function Question2(props) {
    const { currentQuestion, answers, q_arr ,handleClick, handleQuestionChange } = props;

    const qIndex = q_arr.findIndex(el => el.question === currentQuestion);

    return (
        <div className="Questions">
            <h1> Question 2: </h1>
            <h2> Which one is a data structure? </h2>
            <div className="question-body">
                { answers[qIndex] !== 'Linked List' && answers[qIndex] !== undefined ? <p className="feedback-body"> Correct answer is: 4.) Linked List! </p> : 
                answers[qIndex] === 'Linked List' ? <p className="feedback-body"> Yes, Linked List! Good Job! +1 </p> :  
                    <table>
                        <tbody>
                            <tr>
                                <td className="choices" onClick={(evt) => handleClick(evt)}> Function </td>
                                <td className="choices" onClick={(evt) => handleClick(evt)}> Node </td>
                            </tr>
                            <tr>
                                <td className="choices" onClick={(evt) => handleClick(evt)}> Class </td>
                                <td className="choices" onClick={(evt) => handleClick(evt)}> Linked List </td>
                            </tr>
                        </tbody>
                </table> }
            </div>
            <div className="footer">
                <Link to="/" onClick={() => handleQuestionChange('q1')} > Prev </Link>
                { answers[qIndex] !== undefined ? <Link to="/q3" onClick={() => handleQuestionChange('q3')} > Next </Link> : '' }
            </div>
        </div>
    );
}
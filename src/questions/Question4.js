import React from 'react';
import { Link } from 'react-router-dom';

export default function Question4(props) {
    const { currentQuestion, answers, q_arr ,handleClick, handleQuestionChange } = props;

    const qIndex = q_arr.findIndex(el => el.question === currentQuestion);

    return (
        <div className="Questions">
            <h1> Question 4: </h1>
            <h2> Which data structure does a GPS fall under? </h2>
            <div className="question-body">
                { answers[qIndex] !== 'Graph' && answers[qIndex] !== undefined ? <p className="feedback-body"> Correct answer is: 3.) Graph! </p> : 
                answers[qIndex] === 'Graph' ? <p className="feedback-body"> Yes, Graph! Good Job! +1 </p> :  
                    <table>
                        <tbody>
                            <tr>
                                <td className="choices" onClick={(evt) => handleClick(evt)}> Tree </td>
                                <td className="choices" onClick={(evt) => handleClick(evt)}> Linked List </td>
                            </tr>
                            <tr>
                                <td className="choices" onClick={(evt) => handleClick(evt)}> Graph </td>
                                <td className="choices" onClick={(evt) => handleClick(evt)}> Merge sort </td>
                            </tr>
                        </tbody>
                </table> }
            </div>
            <div className="footer">
                <Link to="/" onClick={() => handleQuestionChange('q3')} > Prev </Link>
                { answers[qIndex] !== undefined ? <Link to="/results" onClick={() => handleQuestionChange('results')} > Next </Link> : '' }
            </div>
      </div>
    );
}
import React from 'react';
import { Link } from 'react-router-dom'; 

export default function Question1(props) {
    const { currentQuestion, answers, q_arr, handleClick, handleQuestionChange } = props;

    const qIndex = q_arr.findIndex(el => el.question === currentQuestion);

    return (
        <div className="Questions">
            <h1> Question 1: </h1>
            <h2> What is the best programming language? </h2>
            <div className="question-body">
                { answers[qIndex] !== 'It depends' && answers[qIndex] !== undefined ? <p className="feedback-body"> Correct answer is: 4.) It depends! </p> : 
                  answers[qIndex] === 'It depends' ? <p className="feedback-body"> Yes, It depends! Good Job! +1 </p> :  
                    <table>
                        <tbody>
                            <tr>
                                <td className="choices" onClick={(evt) => handleClick(evt)}> Python </td>
                                <td className="choices" onClick={(evt) => handleClick(evt)}> C++ </td>
                            </tr>
                            <tr>
                                <td className="choices" onClick={(evt) => handleClick(evt)}> Java </td>
                                <td className="choices" onClick={(evt) => handleClick(evt)}> It depends </td>
                            </tr>
                        </tbody>
                   </table> }
            </div>
            <div className="footer">
                {answers[qIndex] !== undefined ? <Link to="/q2" onClick={() => handleQuestionChange('q2')}> Next </Link> : ''}
            </div>
        </div>
    )
}
import React from 'react';
import { Link } from 'react-router-dom'; 

export default function Question1(props) {
    const { isWrong, isCorrect, handleClick } = props;

    return (
        <div className="Questions">
            <h1> Question 1: </h1>
            <h2> What is the best programming language? </h2>
            <div className="question-body">
                { isWrong ? <p className="correct-choice-body"> Correct answer is: 4.) It depends! </p> : 
                  isCorrect ? <p className="correct-choice-body"> Good Job! +1 </p> :  
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
                {isCorrect || isWrong ? <Link to="/q2"> Next </Link> : ''}
            </div>
        </div>
    )
}
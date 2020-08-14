import React from 'react';
import { Link } from 'react-router-dom'; 

export default function Question1(props) {
    const { isCorrect, handleClick } = props;

    return (
        <div className="Questions">
            <h1> Question 1: </h1>
            <h2> What is the best programming language? </h2>
            <div className="question-body">
                {  isCorrect ? <h1> Good Job! </h1>  :  <table>
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
                {isCorrect ? <Link to="/q2"> Next </Link> : ''}
            </div>
        </div>
    )
}
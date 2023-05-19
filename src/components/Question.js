import { useState } from 'react';

export default ({ question, handleBack, handleSubmitAnswer }) => {
    const [answer, setAnswer] = useState('');
    
    // TODO: add logic for tracking the value of input -> check onChange in react docs
    return (
        <div className="question-wrapper">
            <button className="back-btn" onClick={handleBack}>Back</button>
            {question ? <h3 className="question">{ question }</h3>: 'LOADING QUESTION'}
            <input className="answer"/>
            <button className="submit-btn" onClick={handleSubmitAnswer}>Submit</button>
        </div>
    )
}
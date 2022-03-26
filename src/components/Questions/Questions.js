import React from 'react';
import './Questions.css';

const Questions = () => {
    return (
        <div className='questions-container'>
            <h1>Questions</h1>
            <div className='question'>
                <div>
                <h3>Question: How react works?</h3>
                <p>Answer: React is made with multiple components. Each component responsible for rendering a small structure of HTML. Component may maintain an internal state. It can be used multiple times. React use virtual DOM to update browser DOM.</p>
                </div>
                <div>
                    <h3>Question: How useState works?</h3>
                    <p>Answer: useState is a Hook. It allows us to have state variables in functional components. We can pass initial state to the function and it returns a variable with the current state value. Each piece of state holds a single value. It can be object, boolean or any other type of data.</p>
                </div>
            </div>
        </div>
    );
};

export default Questions;
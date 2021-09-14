import React from 'react';
import Answer from './Answer.jsx';

const Question = (props) => {
  // make Yes a clickable event that increments Helpful
  // const helpful = <a href={}

  // create an answers storage
  const answers = [];
  const answerKeys = Object.keys(props.question.answers);
  // iterate through the questions and push the answers to the storage
  for (let i = 0; i < answerKeys.length; i++) {
    answers.push(props.question.answers[answerKeys[i]]);
  };
  return (
    <div className='question'>
      <span style={{fontWeight: 'bold'}}> Q: {props.question.question_body}
      </span>
        <p>Helpful?</p>
        // stopped here
        A: {props.answers.map((answer) =>
          <Answer answer={answer} />
        )}
    </div>
  )
}

export default Question;


// <div className='helpful'>

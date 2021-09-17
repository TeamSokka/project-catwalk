import React, { useState } from 'react';
import Answer from './Answer.jsx';

const Question = (props) => {
  // need to update disable button to work once for all 3 buttons
  // need to sort based on helpfulness and Seller
  const { question, putRequest, disabled } = props;
  // useState to
  const [helpfulBtn, setHelpfulBtn] = useState(false);
  const [display, setDisplay] = useState(2);

  let answers = [];
  let answerKeys = Object.keys(question.answers);

  // let handleClick = (button, setButton) => {
  //   button ? return : setButton(true);
  // }

  for (let i = 0; i < answerKeys.length; i++) {
    answers.push(question.answers[answerKeys[i]]);
  };

  let loadMoreAnswers = answers.length <= 2 ? null : answers.length > display ? <a className='load-answers' style={{ fontWeight: 'bold' }} onClick={() => setDisplay(answers.length)} >SEE MORE ANSWERS</a> : <a className='load-answers' style={{ fontWeight: 'bold' }} onClick={() => setDisplay(2)} >COLLAPSE ANSWERS</a>

  let helpful = <a style={{ textDecorationLine: 'underline' }}>Yes</a>
  return (
    <div className='question'>
      <span style={{ fontWeight: 'bold' }}> Q: {question.question_body}
      </span>
      <div className='side-options'> Helpful?{'  '}
        <u style={{ cursor: 'pointer' }} disabled={disabled}
          onClick={() => putRequest('questions', question.question_id, 'helpful')}>Yes</u> {'  '}
        ({question.question_helpfulness}) |{'  '}
        <u>Add Answer</u>
      </div>
      {answers.slice(0, display).map((answer, index) =>
        <Answer key={index} answer={answer}
          putRequest={putRequest}
          disabled={disabled} />
      )}
      {loadMoreAnswers}
    </div>
  )
}

export default Question;

// sort answers by helpfulness and Seller name

// <div className='helpful'>

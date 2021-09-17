import React from 'react';
import Answer from './Answer.jsx';

const Question = (props) => {
  const { question } = props;
  // make Yes a clickable event that increments Helpful
  // const helpful = <a href={}

  // create an answers storage
  let answers = [];
  let answerKeys = Object.keys(question.answers);
  // iterate through the questions and push the answers to the storage
  for (let i = 0; i < answerKeys.length; i++) {
    answers.push(question.answers[answerKeys[i]]);
  };
  let loadAnswers = answers.length > 2 ? <div className='load-answers'>LOAD MORE ANSWERS</div> : null;
  return (
    <div className='question'>
      <span style={{fontWeight: 'bold'}}> Q: {question.question_body}
      </span>
        <div className='side-options'> Helpful? Yes ({question.question_helpfulness}) | Add Answer
        </div>
        {answers.slice(0, 2).map((answer, index) =>
          <Answer key={index} answer={answer} />
        )}
        {loadAnswers}
    </div>
  )
}

export default Question;

// sort answers by helpfulness and Seller name

// <div className='helpful'>

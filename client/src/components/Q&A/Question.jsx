import React, { useState } from 'react';
import Answer from './Answer.jsx';
import AddAnswer from './AddAnswer.jsx';

const Question = (props) => {
  // need to update disable button to work once for all 3 buttons
  // need to sort based on helpfulness and Seller
  const { question, putRequest, productID, productInfo, postAnswer } = props;
  // i need to refactor so that i can click once on each question
  const [helpfulBtn, setHelpfulBtn] = useState(false);
  const [display, setDisplay] = useState(2);
  const [modal, setModal] = useState(false);

  const handleClick = (button, setButton) => {
    if (button) {
      return;
    }
    setButton(true);
  }

  let answers = [];
  let answerKeys = Object.keys(question.answers);

  for (let i = 0; i < answerKeys.length; i++) {
    answers.push(question.answers[answerKeys[i]]);
  };

  let loadMoreAnswers = answers.length <= 2 ? null : answers.length > display ? <a className='load-answers' style={{ fontWeight: 'bold', cursor: 'pointer' }} onClick={() => setDisplay(answers.length)} >SEE MORE ANSWERS</a> : <a className='load-answers' style={{ fontWeight: 'bold', cursor: 'pointer' }} onClick={() => setDisplay(2)} >COLLAPSE ANSWERS</a>

  let helpful = <a style={{ textDecorationLine: 'underline' }}>Yes</a>
  return (
    <div className='question'>
      <span style={{ fontWeight: 'bold' }}> Q: {question.question_body}
      </span>
      <div className='side-options'> Helpful?{'  '}
        <u style={{ cursor: 'pointer' }}
          onClick={() => {
            handleClick(helpfulBtn, setHelpfulBtn);
            putRequest('questions', question.question_id, 'helpful');
          }}>Yes</u> {'  '}
        ({question.question_helpfulness}) |{'  '}
        <u onClick={(e) => setModal(true)} style={{ cursor: 'pointer' }} >Add Answer</u>
        {
          modal
          && (
            <div
              className="modal-style"
              onClick={(e) => setModal(false)}
            >
              <div
                className="inner-modal-style"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="close-button" onClick={(e) => setModal(false)}>&times;</span>
                <AddAnswer
                  productID={productID}
                  productInfo={productInfo}
                  postAnswer={postAnswer}
                  question={question}
                />
                <br />
              </div>
            </div>
          )
        }
      </div>
      {answers.slice(0, display).map((answer, index) =>
        <Answer key={index} answer={answer}
          putRequest={putRequest}
        />
      )}
      {loadMoreAnswers}
    </div>
  )
}

export default Question;

// sort answers by helpfulness and Seller name

// <div className='helpful'>

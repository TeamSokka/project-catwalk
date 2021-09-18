import React, { useState } from 'react';
import Question from './Question.jsx';
import AddQuestion from './AddQuestion.jsx';

const QuestionList = (props) => {
  const { questions, putRequest, handleClick, productID, productInfo, postQuestion, postAnswer } = props;
  const [display, setDisplay] = useState(4);
  const [modal, setModal] = useState(false);
  let loadMoreQuestions = questions.length > display &&
    <button className='btn' onClick={() => setDisplay(display + 2)} >MORE ANSWERED QUESTIONS</button>;

  return (
    <div>
      <div className='question-list'>
        {questions.length > 0 && props.questions.slice(0, display).map((question) => (
          <Question key={question.question_id} question={question}
            putRequest={putRequest}
            postAnswer={postAnswer}
            productID={productID}
            productInfo={productInfo}
          />
        ))
        }
        {loadMoreQuestions}
        <button className='btn' onClick={(e) => setModal(true)} >ADD A QUESTION +</button>
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
                <AddQuestion
                  productID={productID}
                  productInfo={productInfo}
                  postQuestion={postQuestion}
                />
                <br />
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default QuestionList;

// {props.questions.length > 0 && <Question key={question.question_id} question={question}
// answers={props.answers} /> : }
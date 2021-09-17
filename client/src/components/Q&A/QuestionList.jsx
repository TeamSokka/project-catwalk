import React, { useState } from 'react';
import Question from './Question.jsx';

const QuestionList = (props) => {
  // limit to 4 questions per product
  // error: setDisplay is not a function
  const { questions, putRequest, disabled } = props;
  const [display, setDisplay] = useState(4);
  let loadMoreQuestions = questions.length > display &&
    <button className='more-answered-btn' onClick={() => setDisplay(display + 2)} >MORE ANSWERED QUESTIONS</button>;
  return (
    <div>
      <div>
        {questions.length > 0 && props.questions.slice(0, display).map((question) => (
          <Question key={question.question_id} question={question}
            putRequest={putRequest}
            disabled={disabled} />
        ))
        }
        {loadMoreQuestions}
        <button className='add-question-btn'>ADD A QUESTION +</button>
      </div>
    </div>
  );
};

export default QuestionList;

// {props.questions.length > 0 && <Question key={question.question_id} question={question}
// answers={props.answers} /> : }
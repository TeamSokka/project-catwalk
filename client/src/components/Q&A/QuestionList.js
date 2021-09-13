import React from 'react';
import Question from './Question.js';

const QuestionList = (props) => {
  return (
    <div>
      {props.questions.map((question) => (
        <Question question={question} />
      ))}
    </div>
  );
};

export default QuestionList;

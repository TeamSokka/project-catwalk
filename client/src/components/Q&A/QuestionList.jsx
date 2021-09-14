import React from 'react';
import Question from './Question.jsx';

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

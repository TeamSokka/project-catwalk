import React from 'react';
import Question from './Question.jsx';

const QuestionList = (props) => {
  return (
    <div>
      {props.questions.map((question) => (
        <Question key={question.question_id} question={question} />
      ))}
    </div>
  );
};

export default QuestionList;

import React from 'react';
import Question from './Question.jsx';

const QuestionList = (props) => {
  // limit to 4 questions per product
  return (
    <div>
      {props.questions.map((question) => (
        <Question key={question.question_id} question={question}
        answers={props.answers} />
      ))}
    </div>
  );
};

export default QuestionList;

import React from 'react';
import Question from './Question.jsx';

const QuestionList = (props) => {
  // limit to 4 questions per product
  return (
    <div>
      <div>
        {props.questions.length > 0 && props.questions.slice(0, 4).map((question) => (
          <Question key={question.question_id} question={question}
            answers={props.answers} />
        ))
        }
        <button className='more-answered-btn'>MORE ANSWERED QUESTIONS</button>
        <button className='add-question-btn'>ADD A QUESTION +</button>
      </div>
    </div>
  );
};

export default QuestionList;

// {props.questions.length > 0 && <Question key={question.question_id} question={question}
// answers={props.answers} /> : }
import React from 'react';

const Question = (props) => {
  // make Yes a clickable event that increments Helpful
  // const helpful = <a href={}

  // show only 4
  return (
    <div>
      <span style={{fontWeight: 'bold'}}> Q: {props.question.question_body}
      </span>
        <p>Helpful? </p>
        A:
    </div>
  )
}

export default Question;


// <div className='helpful'>

import React from 'react';

const Answer = (props) => {
  return (
    <div className='answer'>
      A: {props.answer.body}
      <div>
        by {props.answer.answerer_name},
      </div>
    </div>
  )
}

export default Answer;
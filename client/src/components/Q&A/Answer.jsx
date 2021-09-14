import React from 'react';

const Answer = (props) => {
  return (
    <div className='answer'>
      A: {props.answer.body}
    </div>
  )
}

export default Answer;
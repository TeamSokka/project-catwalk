import React from 'react';

const Answer = (props) => {
  return (
    <div className='answer'>
      {props.answer.body}
    </div>
  )
}

export default Answer;
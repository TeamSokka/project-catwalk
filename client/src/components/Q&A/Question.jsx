import React from 'react';

const Question = (props) => {
  // make Yes a clickable event that increments Helpful
  // const helpful = <a href={}
  return (
    <div>
      Q: {props.question}
      <div className='helpful'>
        <p>Helpful? </p>
      </div>
    </div>
  )
}

export default Question;
import React from 'react';
import moment from 'moment';

const Answer = (props) => {
  return (
    <div className='answer'>
      A: {props.answer.body}
      <div>
        by {props.answer.answerer_name},  {moment(props.answer.date).format('MMMM Do YYYY')}
      </div>
    </div>
  )
}

export default Answer;
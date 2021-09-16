import React from 'react';
import moment from 'moment';

const Answer = (props) => {
  const { answer } = props;
  let answerer = <a style={{ fontWeight: answer.answerer_name === 'Seller' && 'bold' }} >{answer.answerer_name}</a>

  return (
    <div className='answer'>
      A: {answer.body}
      <p>
        by {answerer},  {moment(answer.date).format('MMMM Do YYYY')} | Helpful? Yes ({answer.helpfulness}) | Report
      </p>
    </div>
  )
}

export default Answer;

//   let answerer = answer.answerer_name === 'Seller' ? <p style={{ fontWeight: 'bold' }}>{answer.answerer_name}</p> : {answer.answerer_name}
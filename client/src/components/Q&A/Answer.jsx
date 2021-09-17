import React from 'react';
import moment from 'moment';

const Answer = (props) => {
  const { answer, putRequest, disabled } = props;
  let answerer = <a style={{ fontWeight: answer.answerer_name === 'Seller' && 'bold' }} >{answer.answerer_name}</a>

  return (
    <div className='answer'>
      A: {answer.body}
      <br></br>
        by {answerer},  {moment(answer.date).format('MMMM Do, YYYY')} | Helpful?{'  '}
        <u style={{cursor: 'pointer'}} disabled={disabled}
        onClick={() => putRequest('answers', answer.id, 'helpful')} >Yes</u> ({answer.helpfulness}) |{'  '}
        <u style={{cursor: 'pointer'}} disabled={disabled}
        onClick={() => putRequest('answers', answer.id, 'report')} >Report</u>
    </div>
  )
}

export default Answer;

//   let answerer = answer.answerer_name === 'Seller' ? <p style={{ fontWeight: 'bold' }}>{answer.answerer_name}</p> : {answer.answerer_name}
import React, { useState } from 'react';
import moment from 'moment';
import axios from 'axios';

const Answer = (props) => {
  const { answer } = props;
  const [helpfulBtn, setHelpfulBtn] = useState(false);
  const [reportBtn, setReportBtn] = useState(false);
  const [helpCount, setHelpCount] = useState(answer.helpfulness);

  const helpfulClick = () => {
    if (helpfulBtn) {
      return;
    }
    axios.put(`/qa/answers/${answer.id}/helpful`)
      .then(() => setHelpCount((prevState) => prevState + 1))
      .catch((err) => console.log('Error updating ', err));
    setHelpfulBtn(true);
  }

  const reportClick = () => {
    if (reportBtn) {
      return;
    }
    axios.put(`/qa/answers/${answer.id}/report`)
      .catch((err) => console.log('Error reporting ', err));
  }

  let answerer = <a style={{ fontWeight: answer.answerer_name === 'Seller' && 'bold' }} >{answer.answerer_name}</a>

  return (
    <div className='answer'>
      A: {answer.body}
      <br />
      {answer.photos.length > 0 && answer.photos.map((photo) =>
        <img src={photo} alt='some image' width='150' height='100' />)
      }
      <div className='answer-info'>
        by {answerer},  {moment(answer.date).format('MMMM Do, YYYY')} | Helpful?{'  '}
        <u style={{ cursor: 'pointer' }}
          onClick={() => helpfulClick()} >Yes</u> ({helpCount}) |{'  '}
        <u style={{ cursor: 'pointer' }}
          onClick={() => reportClick()} >Report</u>
      </div>
    </div >
  )
}

export default Answer;

//   let answerer = answer.answerer_name === 'Seller' ? <p style={{ fontWeight: 'bold' }}>{answer.answerer_name}</p> : {answer.answerer_name}
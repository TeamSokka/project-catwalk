import React, { useState } from 'react';

const AddAnswer = (props) => {
  const { productInfo, productID, postAnswer, question } = props;
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState('');

  const message = 'You must enter the following: \n';

  const onSubmit = (e) => {
    e.preventDefault();
    if (!body) {
      alert(`${message} Please add a question`);
      return;
    }
    if (!name) {
      alert(`${message} Please add your nickname`);
      return;
    }
    if (!email) {
      alert(`${message} Please provide email in the correct format`);
      return;
    }
    console.log('answers ', { body, name, email, product_id: productID });
    postAnswer({ body, name, email, product_id: productID }, question.question_id);
  }

  return (
    <form onSubmit={onSubmit}>
      <h1>Submit your Answer</h1>
      <h3>{productInfo.name}: {question.question_body} </h3>
      <div>Your Answer* <textarea value={body}  onChange={(e) => setBody(e.target.value)} maxLength={1000} /> </div>
      <div>What is your nickname?* <input type='text' placeholder='Example: jack543!' value={name} onChange={(e) => setName(e.target.value)} maxLength={60} />
      </div>
      <small>For privacy reasons, do not use your full name or email address</small>
      <div>
        Your Email* <input type='text' placeholder='Example: jack@email.com' value={email} onChange={(e) => setEmail(e.target.value)} maxLength={60} />
      </div>
      <small>For authentication reasons, you will not be emailed</small>
      <div>Upload your photos
      </div>
      <br />
      <input type='submit' value='Submit' />
    </form>
  )
}

export default AddAnswer;
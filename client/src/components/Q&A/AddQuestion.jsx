import React, { useState } from 'react';

const AddQuestion = (props) => {
  const { productInfo, productID, postQuestion } = props;
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

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
    console.log({ body, name, email, product_id: productID });
    postQuestion({ body, name, email, product_id: productID });
  }

  return (
    <form onSubmit={onSubmit}>
      <h1>Ask your Question</h1>
      <h3>About the Product {productInfo.name} </h3>
      <div>
        <h3 className='ask-headers'>Your Questions*</h3>
        <textarea value={body} placeholder='Why did you like the product or not?' className='text-area-body' onChange={(e) => setBody(e.target.value)} maxLength={1000} /> </div>
      <div>
        <h3 className='ask-headers'>What is your nickname?*</h3>
        <div className='input-div'>
          <input type='text' className='ask-inputs' placeholder='Example: jackson11!' value={name} onChange={(e) => setName(e.target.value)} maxLength={60} />
        </div>
      </div>
      <small>For privacy reasons, do not use your full name or email address</small>
      <div>
        <h3 className='ask-headers'>Your Email* </h3>
        <div className='input-div'>
          <input type='text' className='ask-inputs' placeholder='Example: jackson11@email.com' value={email} onChange={(e) => setEmail(e.target.value)} maxLength={60} />
        </div>
      </div>
      <small>For authentication reasons, you will not be emailed</small>
      <div>
        <input type='submit' className='btn' value='Submit' />
      </div>
    </form>
  )
}

export default AddQuestion;
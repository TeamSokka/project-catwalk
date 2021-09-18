import React, { useState } from 'react';

const AddQuestion = (props) => {
  const { productInfo, productID, postRequest } = props;
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
    postRequest({ body, name, email, productID });
  }

  return (
    <form onSubmit={onSubmit}>
      <h1>Ask your Question</h1>
      <h3>About the Product {productInfo.name} </h3>
      <div>Your Questions (mandatory) <textarea value={body} placeholder='Why did you like the product or not?' onChange={(e) => setBody(e.target.value)} maxLength={1000} /> </div>
      <div>What is your nickname? (mandatory) <input type='text' placeholder='Example: jackson11!' value={name} onChange={(e) => setName(e.target.value)} maxLength={60} />
      </div>
      <small>For privacy reasons, do not use your full name or email address</small>
      <div>
        Your Email (mandatory) <input type='text' placeholder='Example: jackson11@email.com' value={email} onChange={(e) => setEmail(e.target.value)} maxLength={60} />
      </div>
      <small>For authentication reasions, you will not be emailed</small>
      <br />
      <input type='submit' value='Submit' />
    </form>
  )
}

export default AddQuestion;
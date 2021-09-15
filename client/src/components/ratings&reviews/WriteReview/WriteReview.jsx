import React from 'react';

class WriteReview extends React.Component {
  constructor(props) {
    super(props);
    const { productID } = this.props;

    this.state = {
      productID: productID,
      recommend: null,
      summary: '',
      body: '',
      photos: [],
      name: '',
      email: '',
      rating: null,
      characteristics: {
      }
    }

    this.minCharCount = this.minCharCount.bind(this);
    this.submitReview = this.submitReview.bind(this);
  }


  // min char count
  minCharCount() {
    const { body } = this.state;
    if (body.length >= 50) {
      return 'Minimum body character count reached.';
    }

    if (body.length < 50) {
      return `Minimum required character count left: ${50 - body.length}.`;
    }
  }

  submitReview(e) {
    const { handlePostReview } = this.props;
    const { summary } = this.state;
    const { recommend } = this.state;
    const { name } = this.state;
    const { email } = this.state;
    const { rating } = this.state;
    const { characteristics } = this.state;

    // checks
    // Recommend - mandatory
    // Characteristics - mandatory
    // Review Summary - up to 60 characters
    // Review body - up to 1000 characters, over 50 characters
    // Name - up to 60 characters
    // Email - up to 60 characters
    // alert with warning message if not satisfactory entry
    if (rating === null) {
      alert('Please fill out required ratings option.');
      e.preventDefault();
      return;
    }

    if (recommend === null) {
      alert('Please fill out required recommended option.');
      e.preventDefault();
      return;
    }

    if (summary.length > 60) {
      alert('Review Summary cannot be greater than 60 characters.');
      e.preventDefault();
      return;
    }

    if (body.length > 1000 || body.length < 50) {
      alert('Review Body cannot be greater than 1000 characters.');
      e.preventDefault();
      return;
    }

    if (name.length > 60 || name.length === 0) {
      alert('Name cannot be greater than 60 characters or empty.');
      e.preventDefault();
      return;
    }

    const emailValidate = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const result = emailValidate.test(String(email).toLowerCase());

    if (result === false || email.length > 60 || email.length === 0) {
      alert('Please input a valid email address.');
      e.preventDefault();
      return;
    }

    alert('Your review has been submitted.');

    handlePostReview(this.state);
  }

  render() {
    return (
      <div>Write Review Form</div>
    )
  }
}

export default WriteReview;


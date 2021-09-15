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
      // <div>Write Review Form</div>
      <div>
        <form>
          <div className="form-title">
            <h1>Write Your Review</h1>
            <h3>About the Product Name: {this.props.productID}</h3>
            <small>* Required fields</small>
          </div>

          <div className="overall-rating">
            <b>* Overall</b>
            <div>Star mouse over</div>
            <div>
              <div>1 star - Poor</div>
              <div>2 star - Fair</div>
              <div>3 star - Average</div>
              <div>4 star - Good</div>
              <div>5 star - Great</div>
            </div>
          </div>

          <div className="recommend-product">
            <input type="radio" id="recommend-yes" value="Yes" />
            <label htmlFor="recommend-yes">Yes</label>

            <input type="radio" id="recommend-no" value="No" />
            <label htmlFor="recommend-no">No</label>
          </div>

          <div className="characteristics">
          </div>

          <div className="review-summary">
            <label htmlFor="review-summary">Review Summary (optional)</label>
            <br></br>
            <textarea id="review-summary"
              name="review-summary"
              rows="5" cols="33"
              placeholder="Example: Best purchase ever">
            </textarea>
          </div>

          <div className="name">
            <label htmlFor="name">Name</label>
            <br></br>
            <textarea id="name"
              name="name"
              rows="2" cols="33"
              placeholder="Example:jackson11">
            </textarea>
            <br></br>
            <small>For privacy reasons, do not use your full name or email address</small>
          </div>


        </form>
      </div>
    )
  }
}

export default WriteReview;
{/* Overall Rating */ }
{/* Would you recommend this product? */ }
{/* Buttons */ }
{/* Review Summary */ }
{/* Name */ }
{/* Review */ }
{/* Email */ }
{/* Photos */ }


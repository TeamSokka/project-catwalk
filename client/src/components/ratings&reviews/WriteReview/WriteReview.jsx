import React from 'react';
import CharacteristicsList from './CharacteristicsList';

class WriteReview extends React.Component {
  constructor(props) {
    super(props);
    const { productID } = this.props;

    // this.state = {
    //   mouseOver: [0, 0, 0, 0, 0],
    //   productID: productID,
    //   recommend: null,
    //   summary: '',
    //   body: '',
    //   photos: [],
    //   name: '',
    //   email: '',
    //   rating: null,
    //   characteristics: {
    //   }
    // }

    this.state = {
      review: {
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
      },
      mouseOver: [0, 0, 0, 0, 0],
    }

    this.minCharCount = this.minCharCount.bind(this);
    this.submitReview = this.submitReview.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCharacteristicClick = this.handleCharacteristicClick.bind(this);
    this.handleStarClick = this.handleStarClick.bind(this);
    this.handleRecommendClick = this.handleRecommendClick.bind(this);
  }

  // handle input change
  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleCharacteristicClick(e) {
    const { characteristics } = this.state;
    this.setState({
      characteristics: {
        ...characteristics,
        [e.target.name]: Number(e.target.value),
      },
    });
  }

  handleStarClick(e) {
    this.setState({
      [e.target.name]: Number(e.target.value),
    });
  }

  handleRecommendClick(e) {
    var bool;
    if (e.target.value === "Yes") {
      bool = true;
    } else {
      bool = false;
    }

    this.setState({
      [e.target.name]: bool,
    });
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
    const { summary } = this.state.review;
    const { body } = this.state.review;
    const { recommend } = this.state.review;
    const { name } = this.state.review;
    const { email } = this.state.review;
    const { rating } = this.state.review;
    const { characteristics } = this.state.review;

    // checks
    // Recommend - mandatory
    // Characteristics - mandatory
    // Review Summary - up to 60 characters
    // Review body - up to 1000 characters, over 50 characters
    // Name - up to 60 characters
    // Email - up to 60 characters
    // alert with warning message if not satisfactory entry

    // concat alert string
    var alertMessage = '';

    if (rating === null) {
      alertMessage += 'Please fill out required ratings option. \n';
      e.preventDefault();
      return;
    }

    if (recommend === null) {
      alertMessage += 'Please fill out required recommended option. \n';
      e.preventDefault();
      return;
    }
    // characteristics

    if (summary.length > 60) {
      alertMessage += 'Review Summary must be 60 characters or less. \n';
      e.preventDefault();
      return;
    }

    if (body.length > 1000 || body.length < 50) {
      alertMessage += 'Review Body must be at least 50 characters. \n';
      e.preventDefault();
      return;
    }

    // photo check

    if (name.length > 60 || name.length === 0) {
      alertMessage += 'Name must be less than 60 characters and cannot be empty. \n';
      e.preventDefault();
      return;
    }

    const emailValidate = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const result = emailValidate.test(String(email).toLowerCase());

    if (result === false || email.length > 60 || email.length === 0) {
      alertMessage += 'Please input a valid email address.';
      e.preventDefault();
      return;
    }

    // check if alert message not empty - check length > 0
    if (alertMessage.length > 0) {
      alert('You must enter the following: \n' + alertMessage);
    }

    handlePostReview(this.state.review);
  }

  render() {
    const { name } = this.props.productInfo;

    return (
      <div>
        <form onSubmit={this.submitReview}>
          <div className="form-title">
            <h1>Write Your Review</h1>
            <h3>About the Product Name: {name}</h3>
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
            <b>* Do you recommend this product</b>
            <div>
              <input type="radio" id="recommend-yes" name="recommend" value="Yes" onClick={this.handleRecommendClick} />
              <label htmlFor="recommend-yes">Yes</label>

              <input type="radio" id="recommend-no" name="recommend" value="No" onClick={this.handleRecommendClick} />
              <label htmlFor="recommend-no">No</label>
            </div>
          </div>

          <div className="characteristics">
            <CharacteristicsList />
            {/* get keys Object.keys */}
          </div>

          <div className="review-summary">
            <label htmlFor="review-summary">Review Summary (optional)</label>
            <br></br>
            <textarea id="review-summary"
              name="summary"
              rows="5" cols="33"
              value={this.state.summary}
              onChange={this.handleInputChange}
              placeholder="Example: Best purchase ever!">
            </textarea>
          </div>

          <div className="name">
            <label htmlFor="name"><b>* Name</b></label>
            <br></br>
            <textarea id="name"
              name="name"
              rows="2" cols="33"
              value={this.state.name}
              onChange={this.handleInputChange}
              placeholder="Example:jackson11">
            </textarea>
            <br></br>
            <small>For privacy reasons, do not use your full name or email address</small>
          </div>

          <div className="email">
            <label htmlFor="email"><b>* Email</b></label>
            <br></br>
            <textarea id="email"
              name="email"
              rows="2" cols="33"
              value={this.state.email}
              onChange={this.handleInputChange}
              placeholder="Example:jackson11@email.com">
            </textarea>
            <br></br>
            <small>For authentication reasons, you will not be emailed</small>
          </div>

          <div className="review-body">
            <label htmlFor="review"><b>* Review Body</b></label>
            <br></br>
            <textarea id="review"
              name="body"
              rows="5" cols="33"
              value={this.state.body}
              onChange={this.handleInputChange}
              placeholder="Why did you like the product or not?">
            </textarea>
          </div>

          <div className="photos">
            <label htmlFor="photos">Upload Photos (optional)</label>
            <br></br>
            <button type="button">Add Photos</button>
          </div>

          <button type="button" onClick={(e) => { this.submitReview(e) }}>Submit Review</button>

        </form >
      </div >
    )
  }
}

export default WriteReview;

/*
localhost:3000/reviews/?product_id=40344&page=1&count=5&sort="helpful"

Metadata for product 40348
{
    "product_id": "40348",
    "ratings": {
        "3": "1",
        "4": "1"
    },
    "recommended": {
        "true": "2"
    },
    "characteristics": {
        "Size": {
            "id": 135232,
            "value": "4.0000000000000000"
        },
        "Width": {
            "id": 135233,
            "value": "3.5000000000000000"
        },
        "Comfort": {
            "id": 135234,
            "value": "4.0000000000000000"
        },
        "Quality": {
            "id": 135235,
            "value": "3.5000000000000000"
        }
    }
}

*/


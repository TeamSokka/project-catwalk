import React from 'react';
import CharacteristicsList from './CharacteristicsList';
import '../Styles/write-review.scss';

class WriteReview extends React.Component {
  constructor(props) {
    super(props);
    const { productID, metaData } = this.props;

    this.state = {
      review: {
        product_id: productID,
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
      metaData: metaData,
      characteristics: {},
      starDisplay: "",
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
    var review2 = Object.assign({}, this.state.review);
    review2[e.target.name] = e.target.value;

    this.setState({
      review: review2
    });
  }

  handleCharacteristicClick(name, e) {
    const { characteristics } = this.state;

    // var characteristics2 = Object.assign({}, this.state.characteristics);
    // characteristics2[name] = {
    //   id: e.target.name,
    //   value: Number(e.target.value)
    // }

    // var review2 = Object.assign({}, this.state.review);
    // var review2 = JSON.parse(JSON.stringify(this.state.review));
    // review2.characteristics.name["id"] = e.target.name;
    // review2.characteristics.name["value"] = eNumber(e.target.value);


    var characteristics2 = Object.assign({}, this.state.characteristics);
    // characteristics2[name] = {
    //   id: Number(e.target.name),
    //   value: parseInt(e.target.value)
    // }

    characteristics2[String(e.target.name)] = parseInt(e.target.value);

    var review2 = Object.assign({}, this.state.review,
      {
        characteristics: Object.assign({}, this.state.review.characteristics, characteristics2)
      }
    );

    this.setState({
      review: review2,
      characteristics: characteristics2
    });

    // this.setState({
    //   characteristics: characteristics2
    // });

    // this.setState({
    //   characteristics: {
    //     ...characteristics,
    //     [e.target.name]: Number(e.target.value),
    //   },
    // });
  }

  handleStarClick(e) {
    var review2 = Object.assign({}, this.state.review);
    review2[e.target.name] = Number(e.target.value);

    this.setState({
      review: review2
    });
  }

  handleRecommendClick(e) {
    var bool;
    if (e.target.value === "Yes") {
      bool = true;
    } else {
      bool = false;
    }

    var review2 = Object.assign({}, this.state.review);
    review2[e.target.name] = bool;

    this.setState({
      review: review2
    });
  }

  // min char count
  minCharCount() {
    const { body } = this.state.review;
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

    e.preventDefault();
    var alertMessage = '';

    if (rating === null) {
      alertMessage += 'Please fill out required ratings option. \n';
    }

    if (recommend === null) {
      alertMessage += 'Please fill out required recommended option. \n';
    }

    if (summary.length > 60) {
      alertMessage += 'Review Summary must be 60 characters or less. \n';
    }

    if (body.length > 1000 || body.length < 50) {
      alertMessage += 'Review Body must be at least 50 characters. \n';
    }

    if (name.length > 60 || name.length === 0) {
      alertMessage += 'Name must be less than 60 characters and cannot be empty. \n';
    }

    const emailValidate = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const result = emailValidate.test(String(email).toLowerCase());

    if (result === false || email.length > 60 || email.length === 0) {
      alertMessage += 'Please input a valid email address.';
    }

    if (alertMessage.length > 0) {
      alert('You must enter the following: \n' + alertMessage);
      return;
    }

    // JSON.parse(JSON.stringify(this.state.review))
    // var review2 = Object.assign({}, this.state.review);
    // var review2 = Object.assign({}, this.state.review);
    // var review2 = JSON.parse(JSON.stringify(this.state.review));

    // review2['characteristics'] = this.state.characteristics;
    // review2['characteristics'] = Object.assign(review2['characteristics'], this.state.characteristics);
    // review2['characteristics'] = JSON.parse(JSON.stringify(this.state.characteristics));
    // alert(review2['characteristics']);
    // console.log(this.state.review)
    // console.log(this.props.metaData)

    handlePostReview(this.state.review);
    alert("Review successfully submitted");
  }

  handleStarClick(index) {
    var review2 = Object.assign({}, this.state.review);
    review2["rating"] = index + 1;

    var mouseOverArray = [0, 0, 0, 0, 0];
    var newStarRating = "";

    if (index === 0) {
      if (this.state.mouseOver[index] === 0) {
        mouseOverArray = [1, 0, 0, 0, 0];
        newStarRating = "Poor";
      }
      this.setState({
        review: review2,
        mouseOver: mouseOverArray,
        starRating: newStarRating
      });
    } else if (index === 1) {

      if (this.state.mouseOver[index] === 0) {
        mouseOverArray = [1, 1, 0, 0, 0];
        newStarRating = "Fair";
      }

      this.setState({
        review: review2,
        mouseOver: mouseOverArray,
        starRating: newStarRating
      });
    } else if (index === 2) {

      if (this.state.mouseOver[index] === 0) {
        mouseOverArray = [1, 1, 1, 0, 0];
        newStarRating = "Average";
      }

      this.setState({
        review: review2,
        mouseOver: mouseOverArray,
        starRating: newStarRating
      });
    } else if (index === 3) {

      if (this.state.mouseOver[index] === 0) {
        mouseOverArray = [1, 1, 1, 1, 0];
        newStarRating = "Good";
      }

      this.setState({
        review: review2,
        mouseOver: mouseOverArray,
        starRating: newStarRating
      });
    } else if (index === 4) {

      if (this.state.mouseOver[index] === 0) {
        mouseOverArray = [1, 1, 1, 1, 1];
        newStarRating = "Great";
      }

      this.setState({
        review: review2,
        mouseOver: mouseOverArray,
        starRating: newStarRating
      });
    }
  }

  mouseOverCB(index) {
    // var mouseOver2 = this.state.mouseOver.slice();

    // if (mouseOver2[index] === 1) {
    //   mouseOver2[index] = 0;
    // } else {
    //   mouseOver2[index] = 1;
    // }

    // this.setState({
    //   mouseOver: mouseOver2
    // });
  }

  render() {
    const { name } = this.props.productInfo;

    return (
      <div>
        <form onSubmit={this.submitReview}>
          <div className="form-title">
            <h1>Write Your Review</h1>
            <h3>About the Product Name: <i>{name}</i> </h3>
            <small>* Required fields</small>
          </div>

          <div className="overall-rating">
            <b style={{
              display: 'flex', justifyContent: 'center', padding: '10px'
            }}>* Overall</b>
            <div style={{
              display: 'flex', justifyContent: 'center', fontSize: '20px', marginTop: '5px', marginBottom: '5px',
            }}
            >

              {
                this.state.mouseOver[0] === 1
                  ? <span className="fa fa-star" aria-hidden="true"
                    onMouseEnter={() => { this.mouseOverCB(0) }}
                    onClick={() => { this.handleStarClick(0) }} />
                  :
                  <span className="fa fa-star-o"
                    onMouseEnter={() => { this.mouseOverCB(0) }}
                    onClick={() => { this.handleStarClick(0) }} />
              }
              {
                this.state.mouseOver[1] === 1
                  ? <span className="fa fa-star" aria-hidden="true"
                    onMouseEnter={() => { this.mouseOverCB(1) }}
                    onClick={() => { this.handleStarClick(1) }} />
                  :
                  <span className="fa fa-star-o"
                    onMouseEnter={() => { this.mouseOverCB(1) }}
                    onClick={() => { this.handleStarClick(1) }} />
              }
              {
                this.state.mouseOver[2] === 1
                  ? <span className="fa fa-star" aria-hidden="true"
                    onMouseEnter={() => { this.mouseOverCB(2) }}
                    onClick={() => { this.handleStarClick(2) }} />
                  :
                  <span className="fa fa-star-o"
                    onMouseEnter={() => { this.mouseOverCB(2) }}
                    onClick={() => { this.handleStarClick(2) }} />
              }
              {
                this.state.mouseOver[3] === 1
                  ? <span className="fa fa-star" aria-hidden="true"
                    onMouseEnter={() => { this.mouseOverCB(3) }}
                    onClick={() => { this.handleStarClick(3) }} />
                  :
                  <span className="fa fa-star-o"
                    onMouseEnter={() => { this.mouseOverCB(3) }}
                    onClick={() => { this.handleStarClick(3) }} />
              }
              {
                this.state.mouseOver[4] === 1
                  ? <span className="fa fa-star" aria-hidden="true" onKeyUp={this.handleKeyUp}
                    onMouseEnter={() => { this.mouseOverCB(4) }}
                    onClick={() => { this.handleStarClick(4) }} />
                  :
                  <span className="fa fa-star-o"
                    onMouseEnter={() => { this.mouseOverCB(4) }}
                    onClick={() => { this.handleStarClick(4) }} />
              }

              <div style={{
                display: 'flex', justifyContent: 'right', fontSize: '13px', marginTop: '5px', marginBottom: '5px', marginLeft: '10px'
              }}
              > {this.state.starRating}</div>
            </div>
          </div>

          <div className="recommend-product">
            <b>* Do you recommend this product</b>
            <div>
              <input className="recommend-product" type="radio" id="recommend-yes" name="recommend" value="Yes"
                onClick={this.handleRecommendClick} />
              <label htmlFor="recommend-yes">Yes</label>

              <input className="recommend-product" type="radio" id="recommend-no" name="recommend" value="No"
                onClick={this.handleRecommendClick} />
              <label htmlFor="recommend-no">No</label>
            </div>
          </div>

          <div className="characteristics">
            <CharacteristicsList
              metaData={this.props.metaData}
              handleCharacteristicClick={this.handleCharacteristicClick}
            />
          </div>

          <div className="name">
            <label htmlFor="name"><b>* Name</b></label>
            <br></br>
            <textarea id="name"
              name="name"
              rows="1" cols="33"
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
              rows="1" cols="33"
              value={this.state.email}
              onChange={this.handleInputChange}
              placeholder="Example:jackson11@email.com">
            </textarea>
            <br></br>
            <small>For authentication reasons, you will not be emailed</small>
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
            <br></br>
            <small>{this.minCharCount()}</small>
          </div>

          <div className="photos">
            <label htmlFor="photos">Upload Photos (optional)</label>
            <br></br>

            <input className="photosFile" id="photos" type="file" name="filefield" multiple="multiple" ></input>
          </div>

          <button className="button" type="button" onClick={(e) => { this.submitReview(e) }}>Submit Review</button>

        </form >
      </div >
    )
  }
}

export default WriteReview;

{/* <span className="fa fa-star" aria-hidden="true"
onClick={() => { this.setState({ rating: 1, mouseOver: [1, 0, 0, 0, 0], starRating: "Poor" }); }} />

<span className="fa fa-star" aria-hidden="true" onClick={() => { this.setState({ rating: 2, mouseOver: [1, 1, 0, 0, 0], starRating: "Fair" }); }} />

<span className="fa fa-star" aria-hidden="true" onClick={() => { this.setState({ rating: 3, mouseOver: [1, 1, 1, 0, 0], starRating: "Average" }); }} />

<span className="fa fa-star" aria-hidden="true" onClick={() => { this.setState({ rating: 4, mouseOver: [1, 1, 1, 1, 0], starRating: "Good" }); }} />

<span className="fa fa-star" aria-hidden="true" onKeyUp={this.handleKeyUp} onClick={() => { this.setState({ rating: 5, mouseOver: [1, 1, 1, 1, 1], starRating: "Great" }); }} /> */}



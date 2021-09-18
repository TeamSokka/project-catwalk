import React from "react";
import ReviewList from "./ReviewList";
import StarRating from "./StarRatings";
import "../Styles/review-list-entry.scss";

class ReviewListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.averageStarRating = this.averageStarRating.bind(this);
    this.handleHelpfulClick = this.handleHelpfulClick.bind(this);
  }

  handleHelpfulClick(e) {
    // this.props.handlePutReview(this.props.review_id, e.target.value);
    this.props.handlePutReview(this.props.review.review_id, e.target.id);


    // axios.put(`/reviews/${this.props.review_id}/${e.target.value}`, {
    //   review_id: this.props.review_id,
    //   type: e.target.value
    // })
    //   .then((result) => {
    //     console.log('Success with handleHelpfulClick');
    //   })
    //   .catch((error) => {
    //     console.log('Error with handleHelpfulClick ' + error);
    //   })
  }

  averageStarRating(obj) {


  }

  render() {
    var stars;
    if (this.props.review.rating) {
      stars = StarRating(this.props.review.rating);
    }

    return (
      <div className="grid-layout-entry">

        <div className="star-layout">
          <div style={{ display: 'flex', zIndex: '-1', marginRight: 'auto', height: '18', width: '15' }}>
            {stars}
          </div>
        </div>

        <div style={{ display: 'flex', marginLeft: 'auto' }}>
          <div className="name-layout">
            <div style={{ display: 'flex', marginLeft: 'auto' }}>
              {this.props.review.reviewer_name}
              ,
            </div>
          </div>
          <div className="date-layout">
            <div style={{ display: 'flex' }}>
              {new Date(this.props.review.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>
        </div>

        {
          this.props.review.summary ?
            <div className="review-layout">
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                {this.props.review.summary}
              </div>
            </div>
            : null
        }

        <div className="body-layout">
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            {this.props.review.body}
          </div>
        </div>

        {
          this.props.review.response ?
            (<div className="response-layout">
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <b>{`Response from seller: ${this.props.review.response}`}</b>
              </div>
            </div>) : null
        }

        {
          this.props.review.recommend ?
            (<div className="recommend-layout">
              <div style={{ display: 'flex' }}>
                ✓ I recommend this product
              </div>
            </div>) : null
        }

        {/* <div>
          Helpful?
          <u onClick={this.handleHelpfulClick}>Yes</u>
          {` ${this.props.review.helpfulness} | `}
          <u onClick={this.handleHelpfulClick}>Report</u>
        </div> */}

        <div className="helpfulness-layout">
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <div style={{
              display: 'flex', justifyContent: 'flex-end', float: 'right', marginLeft: 'auto', marginTop: 'auto',
            }}
            >
              Helpful?
              <u onClick={this.handleHelpfulClick} aria-hidden="true" id="helpful" style={{ marginLeft: '4px', marginRight: '2px' }}>Yes</u>
              {`(${this.props.review.helpfulness}) | `}
              <u onClick={this.handleHelpfulClick} aria-hidden="true" id="report" style={{ marginLeft: '4px' }}>Report</u>
            </div>
          </div>
        </div>
        <br></br>
      </div>
    )
  }
}

export default ReviewListEntry;


/*
body: "Now I can get to stomping!"
date: "2019-05-04T00:00:00.000Z" Ex: January 1, 2019
helpfulness: 12
photos: []
rating: 4
recommend: true
response: ""
review_id: 643584
reviewer_name: "chingy"
summary: "Great shoes!"
*/


/*
<ReviewListEntry
    review={review}
    key={value}
    handlePutReview={this.props.handlePutReview}
>
*/


import { thisExpression } from '@babel/types';
import React from 'react';
import ReviewList from './ReviewList/ReviewList';
import WriteReview from './WriteReview/WriteReview';
import RatingBreakdown from './RatingBreakdown/RatingBreakdown';
import './Styles/ratings-reviews.scss';

const axios = require('axios');
class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    const { metaData } = this.props;

    this.state = {
      reviewList: [],
      metaData: metaData,
      noReviews: false,
      hideMoreReviews: false,
      reviewsDisplayed: 2,
      writeReviewModal: false,
    }

    this.handleGetReview = this.handleGetReview.bind(this);
    this.handlePostReview = this.handlePostReview.bind(this);
    this.handlePutReview = this.handlePutReview.bind(this);
    this.moreReviewsClick = this.moreReviewsClick.bind(this);
    this.writeReviewClick = this.writeReviewClick.bind(this);
    this.exitWriteReviewClick = this.exitWriteReviewClick.bind(this);

  }

  // Get reviews
  handleGetReview() {
    const { productID } = this.props;
    axios.get(`/reviews?product_id=${productID}&page=1&count=5&sort=helpful`)
      .then((result) => {
        if (result.data.results.length === 0) {
          this.setState({
            noReviews: true
          });
        }
        this.setState({
          reviewList: result.data.results
        })
      })
      .catch((error) => {
        console.log('Error with handleGetReview ' + error);
      })
  }

  // Post a review
  handlePostReview(reviewData) { // move to write review
    axios.post('/reviews', reviewData)
      .then((result) => {
        console.log('Success with handlePostReview');
        // this.handleGetReview();
      })
      .catch((error) => {
        console.log('Error with handleGetReview ' + error);
      })
  }

  // Mark review as report vs Helpful
  handlePutReview(review_id, type) {
    axios.put(`/reviews/${review_id}/${type}`)
      .then((result) => {
        console.log('Success with handlePutReview');
      })
      .catch((error) => {
        console.log('Error with handleGetReview ' + error);
      })
  }

  moreReviewsClick() {
    // add two every time
    // check newReviewEnd + 2 is less than total reviews
    // if true, hideReviewButton is false

    // if no more reviews, hideReviewButton is true
    // More Reviews Button is gone

    // check if there is more reviews to be displayed
    if (reviewsDisplayed < this.state.reviewList.length) {
      const newEnd = this.state.reviewsDisplayed + 2;
      if (newEnd > this.state.reviewList.length) {
        newEnd--;
      }
      this.setState({
        reviewsDisplayed: newEnd
      })

      if (newEnd === this.state.reviewList.length) {
        this.setState({
          hideMoreReviews: true
        })
      }

      // } else if (newEnd === this.state.reviewList.length || newEnd === this.state.reviewList.length - 1) {
      //   this.setState({
      //     hideMoreReviews: true,
      //     reviewsDisplayed: newEnd
      //   })
    }
  }

  writeReviewClick(e) {
    this.setState({
      writeReviewModal: true,
    })
  }

  exitWriteReviewClick(e) {
    this.setState({
      writeReviewModal: false,
    })
  }

  componentDidMount() {
    this.handleGetReview();
  }

  render() {

    return (
      <div>
        Ratings and Reviews Section
        {/* <RatingBreakdown /> */}
        <ReviewList
          reviewList={this.state.reviewList}
          handlePutReview={this.state.handlePutReview}
          reviewsDisplayed={this.state.reviewsDisplayed}
        />
        <button className="" type="button" onClick={this.writeReviewClick}>Add a Review</button>
        <button className="" type="button" onClick={this.moreReviewsClick}>More Reviews</button>

        {
          this.state.writeReviewModal
          && (
            <div
              className="modal-style"
              onClick={this.exitWriteReviewClick}
            >
              <div
                className="inner-modal-style"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="close-button" onClick={this.exitWriteReviewClick}>&times;</span>
                <WriteReview
                  handlePostReview={this.handlePostReview}
                  metaData={this.props.metaData}
                  productID={this.props.productID}
                  productInfo={this.props.productInfo}
                />
                <br />
              </div>
            </div>
          )
        }

      </div >
    )
  }
}

export default RatingsAndReviews;
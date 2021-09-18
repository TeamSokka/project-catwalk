import { thisExpression } from '@babel/types';
import React from 'react';
import ReviewList from './ReviewList/ReviewList';
import WriteReview from './WriteReview/WriteReview';
import RatingBreakdown from './RatingBreakdown/RatingBreakdown';
import ProductBreakdown from './ProductBreakdown/ProductBreakdown';
import SortOptions from './SortOptions/SortOptions';

import './Styles/ratings-reviews.scss';

const axios = require('axios');
class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewList: [],
      starSort: [],
      noReviews: false,
      hideMoreReviews: false,
      reviewsDisplayed: 2,
      writeReviewModal: false,
      sortOption: 0,
      reviewsReady: false,
    }

    this.handleGetReview = this.handleGetReview.bind(this);
    this.handlePostReview = this.handlePostReview.bind(this);
    this.handlePutReview = this.handlePutReview.bind(this);
    this.moreReviewsClick = this.moreReviewsClick.bind(this);
    this.writeReviewClick = this.writeReviewClick.bind(this);
    this.exitWriteReviewClick = this.exitWriteReviewClick.bind(this);
    this.sortByStar = this.sortByStar.bind(this);
    this.clearStarFilter = this.clearStarFilter.bind(this);
    this.sortChange = this.sortChange.bind(this);

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
          reviewList: result.data.results,
          reviewsReady: true,
        })
      })
      .catch((error) => {
        console.log('Error with handleGetReview ' + error);
      })
  }

  // Post a review
  handlePostReview(reviewData) { // move to write review
    console.log(reviewData)
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

  sortChange(e) {
    this.setState({
      sortOption: e.target.value,
    });
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

  sortByStar(e) {
    const { starSort } = this.state;
    if (starSort.indexOf(e.target.id) === -1) {
      this.setState({
        starSort: [...starSort, e.target.id],
      });
    } else {
      starSort.splice(starSort.indexOf(e.target.id), 1);
      this.setState({
        starSort,
      });
    }
  }

  clearStarFilter() {
    this.setState({
      starSort: [],
    });
  }

  componentDidMount() {
    this.handleGetReview();
  }

  render() {

    const { metaData } = this.props;

    return (
      <div>
        {
          this.state.reviewsReady === true
          &&
          (<RatingBreakdown
            metaData={metaData}
            starSort={this.state.starSort}
            sortByStar={this.sortByStar}
            clearStarFilter={this.clearStarFilter}
          />)
        }


        <ProductBreakdown
          metaData={this.props.metaData}
        />

        <SortOptions
          metaData={this.props.metaData}
          sortOption={this.state.sortOption}
          sortChange={this.sortChange}
        />

        <ReviewList
          reviewList={this.state.reviewList}
          starSort={this.state.starSort}
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
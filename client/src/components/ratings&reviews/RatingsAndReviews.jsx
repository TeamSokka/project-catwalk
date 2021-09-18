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
      reviewsDisplayed: 0,
      pageLoaded: 1,
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
    // axios.get(`/reviews?product_id=${productID}&page=1&count=5&sort=helpful`)
    axios.get(`/reviews?product_id=${productID}&count=2&page=${this.state.pageLoaded}`)
      .then((result) => {
        if (result.data.results.length === 0) {
          this.setState({
            noReviews: true
          });
        }

        var pageTemp = this.state.pageLoaded + 1;
        var reviewListTemp = this.state.reviewList.concat(result.data.results);
        var reviewsDisplayedTemp = this.state.reviewsDisplayed + result.data.results.length;

        this.setState({
          reviewList: reviewListTemp,
          reviewsReady: true,
          pageLoaded: pageTemp,
          reviewsDisplayed: reviewsDisplayedTemp,
        })

        // if (this.state.reviewsDisplayed < this.state.reviewList.length) {
        //   var newEnd = this.state.reviewsDisplayed + 2;
        //   if (newEnd > this.state.reviewList.length) {
        //     newEnd--;
        //   }
        //   this.setState({
        //     reviewsDisplayed: newEnd
        //   })
        // }

      })
      .catch((error) => {
        console.log('Error with handleGetReview ' + error);
      })
  }

  // Post a review
  handlePostReview(reviewData) { // move to write review
    // console.log(reviewData)
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
        this.handleGetReview();
      })
      .catch((error) => {
        console.log('Error with handleGetReview ' + error);
      })
  }

  moreReviewsClick() {
    this.handleGetReview();
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
      <div className="main-div">
        {
          this.state.reviewsReady === true
          &&
          <div className="rating-grid">
            <RatingBreakdown
              metaData={metaData}
              starSort={this.state.starSort}
              sortByStar={this.sortByStar}
              clearStarFilter={this.clearStarFilter}
            />
          </div>
        }

        <div className="product">
          <ProductBreakdown
            metaData={this.props.metaData}
          />
        </div>

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

        <div className="sort-options">
          <SortOptions
            metaData={this.props.metaData}
            sortOption={this.state.sortOption}
            sortChange={this.sortChange}
          />
        </div>


        <div className="review-list">
          <ReviewList
            reviewList={this.state.reviewList}
            starSort={this.state.starSort}
            handlePutReview={this.handlePutReview}
            reviewsDisplayed={this.state.reviewsDisplayed}
          />
        </div>

        {
          this.state.reviewsDisplayed <= this.state.reviewList.length && this.state.reviewList.length > 0
          && (
            <button className="add-review-btn" type="button" onClick={this.writeReviewClick}>Add a Review</button>
          )
        }

        {
          this.state.reviewsDisplayed <= this.state.reviewList.length && this.state.reviewList.length > 0
          && (
            <button className="more-reviews-btn" type="button" onClick={this.moreReviewsClick}>More Reviews</button>
          )
        }

        {/* <div className="review-buttons">
          <div style={{ display: 'flex', margin: 'auto', justifyContent: 'space-evenly' }}>
            <button className="add-review-btn" type="button" onClick={this.writeReviewClick}>Add a Review</button>
            <button className="more-reviews-btn" type="button" onClick={this.moreReviewsClick}>More Reviews</button>
          </div>
        </div> */}

      </div >
    )
  }
}

export default RatingsAndReviews;
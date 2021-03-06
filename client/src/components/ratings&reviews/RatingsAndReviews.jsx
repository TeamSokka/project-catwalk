// import { thisExpression } from '@babel/types';
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
      reviewsDisplayed: 0,
      pageLoaded: 0,
      writeReviewModal: false,
      hideMoreReviews: false,
      sortOption: 'Relevant',
      reviewsReady: false,
      curPage: 0,
    }

    this.handleGetReview = this.handleGetReview.bind(this);
    this.getReviewSortChange = this.getReviewSortChange.bind(this);
    this.getReviewHelpful = this.getReviewHelpful.bind(this);
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
  handleGetReview(count, sort, pageLoaded) {
    const { productID } = this.props;
    var sortLowerCase = sort.toLowerCase();
    axios.get(`/reviews?product_id=${productID}&count=${count}&page=${pageLoaded}&sort=${sortLowerCase}`)
      .then((result) => {
        if (result.data.results.length === 0) {
          this.setState({
            hideMoreReviews: true
          });
        } else {
          var pageTemp = this.state.pageLoaded + 1;
          var reviewListTemp = this.state.reviewList.concat(result.data.results);
          var reviewsDisplayedTemp = this.state.reviewsDisplayed + result.data.results.length;
          var hide = (result.data.results.length === 1);

          this.setState({
            reviewList: reviewListTemp,
            reviewsReady: true,
            pageLoaded: pageTemp,
            reviewsDisplayed: reviewsDisplayedTemp,
            hideMoreReviews: hide
          })
        }
      })
      .catch((error) => {
        console.log('Error with handleGetReview ' + error);
      })
  }

  //  this.getReviewHelpful(2, this.state.sortOption, pageIndex);
  getReviewHelpful(count, sort, pageLoaded) {
    const { productID } = this.props;
    var sortLowerCase = sort.toLowerCase();
    axios.get(`/reviews?product_id=${productID}&count=${count}&page=${pageLoaded}&sort=${sortLowerCase}`)
      .then((result) => {
        if (result.data.results.length === 0) {
          this.setState({
            hideMoreReviews: true
          });
        }

        var startIndex = (this.state.curPage - 1) * 2;
        var reviewListTemp = [];
        if (startIndex !== 0) {
          var list1 = this.state.reviewList.slice(0, startIndex);
          reviewListTemp = reviewListTemp.concat(list1);
        }
        reviewListTemp = reviewListTemp.concat(result.data.results);
        if (startIndex + 2 < this.state.reviewList.length) {
          var list2 = this.state.reviewList.slice(startIndex, this.state.reviewList.length);
          reviewListTemp = reviewListTemp.concat(list2);
        }

        this.setState({
          reviewList: reviewListTemp,
          reviewsReady: true
        })
      })
      .catch((error) => {
        console.log('Error with handleGetReview ' + error);
      })
  }

  getReviewSortChange(sort, pageLoaded) {
    this.handleGetReview(2, sort, pageLoaded);
  }

  // Post a review
  handlePostReview(reviewData) {
    axios.post('/reviews', reviewData)
      .then((result) => {
        console.log('Success with handlePostReview');
      })
      .catch((error) => {
        console.log('Error with handleGetReview ' + error);
      })
  }

  // Mark review as report vs Helpful
  handlePutReview(review_id, type, index) {
    axios.put(`/reviews/${review_id}/${type}`)
      .then((result) => {
        console.log('Success with handlePutReview');

        var pageIndex = Math.floor((index / 2) + 1);
        this.setState({
          curPage: pageIndex,
        })

        this.getReviewHelpful(2, this.state.sortOption, pageIndex);
      })
      .catch((error) => {
        console.log('Error with handleGetReview ' + error);
      })
  }

  moreReviewsClick() {
    this.handleGetReview(2, this.state.sortOption, this.state.pageLoaded + 1);
  }

  sortChange(e) {
    var sort = e.target.value;
    this.setState({
      sortOption: sort,
      pageLoaded: 0,
      reviewsDisplayed: 0,
      reviewList: [],
    });
    this.getReviewSortChange(sort.toLowerCase(), 1);
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
    var idNum = parseInt(e.target.id);

    if (starSort.indexOf(idNum) === -1) {
      var starSortTemp = this.state.starSort.slice();
      starSortTemp.push(idNum);
      this.sorting(starSortTemp);
      this.setState({
        starSort: starSortTemp
      });
    } else {
      var starSortTemp = this.state.starSort.slice();
      starSortTemp.splice(starSortTemp.indexOf(idNum), 1);
      this.setState({
        starSort: starSortTemp
      });
    }
  }

  sorting(starSortArray) {
    starSortArray.sort((a, b) => b - a);
    return starSortArray;
  }

  clearStarFilter() {
    this.setState({
      starSort: [],
    });
  }

  componentDidMount() {
    this.handleGetReview(2, this.state.sortOption, this.state.pageLoaded + 1);
  }

  render() {
    const { metaData } = this.props;
    return (
      <div className="main-div">
        {
          this.state.reviewsReady === true
          && (
            <div className="grid-layout">
              <div className="rating">
                <RatingBreakdown
                  metaData={metaData}
                  starSort={this.state.starSort}
                  sortByStar={this.sortByStar}
                  clearStarFilter={this.clearStarFilter}
                />
              </div>

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
                  reviewsDisplayed={this.state.reviewsDisplayed}
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

              <div className="review-buttons">
                <div style={{ display: 'flex', margin: 'auto', justifyContent: 'space-evenly' }}>
                  <button className="add-review-btn" type="button" onClick={this.writeReviewClick}>Add a Review</button>

                  {
                    this.state.hideMoreReviews === false && (
                      <button className="more-reviews-btn" type="button" onClick={this.moreReviewsClick}>More Reviews</button>
                    )
                  }
                </div>
              </div>
            </div>
          )
        }
      </div >
    );
  }
}

export default RatingsAndReviews;


// get view sort change
// var sortOptionTemp = this.state.sortOption.toLowerCase();
// var pageLoadedTemp = this.state.pageLoaded;
// if (sort !== undefined && pageLoaded !== undefined) {
//   sortOptionTemp = sort.toLowerCase();
//   pageLoadedTemp = pageLoaded;
// }

// const { productID } = this.props;
// axios.get(`/reviews?product_id=${productID}&count=2&page=${pageLoaded}&sort=${sort}`)
//   .then((result) => {
//     if (result.data.results.length === 0) {
//       this.setState({
//         hideMoreReviews: true
//       });
//     }

//     var pageTemp = this.state.pageLoaded + 1;
//     var reviewListTemp = this.state.reviewList.concat(result.data.results);
//     var reviewsDisplayedTemp = this.state.reviewsDisplayed + result.data.results.length;

//     this.setState({
//       reviewList: reviewListTemp,
//       reviewsReady: true,
//       pageLoaded: pageTemp,
//       reviewsDisplayed: reviewsDisplayedTemp,
//     })

//     // if (this.state.reviewsDisplayed < this.state.reviewList.length) {
//     //   var newEnd = this.state.reviewsDisplayed + 2;
//     //   if (newEnd > this.state.reviewList.length) {
//     //     newEnd--;
//     //   }
//     //   this.setState({
//     //     reviewsDisplayed: newEnd
//     //   })
//     // }
//   })
//   .catch((error) => {
//     console.log('Error with handleGetReview ' + error);
//   })
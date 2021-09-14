import React from 'react';
import ReviewList from './ReviewList/ReviewList';

const axios = require('axios');

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    const { metaData } = this.props;

    this.state = {
      reviewList: [],
      metaData: metaData,
      noReviews: false,
    }

    this.handleGetReview = this.handleGetReview.bind(this);
    this.handlePostReview = this.handlePostReview.bind(this);
    this.handlePutReview = this.handlePutReview.bind(this);
  }

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

  handlePostReview() {

  }

  handlePutReview() {

  }

  componentDidMount() {
    this.handleGetReview();
  }

  render() {
    return (
      <div>
        Ratings and Reviews Section
        <ReviewList reviewList={this.state.reviewList} />
      </div >
    )
  }
}

export default RatingsAndReviews;
import React from 'react';
import ReviewList from './reviewList/reviewList';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Ratings and Reviews Sections
        <ReviewList />
      </div >
    )
  }
}

export default RatingsAndReviews;
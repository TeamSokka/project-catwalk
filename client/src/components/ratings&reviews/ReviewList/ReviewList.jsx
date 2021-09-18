import React from "react";
import ReviewListEntry from "./ReviewListEntry";
import "../Styles/review-list-entry.scss";


class ReviewList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const list = [];
    const curReviewList = this.props.reviewList.slice(0, this.props.reviewsDisplayed);
    curReviewList.forEach((review, value) => {
      list.push(<ReviewListEntry review={review} key={value} handlePutReview={this.props.handlePutReview} />)
    })
    return (
      <ul className="grid-layout">{list}</ul>
    )
  }
}

export default ReviewList;

/*
<ReviewList
  reviewList={this.state.reviewList}
  handlePutReview={this.state.handlePutReview}
  reviewListEnd={this.state.reviewListEnd}
/>

Star Rating               User Name + Date
Review - first line
Review - rest

Helpful  Yes | Report
*/

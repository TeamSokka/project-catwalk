import React from "react";
import ReviewListEntry from "./ReviewListEntry";
import "../Styles/review-list-entry.scss";
import { thisExpression } from "@babel/types";


class ReviewList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const list = [];
    const curReviewList = this.props.reviewList.slice(0, this.props.reviewsDisplayed);

    var index = 0;
    curReviewList.forEach((review, index) => {
      if (this.props.starSort.length === 0 || this.props.starSort.indexOf(review.rating) > -1) {
        list.push(<ReviewListEntry review={review} key={index} index={index} handlePutReview={this.props.handlePutReview} />)
      }
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

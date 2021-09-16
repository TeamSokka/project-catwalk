import React from "react";
import ReviewListEntry from "./ReviewListEntry";

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    console.log(this.props.reviewList);
    const list = [];
    const curReviewList = this.props.reviewList.slice(0, this.props.reviewsDisplayed);
    curReviewList.forEach((review, value) => {
      list.push(<ReviewListEntry review={review} key={value} handlePutReview={this.props.handlePutReview} />)
    })
    return (
      <div>{list}</div>
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

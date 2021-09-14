import React from "react";
import ReviewListEntry from "./ReviewListEntry";

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const list = [];
    this.props.reviewList.forEach((review, value) => {
      list.push(<ReviewListEntry review={review} key={value} />)
    })
    return (
      <div>{list}</div>
    )
  }
}

export default ReviewList;

/*
Star Rating               User Name + Date
Review - first line
Review - rest

Helpful  Yes | Report
*/

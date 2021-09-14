import React from "react";
import ReviewListEntry from "./ReviewListEntry";

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ReviewListEntry />
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

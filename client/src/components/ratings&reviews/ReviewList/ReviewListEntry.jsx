import React from "react";
import ReviewList from "./ReviewList";

class ReviewListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        <li>
          {this.props.review.review_id} {'review_id'}
          <br></br>
          {this.props.review.rating} {'rating'}
          <br></br>
          {this.props.review.summary} {'summary'}
          <br></br>
          {this.props.review.recommend} {'recommend'}
          <br></br>
          {this.props.review.response} {'response'}
          <br></br>
          {this.props.review.body} {'body'}
          <br></br>
          {this.props.review.helpfulness} {'helpfulness'}
          <br></br>
          {this.props.review.photos} {'photos'}
        </li>
      </ul>
    )
  }
}

export default ReviewListEntry;
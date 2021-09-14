import React from "react";
import ReviewList from "./ReviewList";
import StarRating from "./StarRatings";

class ReviewListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.averageStarRating = this.averageStarRating.bind(this);
  }

  averageStarRating(obj) {
 

  }

  render() {
    // Star Rating
    // reviewer name
    // Date
    // review summary
    // body
    // response
    // recommend
    // photos


    return (
      // <div>
      //   <div>{this.props.review.reviewer_name}</div>
      //   <div>{this.props.review.reviewer_name}</div>
      //   <div>{this.props.review.reviewer_name}</div>
      // </div>
      <ul>
        {/* <StarRating averageStarRating={this.props.review.rating} /> */}
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

/*
<ReviewListEntry
    review={review}
    key={value}
    handlePutReview={this.props.handlePutReview}
>

*/

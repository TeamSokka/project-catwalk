import React from "react";
import ReviewList from "./ReviewList";
import StarRating from "./StarRatings";

class ReviewListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.averageStarRating = this.averageStarRating.bind(this);
  }

  handleHelpfulClick(e) {
    this.props.handlePutReview(this.props.review_id, e.target.value);

    // axios.put(`/reviews/${this.props.review_id}/${e.target.value}`, {
    //   review_id: this.props.review_id,
    //   type: e.target.value
    // })
    //   .then((result) => {
    //     console.log('Success with handleHelpfulClick');
    //   })
    //   .catch((error) => {
    //     console.log('Error with handleHelpfulClick ' + error);
    //   })
  }

  averageStarRating(obj) {


  }

  render() {
    // Star Rating
    // Date
    // review summary
    // review body
    // recommend
    // reviewer name
    // response to review
    // rating helpfulness

    /*
    body: "Now I can get to stomping!"
    date: "2019-05-04T00:00:00.000Z" Ex: January 1, 2019
    helpfulness: 12
    photos: []
    rating: 4
    recommend: true
    response: ""
    review_id: 643584
    reviewer_name: "chingy"
    summary: "Great shoes!"
    */

    var stars;
    if (this.props.review.rating) {
      stars = StarRating(this.props.review.rating);
    }

    return (
      <div>
        {stars}
        <div>{this.props.review.reviewer_name}</div>
        <div> {new Date(this.props.review.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</div>
        <div>{this.props.review.summary}</div>
        <div>{this.props.review.body}</div>
        {
          this.props.review.response ?
            (<b>{`Response from seller: ${this.props.review.response}`}</b>) : null
        }
        {
          this.props.review.recommend ?
            (<div>{`✓ I recommend this product: ${this.props.review.recommend}`}</div>) : null
        }
        <div>
          Helpful?
          <u onClick={this.handleHelpfulClick}>Yes</u>
          {` ${this.props.review.helpfulness} | `}
          <u onClick={this.handleHelpfulClick}>Report</u>
        </div>
        <br></br>
      </div>
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

// <ul>
//   {/* <StarRating averageStarRating={this.props.review.rating} /> */}
//   <li>
//     {this.props.review.review_id} {'review_id'}
//     <br></br>
//     {this.props.review.rating} {'rating'}
//     <br></br>
//     {this.props.review.summary} {'summary'}
//     <br></br>
//     {this.props.review.recommend} {'recommend'}
//     <br></br>
//     {this.props.review.response} {'response'}
//     <br></br>
//     {this.props.review.body} {'body'}
//     <br></br>
//     {this.props.review.helpfulness} {'helpfulness'}
//     <br></br>
//     {this.props.review.photos} {'photos'}
//   </li>
// </ul>

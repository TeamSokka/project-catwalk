import React from 'react';
import '../Styles/ratings-reviews.scss'
class SortOptions extends React.Component {
  constructor(props) {
    super(props);
    this.totalReviews = this.totalReviews.bind(this);
  }

  totalReviews(obj) {
    var sum1;
    var sum2;
    if (obj.false === undefined) {
      sum1 = 0;
    } else {
      sum1 = Number(obj.false);
    }

    if (obj.true === undefined) {
      sum2 = 0;
    } else {
      sum2 = Number(obj.true);
    }
    const total = sum1 + sum2;
    return total;
  }

  render() {
    return (
      <div>
        {`${this.props.reviewsDisplayed} reviews, sorted by`}
        <select value={this.props.sortOption} className="options-bar" onChange={this.props.sortChange}>
          <option value="Helpful">Helpful</option>
          <option value="Newest">Newest</option>
          <option value="Relevant">Relevant</option>
        </select>
      </div >
    )
  }
}

export default SortOptions;

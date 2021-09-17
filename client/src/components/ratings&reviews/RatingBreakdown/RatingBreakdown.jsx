import React from 'react';
import StarRating from '../ReviewList/StarRatings';
import RatingBreakdownList from './RatingBreakdownList';
class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  /*
  "ratings": {
    "3": "1",
    "4": "1"
  },
  */

  averageRating(obj) {
    var part = 0;
    var total = 0;
    for (var starVal in obj) {
      part += (Number(obj[starVal]) * Number(starVal));
      total += Number(obj[starVal]);
    }
    const result = part / total;
    if (isNaN((Math.round(result * 4) / 4).toFixed(1))) {
      return 0;
    }
    return result;
  }

  /*
  "recommended": {
    "true": "2"
    "false": "2"
  },
  */

  averageRecommended(obj) {
    const total = Number(2) + Number(2);
    const result = Number(2) / total;

    if (isNaN(result.toFixed(2) * 100)) {
      return 0;
    }
    return result.toFixed(2) * 100;
  }

  render() {
    const { ratings } = this.props.metaData;
    const { recommended } = this.props.metaData;
    console.log(recommended);
    console.log(this.props.metaData);


    var stars = StarRating(this.averageRating(ratings));

    return (
      <div>
        <div>Ratings and Reviews</div>
        <div>Average rating: {this.averageRating(ratings)}</div>
        <div>Star rating: {stars}</div>
        <div>{`${this.averageRecommended(recommended)}%: Number of reviews recommend this product`}</div>
        <div>Star sort</div>
        <div>Ratings Breakdown List
          <RatingBreakdownList
            metaData={this.props.metaData}
            sortByStar={this.props.sortByStar}
          />
        </div>
      </div>
    );
  }
}

export default RatingBreakdown;

/*
<RatingBreakdown
  metaData={this.props.metaData}
  starSort={this.state.starSort}
  sortByStar={this.sortByStar}
  clearStarFilter={this.clearStarFilter}
/>
*/

/*
{
  "product_id": "40348",
    "ratings": {
    "3": "1",
      "4": "1"
  },
  "recommended": {
    "true": "2"
  },
  "characteristics": {
    "Size": {
      "id": 135232,
        "value": "4.0000000000000000"
    },
    "Width": {
      "id": 135233,
        "value": "3.5000000000000000"
    },
    "Comfort": {
      "id": 135234,
        "value": "4.0000000000000000"
    },
    "Quality": {
      "id": 135235,
        "value": "3.5000000000000000"
    }
  }
}
*/
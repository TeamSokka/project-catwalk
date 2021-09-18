import React from 'react';
import RatingsBreakdownListEntry from './RatingBreakdownEntry';

const totalCount = (obj) => {
  let total = 0;
  for (const star in obj) {
    total += Number(obj[star]);
  }
  return total;
};
class RatingBreakdownList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var numbers = ["5", "4", "3", "2", "1"];
    var list = [];
    var sum = totalCount(this.props.ratings);

    for (var i = 0; i < numbers.length; i++) {
      var num = numbers[i];
      var ratingCount;
      if (this.props.ratings[num] === undefined) {
        ratingCount = 0;
      } else {
        ratingCount = this.props.ratings[num];
      }

      var percentage = ((Number(ratingCount)) / sum).toFixed(2) * 100;

      list.push(
        <RatingsBreakdownListEntry
          rating={num}
          ratings={this.props.ratings}
          ratingCount={ratingCount}
          sortByStar={this.props.sortByStar}
          key={num}
          percentage={percentage}
        />
      )
    }
    return (
      <div>
        {list}
      </div>
    );
  }
}

export default RatingBreakdownList;


// "ratings": {
//   "3": "1",
//   "4": "1"
// },

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

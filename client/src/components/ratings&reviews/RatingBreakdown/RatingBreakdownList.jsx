import React from 'react';
import RatingsBreakdownListEntry from './RatingBreakdownEntry';
class RatingBreakdownList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }
  render() {
    var numbers = [5, 4, 3, 2, 1];
    var list = [];
    const { ratings } = this.props.metaData;
    console.log(this.props.metaData.ratings);

    numbers.forEach((num) => {
      var totalRate;
      // if (typeof this.props.metaData.ratings[num] === undefined) {
      //   totalRate = 0;
      // } else {
      //   totalRate = this.props.metaData.ratings[num];
      // }

      list.push(
        <RatingsBreakdownListEntry
          rating={num}
          ratings={this.props.metaData.ratings}
          totalRating={5}
          sortByStar={this.props.sortByStar}
          key={num}
        />
      )
    })
    return (
      <div>{list}</div>
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
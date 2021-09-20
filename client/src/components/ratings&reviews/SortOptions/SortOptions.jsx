import React from 'react';
import '../Styles/ratings-reviews.scss'
class SortOptions extends React.Component {
  constructor(props) {
    super(props);
    this.totalReviews = this.totalReviews.bind(this);
  }

  totalReviews(obj) {
    const total = Number(obj.false) + Number(obj.true);
    return total;
  }

  render() {
    return (
      <div style={{ fontFamily: 'arial' }}>
        {`${this.totalReviews(this.props.metaData.recommended)} reviews, sorted by`}
        <select value={this.props.sortOption} className="options-bar" onChange={this.props.sortChange}>
          <option value="Helpful">Helpful</option>
          <option value="Newest">Newest</option>
          <option value="Relevant">Relevant</option>
        </select>
      </div>
    )
  }
}

export default SortOptions;

/*
<SortOptions
  metaData={this.state.metaData}
  sortOption={this.state.sortOption}
  sortChange={this.sortChange}
/>
# reviews, sorted by ___

Form - React Documentation
options
Helpful
Newest
Relevant
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

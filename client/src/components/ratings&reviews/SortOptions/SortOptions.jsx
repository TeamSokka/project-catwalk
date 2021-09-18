import React from 'react';

const optionsBar = {
  width: '100px',
  boxShadow: '2px 2px 4px grey',
  marginLeft: '10px',
  border: '1px solid grey',
  textAlign: 'center',
  cursor: 'pointer',
};

class SortOptions extends React.Component {
  constructor(props) {
    super(props);

    this.totalReviews = this.totalReviews.bind(this);
  }

  // total reviews
  totalReviews(obj) {
    const total = Number(obj.false) + Number(obj.true);
    return total;
  }

  render() {
    return (
      <div>
        {`${this.totalReviews(this.props.metaData.recommended)} reviews, sorted by most `}

        <select style={optionsBar} onChange={this.props.sortChange}>
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

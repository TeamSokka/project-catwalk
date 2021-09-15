import React from 'react';
import ReviewList from '../reviewList/reviewList';

class SortOptions extends React.Component {
  constructor(props) {
    super(props);
  }

  // total reviews
  totalReviews() {

  }

  render() {
    return (
      <div>
        {`reviews, sorted by most`}
        <select value={ } onChange={ }>
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
# reviews, sorted by ___

Form - React Documentation
options
Helpful
Newest
Relevant
*/

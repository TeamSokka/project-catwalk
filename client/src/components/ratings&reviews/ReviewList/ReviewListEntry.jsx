import React from "react";

class ReviewListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          Star Rating 1234456
        </div>
        <div>
          User name
        </div>
        <div>
          {new Date().toLocaleString() + ''}
        </div>
        <div>
          review summary abc
        </div>
      </div>
    )
  }
}

export default ReviewListEntry;
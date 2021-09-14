import React from "react";

class ReviewListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          Star Rating test test
        </div>
        <div>
          User name
        </div>
        <div>
          {new Date().toLocaleString() + ''}
        </div>
        <div>
          review summary
        </div>
      </div>
    )
  }
}

export default ReviewListEntry;
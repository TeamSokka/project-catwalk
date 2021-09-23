import React from 'react';
import '../Styles/star-filter.scss';

class StarFilterEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div id={`${this.props.star}`} className="star">
        <div style={{ textAlign: 'center' }}>
          {`${this.props.star} stars`}
        </div>
      </div>
    );
  }
}

export default StarFilterEntry;

import React from 'react';
import '../Styles/rating-breakdown-entry.scss'
class RatingBreakdownEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }

    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {
    var linkStyle;
    if (this.state.hover) {
      linkStyle = { backgroundColor: 'paleturquoise' }
    } else {
      linkStyle = {}
    }

    return (
      <div id={this.props.rating}
        style={linkStyle}
        className="star-bar"
        className="star-bar-flex"
        onClick={this.props.sortByStar}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >

        <u>{`${this.props.rating} stars`}</u>

        <div id={this.props.rating} className="star-bar">
          <div style={{
            background: 'rgb(50,205,50)',
            height: '100%',
            borderRadius: 'inherit',
            width: `${this.props.percentage}%`,
          }}
          />
        </div>
        <div id={this.props.rating} className="star-font">{this.props.ratingCount}</div>
      </div>
    );
  }
}

export default RatingBreakdownEntry;


import React from 'react';

const starBar = {
  height: '8px',
  marginLeft: '8px',
  marginRight: '10px',
  marginTop: '5px',
  width: '130px',
  border: 'none',
  backgroundColor: 'rgba(232, 232, 232, .8)',
};

const starBarFlex = {
  display: 'flex',
  marginBottom: '10px',
  paddingLeft: '7px',
  cursor: 'pointer',
};

const starFont = {
  fontSize: '12px',
  color: 'grey',
};

const starPercentage = (obj, key) => {
  let total = 0;
  for (const star in obj) {
    total += Number(obj[star]);
  }
  if (isNaN((Number(obj[key]) / total).toFixed(2))) {
    return 0;
  }
  return ((Number(obj[key]) / total).toFixed(2) * 100);
};


class RatingBreakdownEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div id={this.props.rating} aria-hidden="true" className="starBar" style={starBarFlex} onClick={this.props.sortByStar}>
        <u>{`${this.props.rating} stars`}</u>

        <div id={this.props.rating} style={starBar}>
          <div style={{
            background: 'rgba(51, 170, 51, .8)',
            height: '100%',
            borderRadius: 'inherit',
            width: `75%`,
            // width: `${starPercentage(this.props.ratings, this.props.rating)}%`,

          }}
          />
        </div>

        <div id={this.props.rating} style={starFont}>{this.props.totalRating}</div>

      </div>
    );
  }
}

/*
 <RatingsBreakdownListEntry
  rating={rating}
  ratings={this.props.metaData.ratings}
  totalRating={5}
  sortByStar={this.props.sortByStar}
  key={index}
/>
*/

export default RatingBreakdownEntry;

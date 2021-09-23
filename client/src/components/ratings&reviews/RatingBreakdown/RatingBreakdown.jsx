import React from 'react';
import StarRating from '../ReviewList/StarRatings';
import RatingBreakdownList from './RatingBreakdownList';
import StarFilterEntry from './StarFilterEntry';
import '../Styles/rating-breakdown-entry.scss';
// import { ModuleGraphConnection } from 'webpack';
class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props);
  }

  averageRating(obj) {
    var part = 0;
    var total = 0;
    for (var starVal in obj) {
      part += (Number(obj[starVal]) * Number(starVal));
      total += Number(obj[starVal]);
    }
    const result = part / total;
    if (isNaN((Math.round(result * 4) / 4).toFixed(1))) {
      return 0;
    }
    return result;
  }

  averageRecommended(obj) {
    var sum1;
    var sum2;
    if (isNaN(obj.false)) {
      sum1 = 0;
    } else {
      sum1 = Number(obj.false);
    }

    if (obj.true === null) {
      sum2 = 0;
    } else {
      sum2 = Number(obj.true);
    }
    const total = sum1 + sum2;
    const result = sum2 / total;

    if (isNaN(result.toFixed(1) * 100)) {
      return 0;
    }
    return result.toFixed(1) * 100;
  }

  render() {
    const { ratings } = this.props.metaData;
    const { recommended } = this.props.metaData;

    var stars = StarRating(this.averageRating(ratings));

    return (
      <div className="grid-layout">
        <div className="header">
          RATINGS AND REVIEWS
        </div>

        <div className="avg-rating">
          {this.averageRating(ratings).toFixed(1)}
        </div>

        <div style={{
          gridColumn: '1',
          gridRow: '3',
        }}
        >
          <div className="stars">
            {stars}
          </div>
        </div>

        <div style={{
          gridColumn: '1',
          gridRow: '4',
          color: 'grey',
          textAlign: 'center',
        }}
        >
          <div className="recommended-avg">
            {`${this.averageRecommended(recommended)}%: Number of reviews recommend this product`}
          </div>
        </div>

        <div style={{
          gridColumn: '1',
          gridRow: '5',
        }}
        >
          <div className="filters-containers">
            {
              this.props.starSort.length > 0
              && (
                <div>
                  <div className="star-filter">
                    {this.props.starSort
                      .map((star) => (
                        <StarFilterEntry star={star} sortByStar={this.props.sortByStar} key={star} />
                      ))}
                  </div>
                  <div className="clear-star-filter" onClick={this.props.clearStarFilter}>
                    <u style={{ color: 'grey', fontSize: '12px' }}>Remove all filters</u>
                  </div>
                </div>
              )
            }
          </div>
        </div>

        <div style={{
          gridColumn: '1',
          gridRow: '6',
          display: 'flex',
          justifyContent: 'center',
        }}
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <RatingBreakdownList
              metaData={this.props.metaData}
              ratings={this.props.metaData.ratings}
              sortByStar={this.props.sortByStar}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default RatingBreakdown;

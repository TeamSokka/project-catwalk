import React from 'react';
import StarRating from '../ratings&reviews/ReviewList/StarRatings.jsx';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';

//ProductInfo module

var ProductInfo = (props) => {
  function averageRating(obj) {
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
  };

  return (
  <div id="selected-product-info">
    <span id="category">{props.productInfo.category}</span>
    <span id="name"><h2>{props.productInfo.name}</h2></span>
    <div>
      <span className={props.selectedStyle.sale_price ? "price old" : "price"}>${props.selectedStyle.original_price}</span>
      {props.selectedStyle.sale_price &&
        <span className="price new">{props.selectedStyle.sale_price}</span>}
    </div>
    <div className="review-summary"></div>
    {props.metaReady
      ? StarRating(averageRating(props.metaData.ratings))
      : StarRating(averageRating(0))
    }
    <h4>{props.productInfo.slogan}</h4>
    <p>
      {props.productInfo.description}
    </p>
    <div>Share:</div>
    <div className="social-media">
      <FaFacebook className="icon"/>
      <FaTwitter className="icon"/>
      <FaPinterest className="icon"/>
    </div>
  </div>
)};

export default ProductInfo;
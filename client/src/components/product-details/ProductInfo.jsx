import React from 'react';

//ProductInfo module

var ProductInfo = (props) => (
  <div>
    {/* <StarRating /> */}
    <span id="category">{props.productinfo.category}</span>
    <span id="name">{props.productinfo.name}</span>
    <span id="price">${props.productinfo.default_price}</span>
    <h2>{props.productinfo.slogan}</h2>
    <p>
      {props.productinfo.description}
    </p>
    <div>Share:</div>
    <div>
      <i>F</i>
      <i>T</i>
      <i>P</i>
    </div>
  </div>
);

export default ProductInfo;
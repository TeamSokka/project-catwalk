import React from 'react';

//ProductInfo module

var ProductInfo = (props) => (
  <div>
    <StarRating />
    <span id="category">{props.productinfo.category}</span>
    <span id="name">Product Title{props.productinfo.name}</span>
    <span id="price">$###</span>
    <p><h3>{props.productinfo.slogan}</h3>
      {props.productinfo.description}
    </p>
    <div>Share:
      <i>F</i>
      <i>T</i>
      <i>P</i>
    </div>
  </div>
);

export default ProductInfo;
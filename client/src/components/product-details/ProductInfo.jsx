import React from 'react';

//ProductInfo module

var ProductInfo = (props) => (
  <div id="selected-product-info">
    {/* <StarRating /> */}
    <span id="category">{props.productInfo.category}</span>
    <span id="name">{props.productInfo.name}</span>
    <span id="price">${
      props.selectedStyle.sale_price
      ? props.selectedStyle.sale_price
      : props.selectedStyle.original_price}</span>
    <h2>{props.productInfo.slogan}</h2>
    <p>
      {props.productInfo.description}
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
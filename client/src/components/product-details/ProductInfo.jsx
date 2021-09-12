import React from 'react';

//ProductInfo module

var ProductInfo = (props) => (
  <div>
    <StarRating />
    <span>CATEGORY</span>
    <span>Product Title</span>
    <span>$###</span>
    <p><h3>Product Overview</h3>
      This free form text field may exist on some items.  If it is available it should be displayed.
    </p>
    <div>
      <i>F</i>
      <i>T</i>
      <i>P</i>
    </div>
  </div>
);

export default ProductInfo;
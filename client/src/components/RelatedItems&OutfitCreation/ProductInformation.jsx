import React from 'react';
import { formatRelatedItems } from '../helpers/_functions.js'
import './related-items.scss';

const ProductInformation = (props) => {
  const { productInfo } = props;
  const information = formatRelatedItems(productInfo);

  return (
    <div id="product-info">
      <div>
        <p>{information.category}
          <br />{information.name}
          <br />${information.price}
          <br /> Star rating
        </p>
      </div>
    </div>
  )
}

export default ProductInformation;
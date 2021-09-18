import React from 'react';
import { formatRelatedItems } from '../helpers/_functions.js'
import './related-items.scss';

const ProductInformation = (props) => {
  const { productInfo, product } = props;
  const information = formatRelatedItems(productInfo);

  // console.log('information: ', information);
  // console.log('product', product);

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
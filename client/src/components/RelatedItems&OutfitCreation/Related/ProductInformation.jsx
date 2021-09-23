import React from 'react';
import '../related-items.scss';

const ProductInformation = (props) => {
  const { productInfo, product } = props;

  let price = product.default_price.split('.');
  price = Number(price[0]);

  return (
    <div id="product-info">
      <span id="info-category">{product.category}</span>
      <span id="info-name">{product.name}</span>
      <span id="info-price">${price}</span>
      <span>Star Rating</span>
    </div>
  )
}

export default ProductInformation;
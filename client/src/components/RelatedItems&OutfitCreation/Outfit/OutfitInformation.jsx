import React from 'react';
import '../related-items.scss';

const OutfitInformation = (props) => {
  const { name, category, price  } = props;

  let formattedPrice = price.split('.');
  formattedPrice = Number(price[0]);

  return (
    <div id="product-info">
      <span id="info-category">{category}</span>
      <span id="info-name">{name}</span>
      <span id="info-price">${formattedPrice}</span>
      <span>Star Rating</span>
    </div>
  )
}

export default OutfitInformation;
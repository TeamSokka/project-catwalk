//ProductDetail extends React.Component
import React from 'react';
import ImageGallery from 'ImageGallery.jsx';
import ProductInfo from 'ProductInfo.jsx';
import ImageGallery from 'ImageGallery.jsx';
import AddToCart from 'AddToCart.jsx';
import ImageGallery from 'ImageGallery.jsx';

import data from ('/dummy-data/data.js');

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: data.info,
      productStyles: data.styles,
      relatedProducts: data.related,
      selectedStyle: null,
      selectedSize: null
    }
  }

  render() {
    return (
      <div>This will be the ProductDetail widget!</div>
    )
  }
};

export default ProductDetail;
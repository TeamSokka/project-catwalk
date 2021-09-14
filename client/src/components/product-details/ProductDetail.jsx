//ProductDetail extends React.Component
import React from 'react';
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import AddToCart from './AddToCart.jsx';

import data from './data/dummy-data.js';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: data.info,
      styles: data.styles,
      relatedProducts: data.related,
      reviews: [],
      selectedStyle: null,
      selectedSize: null
    }
  }

  render() {
    return (
      <div>
        <ImageGallery
          productinfo={this.state.productInfo}
          styles={this.state.styles}
          selectedstyle={this.state.styles}
        />
        <div>
          <ProductInfo
            productinfo={this.state.productInfo}
          />
          <StyleSelector
            selectedstyle={this.state.selectedStyle}
          />
          <AddToCart
            selectedsize={this.state.selectedSize}
          />
        </div>
      </div>
    )
  }
};

export default ProductDetail;
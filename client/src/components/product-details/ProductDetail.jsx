//ProductDetail extends React.Component
import React from 'react';
import ImageGallery from 'ImageGallery.jsx';
import ProductInfo from 'ProductInfo.jsx';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: {},
      productStyles: {},
      relatedProducts: []
    }
  }

  render() {
    return (
      <div>This will be the ProductDetail widget!</div>
    )
  }
};

export default ProductDetail;
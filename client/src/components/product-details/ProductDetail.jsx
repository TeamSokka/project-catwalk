//ProductDetail extends React.Component
import React from 'react';
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import AddToCart from './AddToCart.jsx';
import actios from 'axios';
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

  getProductInfo(id) {
    axios.get('/products/:product_id', {
      params: {
        product_id: id
      }
    })
      .then((res) => {
        console.log('productInfo recd');
        this.setState({
          productInfo: res.data
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  getStyles(id) {
    axios.get('/products/:product_id/styles', {
      params: {
        product_id: id
      }
    })
      .then((res) => {
        console.log('styles recd');
        this.setState({
          styles: res.data
        })
      })
      .catch((err) => {
        console.error(err);
      });
  }

  getRelated(id) {
    axios.get('/products/:product_id/related', {
      params: {
        product_id: id
      }
    })
      .then((res) => {
        console.log('related products recd');
        this.steState({
          related: res.data
        })
      })
      .catch((err) => {
        console.error(err);
      });
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
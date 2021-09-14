//ProductDetail extends React.Component
import React from 'react';
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import AddToCart from './AddToCart.jsx';
import axios from 'axios';
import data from './data/dummy-data.js';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductId: 40344,
      productInfo: data.info,
      styles: data.styles.results,
      relatedProducts: data.related,
      reviews: [],
      selectedStyle: data.styles.results[0],
      selectedSize: null,
      selectedPhotoIndex: 0
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

  componentDidMount() {
    console.log('styles:', this.state.styles);
    console.log('selected style:', this.state.selectedStyle);
    console.log('photos:', this.state.selectedStyle.photos);
    // this.getProductInfo(this.state.currentProductId);
    // this.getStyles(this.state.currentProductId);
    // this.getRelated(this.state.currentProductId);
    // this.setState({
    //   selectedStyle: this.state.styles[0]
    // });
  }

  render() {
    return (
      <div><h2>Product details</h2>
        <ImageGallery
          photos={this.state.selectedStyle.photos}
          selectedphotoindex={this.state.selectedPhotoIndex}
        />
        {/* <div>
          <ProductInfo
            productinfo={this.state.productInfo}
          />
          <StyleSelector
            selectedstyle={this.state.selectedStyle}
          />
          <AddToCart
            selectedsize={this.state.selectedSize}
          />
        </div> */}
      </div>
    );
  }
};

export default ProductDetail;
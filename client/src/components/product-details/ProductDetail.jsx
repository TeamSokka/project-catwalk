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
      productInfo: {},
      styles: [],
      relatedProducts: [],
      reviews: [],
      selectedStyle: { photos: [] },
      selectedSize: null,
      selectedPhotoIndex: 0
    }
  }

  getProductInfo(id) {
    axios.get(`/products/${this.state.currentProductId}`, {
      params: {
        product_id: id
      }
    })
      .then((res) => {
        console.log('productInfo recd:', res.data);
        this.setState({
          productInfo: res.data
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  getStyles(id) {
    axios.get(`/products/${this.state.currentProductId}/styles`, {
      params: {
        product_id: id
      }
    })
      .then((res) => {
        console.log('styles recd:', res.data);
        this.setState({
          styles: res.data,
          selectedStyle: res.data.results[0]
        })
      })
      .catch((err) => {
        console.error(err);
      });
  }

  getRelated(id) {
    axios.get(`/products/${this.state.currentProductId}/related`, {
      params: {
        product_id: id
      }
    })
      .then((res) => {
        console.log('related products recd:', res.data);
        this.setState({
          relatedProducts: res.data
        })
      })
      .catch((err) => {
        console.error(err);
      });
  }

  componentDidMount() {
    this.getProductInfo(this.state.currentProductId);
    this.getStyles(this.state.currentProductId);
    this.getRelated(this.state.currentProductId);
    // this.setState({
    //   selectedStyle: this.state.styles[0]
    // });
    console.log('styles:', this.state.styles);
    console.log('selected style:', this.state.selectedStyle);
    console.log('photos:', this.state.selectedStyle.photos);
  }

  render() {
    return (
      <div><h4>Product Details</h4>
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
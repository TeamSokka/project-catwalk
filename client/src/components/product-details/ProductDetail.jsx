//ProductDetail extends React.Component
import React from 'react';
import axios from 'axios';
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import data from './data/dummy-data.js';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductId: this.props.productID,
      productInfo: this.props.productInfo,
      styles: [],
      // relatedProducts: this.props.related,
      reviews: [],
      selectedStyle: { photos: [], skus: {} },
      selectedSizeSKU: { quantity: 0 },
      selectedPhotoIndex: 0
    }
  }

  // getProductInfo() {
  //   axios.get(`/products/${this.state.currentProductId}`)
  //     .then((res) => {
  //       console.log('productInfo recd:', res.data);
  //       this.setState({
  //         productInfo: res.data
  //       });
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }

  getStyles() {
    axios.get(`/products/${this.state.currentProductId}/styles`)
      .then((res) => {
        console.log('styles recd:', res.data.results);
        this.setState({
          styles: res.data.results,
          selectedStyle: res.data.results[0]
        });
        this.setState({
          selectedSizeSKU: res.data.results[0][Object.keys(res.data.results[0].skus)][0]
        })
      })
      .catch((err) => {
        console.error(err);
      })
  }

  // getRelated() {
  //   axios.get(`/products/${this.state.currentProductId}/related`)
  //     .then((res) => {
  //       console.log('related products recd:', res.data);
  //       this.setState({
  //         relatedProducts: res.data
  //       })
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }

  handleSizeSelect(event) {
    this.setState({
      selectedSizeSKU: event.target.value
    })
  }

  componentDidMount() {
    // this.getProductInfo();
    this.getStyles();
    // this.getRelated();
    // this.setState({
    //   selectedStyle: this.state.styles[0]
    // });
    // console.log('styles:', this.state.styles);
    // console.log('selected style:', this.state.selectedStyle);
    // console.log('photos:', this.state.selectedStyle.photos);
  }

  render() {
    return (
      <div><h4>Product Details</h4>
        <ImageGallery
          photos={this.state.selectedStyle.photos}
          selectedphotoindex={this.state.selectedPhotoIndex}
        />
        <div>
          <ProductInfo
            productinfo={this.state.productInfo}
          />
          <StyleSelector
            styles={this.state.styles}
            selectedstyle={this.state.selectedStyle}
          />
          <AddToCart
            selectedsizesku={this.state.selectedSizeSKU}
            selectedstyle={this.state.selectedStyle}
            handlesizeselect={this.handleSizeSelect.bind(this)}
          />
        </div>
      </div>
    );
  }
};

export default ProductDetail;
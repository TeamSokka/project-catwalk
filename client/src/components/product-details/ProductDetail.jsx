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
      prodInfo: this.props.productInfo,
      styles: [],
      // relatedProducts: this.props.related,
      reviews: [],
      selectedStyle: { photos: [], skus: {} },
      selectedSize: "",
      selectedQuantity: 1,
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
        // console.log('styles recd:', res.data.results);
        console.log('skus[0]:', Object.keys(res.data.results[0].skus)[0])
        this.setState({
          styles: res.data.results,
          selectedStyle: res.data.results[0],
          // selectedSize: res.data.results[0].skus[Object.keys(res.data.results[0].skus)[0]]
        });
        console.log('state:', this.state)
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

  handleStyleSelect(event) {
    event.preventDefault();
    console.log('event.target:', event.target);
    console.log('event.target.dataset.index:', event.target.dataset.index);
    this.setState({
      selectedStyle: this.state.styles[event.target.dataset.index]
    })
  }

  handleSizeSelect(event) {
    event.preventDefault();
    console.log('size select entry:', event.target.value);
    this.setState({
      selectedSize: this.state.selectedStyle.skus[event.target.value]
    });
  }

  handleQuantitySelect(event) {
    event.preventDefault();
    console.log('quantity entery:', event.target.value);
    this.setState({
      selectedQuantity: event.target.value
    });
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
            productinfo={this.props.productInfo}
          />
          <StyleSelector
            styles={this.state.styles}
            selectedstyle={this.state.selectedStyle}
            handleStyleSelect={this.handleStyleSelect.bind(this)}
          />
          <AddToCart
            selectedsize={this.state.selectedSize}
            selectedstyle={this.state.selectedStyle}
            selectedquantity={this.state.selectedquantity}
            handlesizeselect={this.handleSizeSelect.bind(this)}
            handlequantityselect={this.handleQuantitySelect.bind(this)}
          />
        </div>
      </div>
    );
  }
};

export default ProductDetail;
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
      reviews: [],
      selectedSize: "",
      selectedQuantity: 1,
      selectedPhotoIndex: 0,
      cart: null
    }
  }

  getCart() {
    axios.get(`/cart`)
      .then((res) => {
        this.setState({
          cart: res.data
        });
      })
      .catch((err) => {
        console.error(err);
      })
  }

  postToCart(cartData) {
    axios.post(`/cart`, cartData)
      .then((res) => {
        // console.log('styles recd:', res.data.results);
        console.log('cart data recd:', res.data);
      })
      .catch((err) => {
        console.error(err);
      })
  }

  handleCartSubmit(event) {
    event.preventDefault();
    console.log('event.target.sizesku.value:', event.target.sizesku.value);
    console.log('event.target.quantity.value:', event.target.quantity.value);
    console.log('what type?', typeof event.target.quantity.value);

    var count = parseInt(event.target.quantity.value);
    for (var i = 1; i <= count; i++) {
      this.postToCart({ sku_id: event.target.sizesku.value });
    }
    // this.postToCart({ sku_id: event.target.sizesku.value, count: event.target.quantity.value});
  }

  handleSizeSelect(event) {
    event.preventDefault();
    console.log('size select entry:', event.target.value);
    this.setState({
      selectedSize: this.props.selectedStyle.skus[event.target.value]
    });
    event.target.size = '1';
    // document.getElementById('size-selector').size = '1';
  }

  handleQuantitySelect(event) {
    event.preventDefault();
    this.setState({
      selectedQuantity: event.target.value
    });
  }

  openSizeSelect() {
    // document.getElementById('size-selector').size = `${Object.keys(this.state.selectedStyle.skus.length)}`;
    document.getElementById('size-selector').size = '12';
  }

  componentDidMount() {
    // this.getProductInfo();
    // this.getStyles();
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
          photos={this.props.selectedStyle.photos}
          selectedphotoindex={this.state.selectedPhotoIndex}
        />
        <div>
          <ProductInfo
            productinfo={this.props.productInfo}
          />
          <StyleSelector
            styles={this.props.styles}
            selectedstyle={this.props.selectedStyle}
            handleStyleSelect={this.props.handleStyleSelect}
          />
          <AddToCart
            selectedsize={this.state.selectedSize}
            selectedstyle={this.props.selectedStyle}
            selectedquantity={this.state.selectedQuantity}
            handlesizeselect={this.handleSizeSelect.bind(this)}
            handlequantityselect={this.handleQuantitySelect.bind(this)}
            handlecartsubmit={this.handleCartSubmit.bind(this)}
            opensizeselect={this.openSizeSelect.bind(this)}
          />
        </div>
      </div>
    );
  }
};

export default ProductDetail;
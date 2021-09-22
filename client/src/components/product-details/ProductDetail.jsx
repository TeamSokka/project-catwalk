//ProductDetail extends React.Component
import React from 'react';
import axios from 'axios';
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
// import StarRatings from '../ratings&reviews/ReviewList/StarRatings.jsx';
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
      cart: null,
      topThumbnail: 0
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
        // console.log('cart data recd:', res.data);
      })
      .catch((err) => {
        console.error(err);
      })
  }

  handleCartSubmit(event) {
    event.preventDefault();
    var count = parseInt(event.target.quantity.value);
    for (var i = 1; i <= count; i++) {
      this.postToCart({ sku_id: event.target.sizesku.value });
    }
  }

  openSizeSelect() {
    // document.getElementById('size-selector').size = `${Object.keys(this.state.selectedStyle.skus.length)}`;
    document.getElementById('size-selector').size = '12';
  }

  handleSizeSelect(event) {
    event.preventDefault();
    this.setState({
      selectedSize: this.props.selectedStyle.skus[event.target.value]
    });
    event.target.size = '1';
  }

  handleQuantitySelect(event) {
    event.preventDefault();
    this.setState({
      selectedQuantity: event.target.value
    });
  }

  handleThumbnailClick(event) {
    event.preventDefault();
    console.log('event.target.dataset.index:', event.target.dataset.index);
    this.setState({
      selectedPhotoIndex: event.target.dataset.index
    });

    document.getElementById('selected-image').id = '';
    event.target.id = 'selected-image';
    // event.target.classList.toggle('selected');
  }

  handleUpArrowClick(event) {
    event.preventDefault();
    this.setState({
      topThumbnail: this.state.topThumbnail - 1
    });
  }

  handleDownArrowClick(event) {
    event.preventDefault();
    this.setState({
      topThumbnail: this.state.topThumbnail + 1
    });
  }

  handleLeftArrowClick(event) {
    this.setState({
      selectedPhotoIndex: this.state.selectedPhotoIndex - 1
    })
  }

  handleRightArrowClick(event) {
    event.preventDefault();
    this.setState({
      selectedPhotoIndex: this.state.selectedPhotoIndex + 1
    })
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
    console.log('state:', this.state)
    console.log('this.props:', this.props);
  }

  render() {
    return (
      <div id="overview-box">
        <ImageGallery
          photos={this.props.selectedStyle.photos}
          selectedPhotoIndex={this.state.selectedPhotoIndex}
          handleThumbnailClick={this.handleThumbnailClick.bind(this)}
          topThumbnail={this.state.topThumbnail}
          handleUpArrowClick={this.handleUpArrowClick.bind(this)}
          handleDownArrowClick={this.handleDownArrowClick.bind(this)}
          handleLeftArrowClick={this.handleLeftArrowClick.bind(this)}
          handleRightArrowClick={this.handleRightArrowClick.bind(this)}
        />
        <div id="next-to-image">
          <ProductInfo
            productInfo={this.props.productInfo}
            selectedStyle={this.props.selectedStyle}
            metaData={this.props.metaData}
            metaReady={this.props.metaReady}
          />
          <StyleSelector
            styles={this.props.styles}
            selectedStyle={this.props.selectedStyle}
            handleStyleSelect={this.props.handleStyleSelect}
          />
          <AddToCart
            selectedSize={this.state.selectedSize}
            selectedStyle={this.props.selectedStyle}
            selectedQuantity={this.state.selectedQuantity}
            handleSizeSelect={this.handleSizeSelect.bind(this)}
            handleQuantitySelect={this.handleQuantitySelect.bind(this)}
            handleCartSubmit={this.handleCartSubmit.bind(this)}
            openSizeSelect={this.openSizeSelect.bind(this)}
          />
        </div>
      </div>
    );
  }
};

export default ProductDetail;
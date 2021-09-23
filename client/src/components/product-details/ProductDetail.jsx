//ProductDetail extends React.Component
import React from 'react';
import axios from 'axios';
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import ExpandedView from './ExpandedView.jsx';
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
      topThumbnail: 0,
      expanded: false,
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
    // console.log('event.target.dataset.index:', event.target.dataset.index);
    // console.log('typeof event.target.dataset.index:', typeof event.target.dataset.index);
    // console.log('event.target.id:', event.target.id);
    let newPhotoIndex = parseInt(event.target.dataset.index);
    this.setState({
      selectedPhotoIndex: newPhotoIndex
    });

    if (document.getElementById('selected-image')) {
      // console.log('prev selected img:', document.getElementById('selected-image'));
      document.getElementById('selected-image').id = '';
      event.target.id = 'selected-image';
    } else {
      console.error('Cannot getElementById "selected-image"');
    }
    event.target.classList.toggle('selected');
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
    event.preventDefault();
    let newPhotoIndex = this.state.selectedPhotoIndex - 1;
    this.setState({
      selectedPhotoIndex: newPhotoIndex
    })
    // if (document.getElementById('selected-image')) {
    //   console.log('prev selected img:', document.getElementById('selected-image'));
    //   document.getElementById('selected-image').id = '';
    //   // event.target.id = 'selected-image';
    // } else {
    //   console.log('Cannot getElementById "selected-image"');
    // }
  }

  handleRightArrowClick(event) {
    event.preventDefault();
    let newPhotoIndex = this.state.selectedPhotoIndex + 1;
    this.setState({
      selectedPhotoIndex: newPhotoIndex
    });
    // if (document.getElementById('selected-image')) {
    //   console.log('prev selected img:', document.getElementById('selected-image'));
    //   document.getElementById('selected-image').id = '';
    //   // event.target.id = 'selected-image';
    // } else {
    //   console.log('Cannot getElementById "selected-image"');
    // }
  }

  handleDefaultImageClick(event) {
    event.preventDefault();
    this.setState({
      expanded: true
    });
  }

  handleExitExpandedClick(event) {
    event.preventDefault();
    this.setState({
      expanded: false
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
    // console.log('state:', this.state)
    // console.log('this.props:', this.props);
  }

  render() {
    return (
      <div id="overview-box">
        {this.state.expanded === false
          ? <ImageGallery
              photos={this.props.selectedStyle.photos}
              selectedPhotoIndex={this.state.selectedPhotoIndex}
              handleThumbnailClick={this.handleThumbnailClick.bind(this)}
              topThumbnail={this.state.topThumbnail}
              handleUpArrowClick={this.handleUpArrowClick.bind(this)}
              handleDownArrowClick={this.handleDownArrowClick.bind(this)}
              handleLeftArrowClick={this.handleLeftArrowClick.bind(this)}
              handleRightArrowClick={this.handleRightArrowClick.bind(this)}
              handleDefaultImageClick={this.handleDefaultImageClick.bind(this)}

            />
          : <ExpandedView
              photos={this.props.selectedStyle.photos}
              selectedPhotoIndex={this.state.selectedPhotoIndex}
              selectedPhoto={this.props.selectedStyle.photos[this.state.selectedPhotoIndex]}
              handleThumbnailClick={this.handleThumbnailClick.bind(this)}
              topThumbnail={this.state.topThumbnail}
              handleLeftArrowClick={this.handleLeftArrowClick.bind(this)}
              handleRightArrowClick={this.handleRightArrowClick.bind(this)}
              handleExitExpandedClick={this.handleExitExpandedClick.bind(this)}
        />
        }

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


// {this.state.expanded === false
//   ? <ImageGallery
//       photos={this.props.selectedStyle.photos}
//       selectedPhotoIndex={this.state.selectedPhotoIndex}
//       handleThumbnailClick={this.handleThumbnailClick.bind(this)}
//       topThumbnail={this.state.topThumbnail}
//       handleUpArrowClick={this.handleUpArrowClick.bind(this)}
//       handleDownArrowClick={this.handleDownArrowClick.bind(this)}
//       handleLeftArrowClick={this.handleLeftArrowClick.bind(this)}
//       handleRightArrowClick={this.handleRightArrowClick.bind(this)}
//       handleDefaultImageClick={this.handleDefaultImageClick.bind(this)}

//     />
//   : <ExpandedView
//       photos={this.props.selectedStyle.photos}
//       selectedPhotoIndex={this.state.selectedPhotoIndex}
//       handleThumbnailClick={this.handleThumbnailClick.bind(this)}
//       topThumbnail={this.state.topThumbnail}
//       handleLeftArrowClick={this.handleLeftArrowClick.bind(this)}
//       handleRightArrowClick={this.handleRightArrowClick.bind(this)}
//       handleExitExpandedClick
//       handleExitExpandedClick={this.handleExitExpandedClick.bind(this)}
// />
// }
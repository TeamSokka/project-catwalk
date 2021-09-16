import React from 'react';

import QuestionsAndAnswers from '../components/Q&A/QuestionsAndAnswers.jsx';
import RelatedItems from './RelatedItems&OutfitCreation/RelatedItems';
import RatingsAndReviews from './ratings&reviews/RatingsAndReviews';
import ProductDetail from './product-details/ProductDetail.jsx';

import { formatRelatedItems } from '../components/helpers/_functions.js';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productID: '40348', // example product id
      productInfo: {},
      relatedProducts: [],
      metaData: {},
    }

    this.fetchMeta = this.fetchMeta.bind(this);
  }

  componentDidMount() {
    this.getRelated(this.state.currentProductId);
    this.getProductInfo(this.state.currentProductId);
  }

  getProductInfo = () => {
    axios.get(`/products/${this.state.productID}`)
      .then((res) => {
        // console.log('productInfo recd:', res.data);
        this.setState({
          productInfo: res.data
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  getRelated = () => {
    axios.get(`/products/${this.state.productID}/related`)
      .then((res) => {
        // console.log('related products recd:', res.data);
        this.setState({
          relatedProducts: res.data
        })
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // Get meta reviews
  fetchMeta() {
    const { productID } = this.state;
    axios.get(`/reviews/meta/?product_id=${productID}`)
      .then((result) => {
        this.setState({
          metaData: result.data
        });
      })
      .catch((error) => {
        console.log('Error with fetchMeta ' + error);
      })
  }

  render() {
    const { productID, productInfo, relatedProducts, metaData } = this.state;
    return (
      <div>
        {/* <ProductDetail
          productID={productID}
          productInfo={productInfo}
        /> */}
        <RatingsAndReviews
          productID={productID}
          metaData={metaData}
          productInfo={productInfo}
        />

        <QuestionsAndAnswers productID={productID} />

        <RelatedItems
          productID={productID}
          productInfo={productInfo}
          relatedProducts={relatedProducts}
        />
      </div>
    )
  }
};

export default App;
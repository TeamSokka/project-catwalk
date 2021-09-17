import React from 'react';

import QuestionsAndAnswers from '../components/Q&A/QuestionsAndAnswers.jsx';
import RelatedItems from './RelatedItems&OutfitCreation/RelatedItems';
import RatingsAndReviews from './ratings&reviews/RatingsAndReviews';
import ProductDetail from './product-details/ProductDetail.jsx';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productID: '40348', // example product id
      productInfo: {},
      relatedProducts: [],
      styles: [],
      selectedStyle: { photos: [], skus: {} },
      metaData: {},
    }
    // this.fetchMeta = this.fetchMeta.bind(this);
  }

  componentDidMount() {
    this.fetchMeta();
    this.getRelated(this.state.productID);
    this.getProductInfo(this.state.productID);
    this.getStyles();
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

  getStyles() {
    axios.get(`/products/${this.state.productID}/styles`)
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
    const { productID, productInfo, relatedProducts, styles, selectedStyle, metaData } = this.state;

    // console.log('app state// productInfo', productInfo);
    // console.log('app state// relatedPro', relatedProducts);

    return (
      <div>
        {/* <ProductDetail
          productID={productID}
          productInfo={productInfo}
          styles={styles}
          selectedStyle={selectedStyle}
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
          selectedStyle={selectedStyle}
        />
      </div>
    )
  }
};

export default App;
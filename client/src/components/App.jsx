import React, { Suspense } from 'react';

import QuestionsAndAnswers from '../components/Q&A/QuestionsAndAnswers.jsx';
import Cards from './RelatedItems&OutfitCreation/Cards';
import RatingsAndReviews from './ratings&reviews/RatingsAndReviews';
import ProductDetail from './product-details/ProductDetail.jsx';


// const QuestionsAndAnswers = React.lazy(() => import('../components/Q&A/QuestionsAndAnswers.jsx'));
// const RelatedItems = React.lazy(() => import('./RelatedItems&OutfitCreation/RelatedItems'));
// const RatingsAndReviews = React.lazy(() => import('./ratings&reviews/RatingsAndReviews'));
// const ProductDetail = React.lazy(() => import('./product-details/ProductDetail.jsx'));

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productID: 40344, // example product id, change to num
      productInfo: {},
      relatedProducts: [],
      styles: [],
      selectedStyle: { photos: [], skus: {} },
      metaData: {},
      metaReady: false,
    }
    // this.fetchMeta = this.fetchMeta.bind(this);
  }

  componentDidMount() {
    const { productInfo, productID } = this.state;

    this.fetchMeta();
    this.getRelated(productID);
    this.getProductInfo(productID);
    this.getStyles();
  }

  setProductInfo = (data) => {
    this.setState({
      productInfo: data
    })
  }
  /*stormi: refactor function to take in id, callback. The callback is defaulted to setProductInfo.
    This allows me to pass in a custom callback without changing the productInfo state
  */
  getProductInfo = (id, callback = this.setProductInfo) => {
    axios.get(`/products/${id}`)
      .then(({ data }) => {
        callback(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  getStyles() {
    axios.get(`/products/${this.state.productID}/styles`)
      .then((res) => {
        // console.log('skus[0]:', Object.keys(res.data.results[0].skus)[0])
        this.setState({
          styles: res.data.results,
          selectedStyle: res.data.results[0],
          // selectedSize: res.data.results[0].skus[Object.keys(res.data.results[0].skus)[0]]
        });
        // console.log('state:', this.state)
      })
      .catch((err) => {
        console.error(err);
      })
  }

  handleStyleSelect(event) {
    event.preventDefault();
    // console.log('event.target:', event.target);
    // console.log('event.target.dataset.index:', event.target.dataset.index);
    this.setState({
      selectedStyle: this.state.styles[event.target.dataset.index]
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
          metaData: result.data,
          metaReady: true,
        });
      })
      .catch((error) => {
        console.log('Error with fetchMeta ' + error);
      })
  }

  render() {
    const { productID, productInfo, relatedProducts, styles, selectedStyle, metaData, metaReady } = this.state;

    // console.log('app state// productInfo', productInfo);
    // console.log('app state// relatedPro', relatedProducts);

    return (
      <div>
        {/* <Suspense fallback={<div>Loading...</div>}>
          <section>
          </section>
        </Suspense> */}

        <ProductDetail
          productID={productID}
          productInfo={productInfo}
          styles={styles}
          selectedStyle={selectedStyle}
          handleStyleSelect={this.handleStyleSelect.bind(this)}
          metaData={metaData}
          metaReady={metaReady}
        />


        <Cards
          productInfo={productInfo}
          relatedProducts={relatedProducts}
        />

        <QuestionsAndAnswers
          productID={productID}
          productInfo={productInfo}
        />

        {
          this.state.metaReady === true
          &&
          <RatingsAndReviews
            productID={productID}
            metaData={metaData}
            productInfo={productInfo}
          />
        }
      </div>
    )
  }
};

export default App;
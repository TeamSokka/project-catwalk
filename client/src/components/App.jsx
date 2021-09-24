import React, { Suspense } from 'react';

// import Banner from './Banner.jsx';
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
      isLoading: false,
      productID: 40348,
      productInfo: {},
      relatedProducts: [],
      styles: [],
      selectedStyle: { photos: [], skus: {} },
      metaData: {},
      metaReady: false,
    }
  }

  componentDidMount() {
    const { productInfo, productID } = this.state;
    this.initLoadData(productID);
    this.setState({
      ...this.state,
      isLoading: false
    })
  }

  initLoadData = (id) => {
    this.setState({
      ...this.state,
      isLoading: true
    });
    this.fetchMeta();
    this.getRelated(id);
    this.getProductInfo(id);
    this.getStyles();
  }

  setProductInfo = (data) => {
    this.setState({
      productInfo: data
    })
  }

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
        this.setState({
          styles: res.data.results,
          selectedStyle: res.data.results[0],
        });
      })
      .catch((err) => {
        console.error(err);
      })
  }

  handleStyleSelect(event) {
    event.preventDefault();
    this.setState({
      selectedStyle: this.state.styles[event.target.dataset.index]
    })
  }

  getRelated = () => {
    axios.get(`/products/${this.state.productID}/related`)
      .then((res) => {
        this.setState({
          relatedProducts: res.data
        })
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleProductChange = (id) => {
    // console.log('id: ', id);
    const { isLoading } = this.state;
    if (isLoading) return;
    this.initLoadData(id);
    this.setState({
      ...this.state,
      productID: id,
      isLoading: false
    });
  }

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

    return (
      <div>
        {/* <Suspense fallback={<div>Loading...</div>}>
          <section>
          </section>
        </Suspense> */}
        {/* <Banner /> */}

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
          handleProductChange={this.handleProductChange}
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
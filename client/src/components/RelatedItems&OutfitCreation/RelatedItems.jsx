import React from 'react';
import { formatRelatedItems } from '../helpers/_functions.js'
import RelatedProductCards from './RelatedProductCards';
import axios from 'axios';

//this.props.productID
class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductId: 40347,
      productInfo: [],
      relatedProducts: []
    }
  }

  //  componentDidMount() {
  //   this.getRelated(this.state.currentProductId);
  //   this.getProductInfo(this.state.currentProductId);
  //  }

  // getProductInfo(id) {
  // axios.get(`/products/${this.state.currentProductId}`, {
  //   params: {
  //     product_id: id
  //   }
  // })
  //   .then(({ data }) => {
  //     const product = formatRelatedItems(data);
  //     console.log('product: ', product);
  //     this.setState({
  //       productInfo: product
  //     });
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });
  // }

  // getRelated(id) {
  //   //currentProductID check?
  //   console.log(this.state.currentProductId);
  //   axios.get(`/products/${this.state.currentProductId}/related`, {
  //     params: {
  //       product_id: id
  //     }
  //   })
  //     .then((res) => {
  //       console.log('related products recd: (related items)', res.data);
  //       // this.setState({
  //       //   relatedProducts: res.data
  //       // })
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }

  render() {
    const { productID } = this.props;
    // console.log('productID: from app //hardcoded', productID);
    // console.log('this is the state relate products', this.state.ProductInfo);
    return (
      <div>
        <h1>Related Items</h1>

        <RelatedProductCards
          productID={productID}
        />
      </div>
    )
  }
}

export default RelatedItems;

/*
1.4.1.3.  Action button
A button will appear on the top right corner of each product card.  This button will trigger different functionality depending on which list, Related Products or Your Outfit, the card appears within. The button will also display a different value depending on which list the card appears within.
*/

//import axios
//index.js has get request : getRelated
import React from 'react';
<<<<<<< HEAD
// import ProductCard from './ProductCard';
// import './related-items.scss';
=======
import { formatRelatedItems } from '../helpers/_functions.js'
import './related-items.scss';
>>>>>>> main

class ProductInformation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {productInfo} = this.props;
    const information = formatRelatedItems(productInfo);

    // console.log('price: ', price);
    console.log('information: ', information);

    return (
      <div id="product-info">
<<<<<<< HEAD
        <p>category</p>
        <p>name</p>
        <p>price</p>
        <p>rating</p>
=======
        <div id="info-category">
          <p>{information.category}</p>
        </div>
        <div id="info-name">
          <p>{information.name}</p>
        </div>
        <div id="info-price">
          {/* <p>${price}</p> */}
        </div>
>>>>>>> main
      </div>
    )
  }
}

export default ProductInformation;

//props will have information (api)
//this component will map over all the data
//this information is read only
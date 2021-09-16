import React from 'react';
// import ProductCard from './ProductCard';
// import './related-items.scss';

class ProductInformation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="product-info">
        <p>category</p>
        <p>name</p>
        <p>price</p>
        <p>rating</p>
      </div>
    )
  }
}

export default ProductInformation;

//props will have information (api)
//this component will map over all the data
//this information is read only
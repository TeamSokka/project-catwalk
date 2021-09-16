import React from 'react';
import { formatRelatedItems } from '../helpers/_functions.js'
import './related-items.scss';

class ProductInformation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {productInfo} = this.props;
    const information = formatRelatedItems(productInfo);

    return (
      <div id="product-info">
        <div>
          <p>{information.category}
            <br />{information.name}
            <br />${information.price}
            <br /> Star rating
          </p>
        </div>
      </div>
    )
  }
}

export default ProductInformation;
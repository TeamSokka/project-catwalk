import React from 'react';
import RelatedProductCards from './RelatedProductCards';
import OutfitCreations from './OutfitCreations';
import axios from 'axios';

const RelatedItems = (props) => {
  const { productID, productInfo, relatedProducts, selectedStyle, getProductInfo } = props;

  return (
    <div>
      <h3>RELATED PRODUCTS</h3>

      <RelatedProductCards
        productInfo={productInfo}
        relatedProducts={relatedProducts}
        selectedStyle={selectedStyle}
        getProductInfo={getProductInfo}
      />
      <OutfitCreations />
    </div>
  )
}

export default RelatedItems;

/*
1.4.1.3.  Action button
A button will appear on the top right corner of each product card.  This button will trigger different functionality depending on which list, Related Products or Your Outfit, the card appears within. The button will also display a different value depending on which list the card appears within.
*/


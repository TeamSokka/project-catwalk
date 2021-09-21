import React, { useState } from 'react';
import RelatedProductCards from './RelatedProductCards';
import OutfitCreations from './OutfitCreations';
import axios from 'axios';

const RelatedItems = (props) => {
  const { productInfo, relatedProducts } = props;
  // console.log('relatedProducts: ', relatedProducts);

  const [outfits, setOutfits] = useState([]);

  const handleAddOutfit = () => {
    // setOutfits(...)
  }

  const outfit = relatedProducts.map(product => {})

  return (
    <div>
      <h3>RELATED PRODUCTS</h3>

      <RelatedProductCards
        productInfo={productInfo}
        relatedProducts={relatedProducts}
      />
      <OutfitCreations
        // productInfo={productInfo}
        relatedProducts={relatedProducts}
      />
    </div>
  )
}

export default RelatedItems;

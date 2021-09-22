import React, { useState } from 'react';
import RelatedProductCards from './Related/RelatedProductCards';
import OutfitCreations from './Outfit/OutfitCreations';
import axios from 'axios';

const Cards = (props) => {
  const { productInfo, relatedProducts } = props;
  const [outfits, setOutfits] = useState([])

  const handleAddOutfit = (outfit) => {
    setOutfits([...outfits, outfit]);
  }

  return (
    <div id="related-items">
      <h3 id="related-title">RELATED PRODUCTS</h3>
      <RelatedProductCards
        productInfo={productInfo}
        relatedProducts={relatedProducts}
      />

      <h3 id="outfit-title">YOUR OUTFIT</h3>
      <OutfitCreations
        productInfo={productInfo}
        handleAddOutfit={handleAddOutfit}
        outfits={outfits}
      />
    </div>
  )
}

export default Cards;

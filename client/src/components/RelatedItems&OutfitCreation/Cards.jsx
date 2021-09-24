import React, { useState } from 'react';
import RelatedProductCards from './Related/RelatedProductCards';
import OutfitCreations from './Outfit/OutfitCreations';
import Comparing from './Comparing/Comparing';
import axios from 'axios';

const Cards = (props) => {
  const { productInfo, relatedProducts } = props;
  const [outfits, setOutfits] = useState([])
  const [comparingModal, setComparingModal] = useState(false);
  const [comparedProduct, setComparedProduct] = useState(undefined)

  const handleAddOutfit = (outfit) => {
    setOutfits([...outfits, outfit]);
  }

  const handleDeleteOutfit = (id) => {
    setOutfits(outfits => (outfits.filter((outfit, i) => i !== id)))
  }
  const handleComparison = (id) => {
    setComparedProduct(relatedProducts[id]);
    setComparingModal(true);
  }
  const exitComparison = (e) => {
    setComparedProduct(undefined);
    setComparingModal(false);
  }

  return (
    <div id="related-items">
      <h3 id="related-title">RELATED PRODUCTS</h3>
      <RelatedProductCards
        productInfo={productInfo}
        relatedProducts={relatedProducts}
        handleComparison={handleComparison}
      />

      <h3 id="outfit-title">YOUR OUTFIT</h3>
      <OutfitCreations
        outfits={outfits}
        productInfo={productInfo}
        handleAddOutfit={handleAddOutfit}
        handleDeleteOutfit={handleDeleteOutfit}
      />
      {
        comparingModal && (
          <Comparing
            productInfo={productInfo}
            comparedProduct={comparedProduct}
            exitComparison={exitComparison}
          />
        )
      }
    </div>
  )
}

export default Cards;

import React, { useState } from 'react';
import OutfitCard from './OutfitCard';
import { FiPlus } from 'react-icons/fi';
import '../related-items.scss';

const OutfitCreations = (props) => {
  const { productInfo, handleAddOutfit, outfits } = props;

  let handleAddNewOutfit = () => {
    let outfit = {
      name: productInfo.name,
      category: productInfo.category,
      price: productInfo.default_price,
      image: productInfo.styles[0],
    }
    handleAddOutfit(outfit);
  }


  return (
    <div id="outfit-card">
      <div id="outfit-product-card">
      {outfits.length >= 1 ?
        <OutfitCard outfits={outfits}/>
        :
        <div className="add-outfit" onClick={handleAddNewOutfit}>
          <FiPlus />
          <span>Add to Outfit</span>
        </div>}

      </div>
    </div>
  )
}

export default OutfitCreations;
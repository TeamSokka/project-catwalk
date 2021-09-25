import React, { useState } from 'react';
import OutfitCard from './OutfitCard';
import { FiPlus } from 'react-icons/fi';
import { VscTriangleLeft, VscTriangleRight } from 'react-icons/vsc';
import '../related-items.scss';

const OutfitCreations = (props) => {
  const { outfits, productInfo, handleAddOutfit, handleDeleteOutfit } = props;

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
      <VscTriangleLeft />
        <OutfitCard outfits={outfits} handleDeleteOutfit={handleDeleteOutfit}/>
        <div className="add-outfit" onClick={handleAddNewOutfit}>
          <FiPlus />
          <span>Add to Outfit</span>
        </div>
      <VscTriangleRight />
      </div>
    </div>
  )
}

export default OutfitCreations;
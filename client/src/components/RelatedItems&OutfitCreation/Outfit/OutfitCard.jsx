import React from 'react';
import OutfitImages from './OutfitImages';
import OutfitInformation from './OutfitInformation';
import { VscTriangleLeft, VscTriangleRight } from 'react-icons/vsc';
import '../related-items.scss';

const OutfitCard = (props) => {
  const { outfits, handleDeleteOutfit } = props;

  const outfit = outfits.map((outfit, index) =>
    <div className="product-card" key={index}>
      <OutfitImages
        image={outfit.image}
        id={index}
        handleDeleteOutfit={handleDeleteOutfit}
      />
      <OutfitInformation
        name={outfit.name}
        category={outfit.category}
        price={outfit.price}
      />
    </div>
  )

  return (
    <div id="outfit-product-card">
      <VscTriangleLeft />
      {outfit}
      <VscTriangleRight />
    </div>
  )
}

export default OutfitCard;
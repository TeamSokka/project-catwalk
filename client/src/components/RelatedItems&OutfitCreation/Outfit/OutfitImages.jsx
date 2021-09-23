import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';

const OutfitImages = (props) => {
  const { image, id, handleDeleteOutfit } = props;

  let targetImage = image.photos[0];

  return (
    <div id="product-preview-img">
      <TiDeleteOutline id="ti-delete" onClick={() => handleDeleteOutfit(id)}/>
      <img src={targetImage.thumbnail_url} id="preview-img"/>
    </div>
  )
}

export default OutfitImages;
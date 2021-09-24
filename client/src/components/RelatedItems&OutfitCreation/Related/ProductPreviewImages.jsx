import React from 'react';
// import {unavailablePhoto} from '../../../../dist/null-photo.jpeg';
import { BsFillStarFill } from 'react-icons/bs';

const ProductPreviewImages = (props) => {
  const { productStyles, id, handleComparison } = props;

  let images = productStyles[0].photos[0];

  return (
    <div id="product-preview-img">
      <BsFillStarFill id="bs-fill-star-fill" onClick={() => handleComparison(id)}/>
        <img src={images.thumbnail_url} id="preview-img"/>
    </div>
  )
}

export default ProductPreviewImages
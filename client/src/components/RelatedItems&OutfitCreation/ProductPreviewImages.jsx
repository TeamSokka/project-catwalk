import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';

const ProductPreviewImages = (props) => {
  const { productStyles } = props;

  let images = productStyles[0].photos[0];

  return (
    <div id="product-preview-img">
      <BsFillStarFill id="fa-star-o"/>
      <img src={images.thumbnail_url} id="preview-img"/>
    </div>
  )
}

export default ProductPreviewImages

//this will default to show
// when clicked ProductInformation will show
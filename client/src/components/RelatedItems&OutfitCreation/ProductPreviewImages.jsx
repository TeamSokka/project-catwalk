import React from 'react';
import { formatPreviewImage } from '../helpers/_functions.js'

const ProductPreviewImages = (props) => {
  const { productStyles } = props;

  let images = productStyles[0].photos[0];

  return (
    <div id="product-preview-img">
      <i className="fa fa-star-o " id="fa-star-o"></i>
      <img src={images.thumbnail_url} id="preview-img" />
    </div>
  )
}

export default ProductPreviewImages

//this will default to show
// when clicked ProductInformation will show